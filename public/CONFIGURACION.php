<?php

require 'vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Variables de configuración de la base de datos
$DB_HOST = getenv('DB_HOST');
$DB_USERNAME = getenv('DB_USERNAME');
$DB_PASSWORD = getenv('DB_PASSWORD');
$DB_NAME = getenv('DB_NAME');

// Variables de configuración del servidor de correo electrónico
$EMAIL_HOST = getenv('EMAIL_HOST');
$EMAIL_PORT = getenv('EMAIL_PORT');
$EMAIL_USERNAME = getenv('EMAIL_USERNAME');
$EMAIL_PASSWORD = getenv('EMAIL_PASSWORD');
$EMAIL_ENCRYPTION = getenv('EMAIL_ENCRYPTION');

?>
 