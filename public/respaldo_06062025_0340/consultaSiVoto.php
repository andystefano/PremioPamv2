<?php
// Permitir solicitudes desde cualquier origen (modifica * si quieres restringir a un dominio específico)
header("Access-Control-Allow-Origin: *");

// Métodos permitidos
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");


session_start();

// Incluir la configuración de la base de datos
include("CONFIGURACION.php");

// Crear una conexión con la base de datos
$mysqli = new mysqli($_ENV['DB_HOST'], $_ENV['DB_USERNAME'], $_ENV['DB_PASSWORD'], $_ENV['DB_NAME']);

// Verificar si la conexión es exitosa
if ($mysqli->connect_error) {
    die("Error de conexión: " . $mysqli->connect_error);
}

// Verificar si se ha enviado el email a través del método POST
if (isset($_POST['email'])) {
    $email = $mysqli->real_escape_string($_POST['email']); // Evitar inyección SQL

    // Preparar la consulta
    $sql = "SELECT * FROM `votos` WHERE `EMAIL` = ?";

    // Usar una consulta preparada para evitar inyección SQL
    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();

    $result = $stmt->get_result();

    $voto = false;

    // Comprobar si hay filas en el resultado
    if ($result->num_rows > 0) {
        $voto = true; // Si hay registros, el email ya ha votado
    }

    $_SESSION['crf'] = md5(date("ymdis")."_PaM24");

    $res['crf'] = $_SESSION['crf'];
    $res['voto'] = $voto;

    // Devolver el resultado en formato JSON
    echo json_encode($res);

    // Cerrar la consulta
    $stmt->close();
} else {
    // Si no se envía el email por POST, devolver un error
    echo json_encode(array("error" => "Email no proporcionado"));
}

// Cerrar la conexión con la base de datos
$mysqli->close();

?>
