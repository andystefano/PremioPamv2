<?php

date_default_timezone_set("America/Santiago");



extract($_REQUEST);


//SetFotoPrincipal.phpnum=2&id=1 
//FOTOGRAFIA_RETRATO


 

$sql = "UPDATE `postulaciones_pam` SET `FOTO_SELECCION` = '".$num."' WHERE `postulaciones_pam`.`ID_POSTULACION` =".$id." ;";


 

$mysqli = new mysqli("localhost", "premiopam_2023", "Nescar88++", "premiopam_2023");

/* comprobar la conexión. */
if (mysqli_connect_errno()) {
    printf("Error de conexión: %s\n", mysqli_connect_error());
    exit();
}


if($mysqli->query($sql)){
?>	
	<script>
 
 alert('Fotografia Selecionada y Guardada');

</script>
<?php	
}else{
?>	
	<script>
 
 alert('Error');
</script>
<?php	
	
	
}

 

/* close connection */
$mysqli->close();

 
 



 
?>