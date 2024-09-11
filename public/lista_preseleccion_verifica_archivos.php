<?php

$sql = "SELECT ID_POSTULACION, NUMERO, YEAR(FECHA_CREACION), TECNICA, DIMENCIONES, EDAD, NACIONALIDAD, REGION_RESIDENCIA, FOTO_SELECCION, FOTOGRAFIA_OBRA_1, FOTOGRAFIA_OBRA_2, FOTOGRAFIA_OBRA_3 FROM `postulaciones_pam`;";

include("CONFIGURACION.php");

$mysqli = new mysqli($_ENV['DB_HOST'], $_ENV['DB_USERNAME'], $_ENV['DB_PASSWORD'], $_ENV['DB_NAME']);
 
$result = $mysqli->query($sql);

// Inicializar un array vacío
$data = array();


$img_1="0";
$img_2="0";
$img_3="0";

// Comprobar si hay filas en el resultado
if ($result->num_rows > 0) {
    // Recorrer cada fila y añadirla al array
    while($row = $result->fetch_assoc()) {
        echo "ID_POSTULACION::".$row['ID_POSTULACION']."<br/>";
        $ruta_archivo_base = "media/".$row['ID_POSTULACION']."/";
        $img_1="0";
        $img_2="0";
        $img_3="0";

        if(file_exists($ruta_archivo_base."1.jpg")){
            echo "1_Existe<br/>";
            $img_1="1";
        }else{
            echo "1_No_existe<br/>";

        }
        if(file_exists($ruta_archivo_base."2.jpg")){
            echo "2_Existe<br/>";
            $img_2="2";
        }else{
            echo "2_No_existe<br/>";

        }
        if(file_exists($ruta_archivo_base."3.jpg")){
            $img_3="3";
            echo "3_Existe<br/>";
        }else{
            echo "3_No_existe<br/>";

        }  
        
       // Construir la consulta UPDATE
       $sqlUpdate = "UPDATE `postulaciones_pam` SET `FOTOGRAFIA_OBRA_2` = '$img_2', `FOTOGRAFIA_OBRA_3` = '$img_3' WHERE `ID_POSTULACION` = ".$row['ID_POSTULACION'].";";
        
       echo $sqlUpdate."<br/>";
       // Ejecutar la consulta UPDATE
       if ($mysqli->query($sqlUpdate) === TRUE) {
           echo "Registro actualizado correctamente<br/>";
       } else {
           echo "Error al actualizar el registro: " . $mysqli->error . "<br/>";
       }
        //$mysqli->query($sql)
        echo "<hr/>";
    }
}



// Convertir el array a formato JSON

// Cerrar la conexión
$mysqli->close();


?>