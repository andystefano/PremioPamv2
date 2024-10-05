<?php


extract($_REQUEST);

session_start();



 
include("CONFIGURACION.php");
include("FNConfirmaVotoMail2024.php");



$mysqli = new mysqli($_ENV['DB_HOST'], $_ENV['DB_USERNAME'], $_ENV['DB_PASSWORD'], $_ENV['DB_NAME']);
$sql = "SELECT count(*) as Cantidad FROM `votos` WHERE `EMAIL` = '".$email."';";
 

$result = $mysqli->query($sql);
$row=$result->fetch_array();
extract($row);

$estado="0";
$mensaje="";
$respuesta;
$errores=0;


if($_SESSION['crf']!=$crf){
   $estado="-1";
   $mensaje="Voto no autorizado, reporte registrado. ".$crf." /".$_SESSION['crf']."_";
   $errores++;	   
}

if(!(strlen($nombre)>1) or !(strlen($nombre)>1) or !(strlen($email)>3)){
$estado="-1";
$mensaje="Debe completar el formulario.";
$errores++;	
}


if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
$estado="-1";
$mensaje="Ingrese email válido.";
$errores++;	
}


if($Cantidad!="0"){

$estado="-1";
$mensaje="Solo se admite un voto por cada email,<br/>la dirección ingresada ya tiene un voto registrado.";	
	
$respuesta['estado']=$estado;	
$respuesta['mensaje']=$mensaje;
	
}else if($errores==0){


$IP=$_SERVER["HTTP_X_REAL_IP"];
$CODIGO_VERIFICACION = MD5(date("YMDHis").rand(0,1000)."_".$idPostulacion);


$token = "https://premiopam.cl/confirma.php?token=".$CODIGO_VERIFICACION;

$sql ="INSERT INTO `votos` (`ID_VOTO`, `ID_POSTULACION`, `EMAIL`, `NOMBRE`, `APELLIDO`, `CODIGO_VERIFICACION`, `ESTADO`, `FECHA_VOTO`, `FECHA_CONFIRMACION`, `IP`) VALUES (NULL, '$idPostulacion', '$email', '$nombre', '$apellido', '$CODIGO_VERIFICACION', '0', DATE_SUB(NOW(), INTERVAL 3 HOUR), '0000-00-00 00:00:00.000000', '$IP');";
$stmt= $mysqli->prepare($sql);


if($stmt->execute()){


	$estado="1";
	$mensaje="Confirma tu voto con<br/>el link que enviamos<br/>a tu mail.";
   enviarCorreoVotacion($email,$token);


         if(!($mailEnviado)) {
         $sql ="UPDATE `votos` SET `ENVIO_INICIAL` = '-1',ERROR_ENVIO_INICIAL='".$mail->ErrorInfo."' WHERE `votos`.`ID_VOTO` = ".$mysqli->insert_id.";";
         $stmt= $mysqli->prepare($sql);
         $stmt->execute();
         } else {
         //    echo "Message has been sent";
         $sql ="UPDATE `votos` SET `ENVIO_INICIAL` = '1' WHERE `votos`.`ID_VOTO` = ".$mysqli->insert_id.";";
         $stmt= $mysqli->prepare($sql);
         $stmt->execute();
         }
         
            
            
            }else{
            $estado="-2";
            $mensaje="Error de servidor.";	
                  
            }



         $respuesta['estado']=$estado;	
         $respuesta['mensaje']=$mensaje;
            
            
         }else{
         $respuesta['estado']="-3";	
         $respuesta['mensaje']=$mensaje;
               
         }


         echo json_encode($respuesta);

?>