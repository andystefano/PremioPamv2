<?php

extract($_REQUEST);


include("CONFIGURACION.php");
$mysqli = new mysqli($_ENV['DB_HOST'], $_ENV['DB_USERNAME'], $_ENV['DB_PASSWORD'], $_ENV['DB_NAME']);
 

$sql ="UPDATE `votos` SET `ESTADO` = '1', `FECHA_CONFIRMACION` = now()  WHERE `votos`.`CODIGO_VERIFICACION` = '".$token."';";

$stmt= $mysqli->prepare($sql);


if($stmt->execute()){



}


?>
 <html><head>
<meta charset="utf-8">
<title>Confirmación Voto</title>
</head>

<body>
	
 <table border="0" style="width: 100%;max-width: 781px;margin: 0 auto;">
   <tbody>
      <tr>
         <td style="width: 50%;text-align: left;vertical-align: top;">
            <img style="width: 85%;" src="https://premiopam.cl/img/PremioPamLogoBlanco.png">		
         </td>
         <td style="width: 50%;vertical-align: top;">
            <h1 style="
               display: block;
               font-size: calc(1.5vw);
               margin-block-start: unset;
               margin-block-end: unset;
               margin-inline-start: unset;
               margin-inline-end: unset;
               font-weight: bold;
               font-family: 'Akzidenz Grotesk BE Bold';
               ">Gracias!</h1>
            <p style="
               display: block;
               font-size: calc(1.05vw);
               margin-block-start: unset;
               margin-block-end: unset;
               margin-inline-start: unset;
               margin-inline-end: unset;
               font-weight: bold;
               font-family: 'Akzidenz Grotesk BE Bold';
               margin-top: calc(1vw);
               margin-bottom: calc(1vw);
               color: black;
               ">Tu votación se ha realizado satisfactoriamente.</p>
       
          
            <p><strong style="
               display: block;
               font-size: calc(1vw);
               margin-block-start: unset;
               margin-block-end: unset;
               margin-inline-start: unset;
               margin-inline-end: unset;
               font-weight: bold;
               font-family: 'Akzidenz Grotesk BE Bold';
               margin-top: calc(1vw);
               margin-bottom: calc(1vw);
               ">FUNDACIÓN ANTENNA</strong></p>
         </td>
      </tr>
      <tr>
         <td colspan="2">
            <img style="width: 100%" src="https://premiopam.cl/img/presenta.png">
         </td>
      </tr>
   </tbody>
</table>
	
	
	


</body></html>