<?php
// Permitir solicitudes desde cualquier origen (modifica * si quieres restringir a un dominio específico)
header("Access-Control-Allow-Origin: *");

// Métodos permitidos
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

$sql = "SELECT ID_POSTULACION, TITULO_DE_OBRA, NUMERO, YEAR(FECHA_CREACION), TECNICA, DIMENCIONES, EDAD, NACIONALIDAD, REGION_RESIDENCIA, FOTO_SELECCION, FOTOGRAFIA_OBRA_1, FOTOGRAFIA_OBRA_2, FOTOGRAFIA_OBRA_3, VIDEO_LINK FROM `postulaciones_pam`
 WHERE `ESTADO_POSTULACION` = 'APROBADO';";

include("CONFIGURACION.php");

$mysqli = new mysqli($_ENV['DB_HOST'], $_ENV['DB_USERNAME'], $_ENV['DB_PASSWORD'], $_ENV['DB_NAME']);
 
$result = $mysqli->query($sql);

// Inicializar un array vacío
$data = array();

// Comprobar si hay filas en el resultado
if ($result->num_rows > 0) {
    // Recorrer cada fila y añadirla al array
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

// Convertir el array a formato JSON
echo json_encode($data);

// Cerrar la conexión
$mysqli->close();


?>