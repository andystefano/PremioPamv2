<?php


include("configuracion.php");

// Set Timezone
date_default_timezone_set("America/Santiago");

// Get Request data
extract($_REQUEST);

// Variable cleanup
$NOMBRE_APELLLIDO = $NOMBRE_APELLLIDO ? $NOMBRE_APELLLIDO : '';
$EDAD = $EDAD ? $EDAD : 0;
$FECHA_DE_NACIMIENTO = $FECHA_DE_NACIMIENTO ? $FECHA_DE_NACIMIENTO : '';
$TELEFONO = $TELEFONO ? $TELEFONO : '';
$EMAIL = $EMAIL ? $EMAIL : '';
$NACIONALIDAD = $NACIONALIDAD ? $NACIONALIDAD : '';
$LUGAR_RESIDENCIA = $LUGAR_RESIDENCIA ? $LUGAR_RESIDENCIA : '';
$BIOGRAFIA = $BIOGRAFIA ? $BIOGRAFIA : '';
$RRSS = $RRSS ? $RRSS : '';
$POSTULADA_POR = $POSTULADA_POR ? $POSTULADA_POR : '';
$PARENTESCO = $PARENTESCO ? $PARENTESCO : '';
$TITULO_DE_OBRA = $TITULO_DE_OBRA ? $TITULO_DE_OBRA : '';
$DIMENCIONES = $DIMENCIONES ? $DIMENCIONES : '';
$FECHA_CREACION = $FECHA_CREACION ? $FECHA_CREACION : '';
$TECNICA = $TECNICA ? $TECNICA : '';
$STATMENT = $STATMENT ? $STATMENT : '';
$LINK_WEB = $LINK_WEB ? $LINK_WEB : '';
$REGION_RESIDENCIA = $REGION_RESIDENCIA ? $REGION_RESIDENCIA : '';

//FOTOGRAFIA_RETRATO
$FOTOGRAFIA_RETRATO_X=1;
$FOTOGRAFIA_OBRA_1=1;
$FOTOGRAFIA_OBRA_2=2;
$FOTOGRAFIA_OBRA_3=3;

$response['status'] = 'error';
$response['message'] = 'No logrado';

 

$mysqli = new mysqli($_ENV['DB_HOST'], $_ENV['DB_USERNAME'], $_ENV['DB_PASSWORD'], $_ENV['DB_NAME']);


// Check connection
if ($mysqli->connect_errno) {
    $response['status'] = 'error';
    $response['message'] = 'Error de conexión: '.$mysqli->connect_errno;
    echo json_encode($response);
    exit;
}

// Preparar la declaración
$stmt = $mysqli->prepare("INSERT INTO `postulaciones_pam` (`NOMBRE_APELLLIDO`, `EDAD`, `FECHA_DE_NACIMIENTO`, `TELEFONO`, `EMAIL`, `NACIONALIDAD`, `LUGAR_RESIDENCIA`, `BIOGRAFIA`, `RRSS`, `POSTULADA_POR`, `PARENTESCO`, `FOTOGRAFIA_RETRATO`, `TITULO_DE_OBRA`, `DIMENCIONES`, `FECHA_CREACION`, `TECNICA`, `STATMENT`, `FOTOGRAFIA_OBRA_1`, `FOTOGRAFIA_OBRA_2`, `FOTOGRAFIA_OBRA_3`, `LINK_WEB`, `REGION_RESIDENCIA`, `FECHA`)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())");

// Vincular los parámetros
$stmt->bind_param("sissssssssssssssssssss", $NOMBRE_APELLLIDO, $EDAD, $FECHA_DE_NACIMIENTO, $TELEFONO, $EMAIL, $NACIONALIDAD, $LUGAR_RESIDENCIA, $BIOGRAFIA, $RRSS, $POSTULADA_POR, $PARENTESCO, $FOTOGRAFIA_RETRATO, $TITULO_DE_OBRA, $DIMENCIONES, $FECHA_CREACION, $TECNICA, $STATMENT, $FOTOGRAFIA_OBRA_1, $FOTOGRAFIA_OBRA_2, $FOTOGRAFIA_OBRA_3, $LINK_WEB, $REGION_RESIDENCIA);

// Ejecutar la declaración
if ($stmt->execute()) {
    $response['status'] = "success";
    $response['message'] = 'Postulación exitosa';
}

$registro = $mysqli->insert_id;

mkdir('media/'.$mysqli->insert_id);

$mysqli->close();

// Ahora se suben los archivos
$folder = 'media/'.$registro.'/';

if (isset($_FILES['FOTOGRAFIA_RETRATO_X'])) {
    move_uploaded_file($_FILES['FOTOGRAFIA_RETRATO_X']['tmp_name'], $folder.'RETRATO.jpg');
}

if (isset($_FILES['FOTOGRAFIA_OBRA_1_X'])) {
    move_uploaded_file($_FILES['FOTOGRAFIA_OBRA_1_X']['tmp_name'], $folder.'1.jpg');
}

if (isset($_FILES['FOTOGRAFIA_OBRA_2_X'])) {
    move_uploaded_file($_FILES['FOTOGRAFIA_OBRA_2_X']['tmp_name'], $folder.'2.jpg');
}

if (isset($_FILES['FOTOGRAFIA_OBRA_3_X'])) {
    move_uploaded_file($_FILES['FOTOGRAFIA_OBRA_3_X']['tmp_name'], $folder.'3.jpg');
}

$EMAIL_HOST = "smtp.mailgun.org";
$EMAIL_PORT = 465;
$EMAIL_USERNAME = "no-responder@mg.premiopam.cl";
$EMAIL_PASSWORD = "d62ef00399feceda5d7015daadcbaf41-c30053db-e5631e8d";
$EMAIL_ENCRYPTION = "tls";

// ... Resto del código ...

// Configurar los encabezados del correo
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: Premio PAM <premiopam@antenna.cl>" . "\r\n";

// Cuerpo del correo electrónico
$subject = "Ya estás participando";
$body = '
<html>
<body>
<div style="text-align: center;">
    <img style="max-width:80% ; width:100%;" src="https://premiopam.cl/media/MAIL-POSTULACION.png">
</div>
</body>
</html>';

// Enviar el correo electrónico y verificar si se envió correctamente
mail($EMAIL, $subject, $body, $headers);


//Aviso Interno******
// Cuerpo del correo electrónico
$subject = "Postulación Exitosa";
$body = '
<html>
<body>
<h2>¡Buenas Noticias!,</h2>
<p>Con fecha ' . date("Y/m/d") . ' ' . date("h:h:s") . ' se ha recibido una nueva postulaci&oacute;n de la concursante <b>' . $NOMBRE_APELLLIDO . '</b>, ' . $EDAD . ' años, nacionalidad ' . $NACIONALIDAD . ', lugar de residencia ' . $LUGAR_RESIDENCIA . ' .</p>
<img style="width: 50%:height:auto;" src="https://premiopam.cl/media/' . $registro . '/RETRATO.jpg">
<br/>
<p>Biograf&iacute;a: ' . $BIOGRAFIA . '.</p>
<p>T&iacute;tulo obra: ' . $TITULO_DE_OBRA . '.</p>
<p>Dimenciones: ' . $DIMENCIONES . '.</p>
<p>DESCRIPCION DE LA OBRA: ' . $STATMENT . '.</p>
<a href="https://premiopam.cl/media/' . $registro . '/1.jpg"><img style="width: 25%:height:auto;" src="https://premiopam.cl/media/' . $registro . '/1.jpg"></a>';

if (file_exists("media/" . $registro . "/2.jpg")) {
    $body .= '<a href="https://premiopam.cl/media/'.$registro.'/2.jpg"><img style="width: 25%:height:auto;" src="https://premiopam.cl/media/' . $registro . '/2.jpg"></a>';
}

if (file_exists("media/" . $registro . "/3.jpg")) {
    $body .= '<a href="https://premiopam.cl/media/'.$registro.'/3.jpg"><img style="width: 25%:height:auto;" src="https://premiopam.cl/media/' . $registro . '/3.jpg"></a>';
}

$body .= '<p><em>- FUNDACION ANTENNA</em></p>
</body>
</html>';

 
$subject = 'Nueva postulación recibida PREMIOPAM';

mail('premiopam@antenna.cl', $subject, $body, $headers);
mail('andy@andy.cl', $subject, $body, $headers);


 
echo json_encode($response);
exit;
