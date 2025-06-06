
			   
			<?php


$sql = "SELECT * FROM `postulaciones_pam` WHERE `ESTADO_POSTULACION` = 'APROBADO' ORDER BY `ID_POSTULACION` ASC ";


 

													
$mysqli = new mysqli("localhost", "premiopam_2023", "Nescar88++", "premiopam_2023");

//$mysqli->query("SET NAMES 'utf8'");
 
$result = $mysqli->query($sql);

 

$fotos = array();	  

while($row=$result->fetch_array()) {
extract($row);
 
 

 if($NUMERO=="38" or $NUMERO=="101"){ ?>


<?php
}else{


	
if(file_exists("media/".$ID_POSTULACION."/1.jpg")){
$fotos[]="media/".$ID_POSTULACION."/1.jpg";		
}

if(file_exists("media/".$ID_POSTULACION."/2.jpg")){

if(strlen($fotos)>0){	
$fotos.=",";		
}


$fotos[]="media/".$ID_POSTULACION."/2.jpg";		


	
}



if(file_exists("media/".$ID_POSTULACION."/3.jpg")){

if(strlen($fotos)>0){	
$fotos.=",";		
}

$fotos[]="media/".$ID_POSTULACION."/3.jpg";		

	
}


?>	
<?php	
}


}

 
foreach ($fotos as $clave => $valor) {
    // $array[3] se actualizará con cada valor de $array...
    //echo "{$clave} => {$valor} ";
   
	echo "<img src='".$valor."'/>";

}



//echo var_dump($fotos);
?>
