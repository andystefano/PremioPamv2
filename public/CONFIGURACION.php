<?php

function loadEnv($filePath)
{
    if (!file_exists($filePath)) {
        throw new Exception("El archivo .env no se encuentra en la ruta especificada.");
    }

    $lines = file($filePath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos(trim($line), '#') === 0) {
            continue; // Ignorar comentarios
        }

        list($name, $value) = explode('=', $line, 2);
        $name = trim($name);
        $value = trim($value);

        if (!empty($name)) {
            // Quita las comillas si están presentes
            if (preg_match('/^"(.*)"$/', $value, $matches)) {
                $value = $matches[1];
            } elseif (preg_match('/^\'(.*)\'$/', $value, $matches)) {
                $value = $matches[1];
            }

            putenv(sprintf('%s=%s', $name, $value));
            $_ENV[$name] = $value;
            $_SERVER[$name] = $value;
        }
    }
}



try {
    loadEnv(__DIR__ . '/.env');
} catch (Exception $e) {
    echo 'Error: ',  $e->getMessage(), "\n";
}



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
 