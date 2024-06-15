<?php


include( '/PHPMailer/src/class.phpmailer.php');


        $email_user = "no-responder@premiopam.cl"; //Mi correo
        $email_password = "nescar88++"; //Pass de mi correo
        $the_subject = "Mensaje de contacto";
        $address_to = "andy@andy.cl";
        $from_name = "Contacto norte";
   
   
   $mail = new PHPMailer();
$mail->IsSMTP(); // habilita SMTP
$mail->SMTPDebug = 1; // debugging: 1 = errores y mensajes, 2 = sólo mensajes
$mail->SMTPAuth = true; // auth habilitada
$mail->SMTPSecure = 'ssl'; // transferencia segura REQUERIDA para Gmail
$mail->Host = "localhost";
$mail->Port = 465; // or 587
$mail->IsHTML(true);
$mail->Username = $email_user;
$mail->Password =  $email_password;
$mail->SetFrom($email_user);
$mail->Subject = "Test";
$mail->Body = "hello";
$mail->AddAddress("andy@andy.cl");

 if(!$mail->Send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
 } else {
    echo "Message has been sent";
 }



?>