<?php

require_once 'VerifyEmail.php'; 

// Initialize library class
$mail = new VerifyEmail();

// Set the timeout value on stream
$mail->setStreamTimeoutWait(20);

// Set debug output mode
$mail->Debug= TRUE; 
$mail->Debugoutput= 'html'; 

// Set email address for SMTP request
$mail->setEmailFrom('no-responder@premiopam.cl');


$sql = "SELECT * FROM `votos` WHERE `VALIDO` IS NULL AND ESTADO=0 LIMIT 1";


$mysqli = new mysqli("localhost", "premiopam_2023", "Nescar88++", "premiopam_2023");

//$mysqli->query("SET NAMES 'utf8'");
 
$result = $mysqli->query($sql);
while($row=$result->fetch_array()){
extract($row);




// Email to check
$email = $EMAIL; 

// Verificar si el correo es valido y existe
if($mail->check($email)){ 
    echo 'Email '.$email.' El correo existe!'; 
}elseif(verifyEmail::validate($email)){ 
    echo 'Email '.$email.' El correo es valido pero no existe!'; 
}else{ 
    echo 'Email '.$email.' El correo no es valido!'; 
} 



}

?>