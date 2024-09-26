<?php


extract($_REQUEST);





 
include("CONFIGURACION.php");

$mysqli = new mysqli($_ENV['DB_HOST'], $_ENV['DB_USERNAME'], $_ENV['DB_PASSWORD'], $_ENV['DB_NAME']);
$sql = "SELECT count(*) as Cantidad FROM `votos` WHERE `EMAIL` = '".$email."';";
 

$result = $mysqli->query($sql);
$row=$result->fetch_array();
extract($row);

$estado="0";
$mensaje="";
$respuesta;
$errores=0;

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
	

         $email_user = "no-responder@premiopam.cl"; //Mi correo


         $contenido = "
         <style>

            @font-face {font-family: \"Akzidenz Grotesk BE Bold\"; src: url(\"//db.onlinewebfonts.com/t/0fecedcc2f33a0880b3f56b9290da4d5.eot\"); src: url(\"//db.onlinewebfonts.com/t/0fecedcc2f33a0880b3f56b9290da4d5.eot?#iefix\") format(\"embedded-opentype\"), url(\"//db.onlinewebfonts.com/t/0fecedcc2f33a0880b3f56b9290da4d5.woff2\") format(\"woff2\"), url(\"//db.onlinewebfonts.com/t/0fecedcc2f33a0880b3f56b9290da4d5.woff\") format(\"woff\"), url(\"//db.onlinewebfonts.com/t/0fecedcc2f33a0880b3f56b9290da4d5.ttf\") format(\"truetype\"), url(\"//db.onlinewebfonts.com/t/0fecedcc2f33a0880b3f56b9290da4d5.svg#Akzidenz Grotesk BE Bold\") format(\"svg\"); }

         </style>
         <table border= \"0 \" style= \"width: 100%;max-width: 600px; margin: 0 auto; \">
            <tbody>
               <tr>
                  <td style= \"width: 50%;text-align: left;vertical-align: top;font-family:  'Akzidenz Grotesk BE Bold'\">
                     <img style= \"width: 85%; \" src= \"https://premiopam.cl/img/PremioPamLogoBlanco.png \">		
                  </td>
                  <td style= \"width: 50%;vertical-align: top; \">
                     <h1 style= \"
                        display: block;
                        font-size: calc(1.5vw);
                        margin-block-start: unset;
                        margin-block-end: unset;
                        margin-inline-start: unset;
                        margin-inline-end: unset;
                        font-weight: bold;
                        font-family:  'Akzidenz Grotesk BE Bold';
                        \">Hola!</h1>
                     <p style= \"
                        display: block;
                        font-size: calc(1.05vw);
                        margin-block-start: unset;
                        margin-block-end: unset;
                        margin-inline-start: unset;
                        margin-inline-end: unset;
                        font-weight: bold;
                        font-family:  'Akzidenz Grotesk BE Bold ';
                        margin-top: calc(1vw);
                        margin-bottom: calc(1vw);
                        color: black;
                        \">Para completar la votación, haz clic en el siguiente link</p>
                     <a href= \"".$token."\" target= \"_blank \"  style= \"
                        display: block;
                        font-size: calc(1.05vw);
                        margin-block-start: unset;
                        margin-block-end: unset;
                        margin-inline-start: unset;
                        margin-inline-end: unset;
                        font-weight: bold;
                        font-family:  'Akzidenz Grotesk BE Bold ';
                        margin-top: calc(1vw);
                        margin-bottom: calc(1vw);
                        color: blue;
                        \">".$token."</a>
                     
               <p><strong style= \"
                        display: block;
                        font-size: calc(1.05vw);
                        margin-block-start: unset;
                        margin-block-end: unset;
                        margin-inline-start: unset;
                        margin-inline-end: unset;
                        font-weight: bold;
                        font-family:  'Akzidenz Grotesk BE Bold';
                        margin-top: calc(1vw);
                        margin-bottom: calc(1vw);
                        color: black;
                        \">* Si no puedes hacer click en el enlace, copia y pega el link en el navegador.</strong></p>
                     
                     <p><strong style= \"
                        display: block;
                        font-size: calc(1.05vw);
                        margin-block-start: unset;
                        margin-block-end: unset;
                        margin-inline-start: unset;
                        margin-inline-end: unset;
                        font-weight: bold;
                        font-family:  'Akzidenz Grotesk BE Bold';
                        margin-top: calc(1vw);
                        margin-bottom: calc(1vw);
                        color: black;
                        \">Muchas gracias.</strong></p>
                     <p><strong style= \"
                        display: block;
                        font-size: calc(1vw);
                        margin-block-start: unset;
                        margin-block-end: unset;
                        margin-inline-start: unset;
                        margin-inline-end: unset;
                        font-weight: bold;
                        font-family:  'Akzidenz Grotesk BE Bold ';
                        margin-top: calc(1vw);
                        margin-bottom: calc(1vw);
                        \">FUNDACIÓN ANTENNA</strong></p>
                  </td>
               </tr>
               <tr>
                  <td colspan= \"2 \">
                     <img style= \"width: 100% \" src= \"https://premiopam.cl/img/presenta.png \">
                  </td>
               </tr>
            </tbody>
         </table>";




         $headers = "MIME-Version: 1.0" . "\r\n";
         $headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";
         $headers .= "From: $email_user" . "\r\n";
         $headers .= "Reply-To: $email_user" . "\r\n";
         $headers .= "X-Mailer: PHP/" . phpversion();

         $the_subject = "Confirma tu voto";

         // Envío del correo
         $mailEnviado = mail($email, $the_subject, $contenido, $headers);

         if ($mailEnviado) {
            echo "El correo se envió correctamente.";
         } else {
            echo "Hubo un error al enviar el correo.";
         }


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