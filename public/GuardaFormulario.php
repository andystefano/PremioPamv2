<?php


include("configuracion.php");

// Set Timezone
date_default_timezone_set("America/Santiago");

// Get Request data
extract($_REQUEST);

$protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? "https" : "http";
$host = $_SERVER['HTTP_HOST'];
$baseUrl = $protocol . "://" . $host;

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
$FOTOGRAFIA_OBRA_1='';
$FOTOGRAFIA_OBRA_2='';
$FOTOGRAFIA_OBRA_3='';

 

if (isset($_FILES['FOTOGRAFIA_OBRA_1_X'])) {
$FOTOGRAFIA_OBRA_1=1;
}

if (isset($_FILES['FOTOGRAFIA_OBRA_2_X'])) {
$FOTOGRAFIA_OBRA_2=2;
}

if (isset($_FILES['FOTOGRAFIA_OBRA_3_X'])) {
$FOTOGRAFIA_OBRA_3=3;
}


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
$stmt = $mysqli->prepare("INSERT INTO `postulaciones_pam` (
`NOMBRE_APELLLIDO`, `EDAD`, `FECHA_DE_NACIMIENTO`, `TELEFONO`, `EMAIL`, `NACIONALIDAD`, `LUGAR_RESIDENCIA`, `BIOGRAFIA`, `RRSS`, `POSTULADA_POR`, `PARENTESCO`, `FOTOGRAFIA_RETRATO`, `TITULO_DE_OBRA`, `DIMENCIONES`, `FECHA_CREACION`, `TECNICA`, `STATMENT`, `FOTOGRAFIA_OBRA_1`, `FOTOGRAFIA_OBRA_2`, `FOTOGRAFIA_OBRA_3`, `LINK_WEB`, `REGION_RESIDENCIA`, `FECHA`)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, DATE_SUB(NOW(), INTERVAL 4 HOUR))");

// Vincular los parámetros
$stmt->bind_param("ssssssssssssssssssssss", $NOMBRE_APELLLIDO, $EDAD, $FECHA_DE_NACIMIENTO, $TELEFONO, $EMAIL, $NACIONALIDAD, $LUGAR_RESIDENCIA, $BIOGRAFIA, $RRSS, $POSTULADA_POR, $PARENTESCO, $FOTOGRAFIA_RETRATO, $TITULO_DE_OBRA, $DIMENCIONES, $FECHA_CREACION, $TECNICA, $STATMENT, $FOTOGRAFIA_OBRA_1, $FOTOGRAFIA_OBRA_2, $FOTOGRAFIA_OBRA_3, $LINK_WEB, $REGION_RESIDENCIA);

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
$headers .= "From: Premio PAM <premiopam@premiopam.cl>" . "\r\n";


 
$subject = mb_encode_mimeheader('Ya estás participando', 'UTF-8', 'B', "\r\n");
// Cuerpo del correo electrónico
$body = '
<html>
<body>
<div style="text-align: center;">
    <img style="max-width:80% ; width:100%;" src="'.$baseUrl.'/media/MAIL-POSTULACION.png">
</div>
</body>
</html>';

// Enviar el correo electrónico y verificar si se envió correctamente
mail($EMAIL, $subject, $body, $headers);
mail('andy@andy.cl', $subject, $body, $headers);


//Aviso Interno******
// Cuerpo del correo electrónico
$subject = "Postulación Exitosa";
$body = '
<html>
<body>
<h2>¡Buenas Noticias!,</h2>
<p>Con fecha ' . date("Y/m/d") . ' ' . date("H:i:s") . ' se ha recibido una nueva postulaci&oacute;n de la concursante <b>' . $NOMBRE_APELLLIDO . '</b>, ' . $EDAD . ' años, nacionalidad ' . $NACIONALIDAD . ', lugar de residencia ' . $LUGAR_RESIDENCIA . ' .</p>
<img style="width: 50%:height:auto;" src="'.$baseUrl.'/media/' . $registro . '/RETRATO.jpg">
<br/>
<p>Biograf&iacute;a: ' . $BIOGRAFIA . '.</p>
<p>T&iacute;tulo obra: ' . $TITULO_DE_OBRA . '.</p>
<p>Dimenciones: ' . $DIMENCIONES . '.</p>
<p>DESCRIPCION DE LA OBRA: ' . $STATMENT . '.</p>
<a href="'.$baseUrl.'/media/' . $registro . '/1.jpg"><img style="width: 25%:height:auto;" src="'.$baseUrl.'/media/' . $registro . '/1.jpg"></a>';

if (file_exists("media/" . $registro . "/2.jpg")) {
    $body .= '<a href="'.$baseUrl.'/media/'.$registro.'/2.jpg"><img style="width: 25%:height:auto;" src="'.$baseUrl.'/media/' . $registro . '/2.jpg"></a>';
}

if (file_exists("media/" . $registro . "/3.jpg")) {
    $body .= '<a href="'.$baseUrl.'/media/'.$registro.'/3.jpg"><img style="width: 25%:height:auto;" src="'.$baseUrl.'/' . $registro . '/3.jpg"></a>';
}

$body .= '<p><em>- FUNDACION ANTENNA</em></p>
</body>
</html>';



$body = '<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head>
<!--[if gte mso 15]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Nueva postulación recibida PREMIOPAM</title>
<style>img{-ms-interpolation-mode:bicubic;} 
          table, td{mso-table-lspace:0pt; mso-table-rspace:0pt;} 
          .mceStandardButton, .mceStandardButton td, .mceStandardButton td a{mso-hide:all !important;} 
          p, a, li, td, blockquote{mso-line-height-rule:exactly;} 
          p, a, li, td, body, table, blockquote{-ms-text-size-adjust:100%; -webkit-text-size-adjust:100%;} 
          @media only screen and (max-width: 480px){
            body, table, td, p, a, li, blockquote{-webkit-text-size-adjust:none !important;} 
          }
          .mcnPreviewText{display: none !important;} 
          .bodyCell{margin:0 auto; padding:0; width:100%;}
          .ExternalClass, .ExternalClass p, .ExternalClass td, .ExternalClass div, .ExternalClass span, .ExternalClass font{line-height:100%;} 
          .ReadMsgBody{width:100%;} .ExternalClass{width:100%;} 
          a[x-apple-data-detectors]{color:inherit !important; text-decoration:none !important; font-size:inherit !important; font-family:inherit !important; font-weight:inherit !important; line-height:inherit !important;} 
            body{height:100%; margin:0; padding:0; width:100%; background: #ffffff;}
            p{margin:0; padding:0;} 
            table{border-collapse:collapse;} 
            td, p, a{word-break:break-word;} 
            h1, h2, h3, h4, h5, h6{display:block; margin:0; padding:0;} 
            img, a img{border:0; height:auto; outline:none; text-decoration:none;} 
            a[href^="tel"], a[href^="sms"]{color:inherit; cursor:default; text-decoration:none;} 
            li p {margin: 0 !important;}
            .ProseMirror a {
                pointer-events: none;
            }
            @media only screen and (max-width: 640px){
                .mceClusterLayout td{padding: 4px !important;} 
            }
            @media only screen and (max-width: 480px){
                body{width:100% !important; min-width:100% !important; } 
                body.mobile-native {
                    -webkit-user-select: none; user-select: none; transition: transform 0.2s ease-in; transform-origin: top center;
                }
                body.mobile-native.selection-allowed a, body.mobile-native.selection-allowed .ProseMirror {
                    user-select: auto;
                    -webkit-user-select: auto;
                }
                colgroup{display: none;}
                img{height: auto !important;}
                .mceWidthContainer{max-width: 660px !important;}
                .mceColumn{display: block !important; width: 100% !important;}
                .mceColumn-forceSpan{display: table-cell !important; width: auto !important;}
                .mceColumn-forceSpan .mceButton a{min-width:0 !important;}
                .mceBlockContainer{padding-right:16px !important; padding-left:16px !important;} 
                .mceTextBlockContainer{padding-right:16px !important; padding-left:16px !important;} 
                .mceBlockContainerE2E{padding-right:0px; padding-left:0px;} 
                .mceSpacing-24{padding-right:16px !important; padding-left:16px !important;}
                .mceImage, .mceLogo{width: 100% !important; height: auto !important;} 
                .mceFooterSection .mceText, .mceFooterSection .mceText p{font-size: 16px !important; line-height: 140% !important;}
            }
            div[contenteditable="true"] {outline: 0;}
            .ProseMirror .empty-node, .ProseMirror:empty {position: relative;}
            .ProseMirror .empty-node::before, .ProseMirror:empty::before {
                position: absolute;
                left: 0;
                right: 0;
                color: rgba(0,0,0,0.2);
                cursor: text;
            }
            .ProseMirror .empty-node:hover::before, .ProseMirror:empty:hover::before {
                color: rgba(0,0,0,0.3);
            }
            .ProseMirror h1.empty-node:only-child::before,
            .ProseMirror h2.empty-node:only-child::before,
            .ProseMirror h3.empty-node:only-child::before,
            .ProseMirror h4.empty-node:only-child::before {
                content: "Heading";
            }
            .ProseMirror p.empty-node:only-child::before, .ProseMirror:empty::before {
                content: "Start typing...";
            }
            a .ProseMirror p.empty-node::before, a .ProseMirror:empty::before {
                content: "";
            }
            .mceText, .ProseMirror {
                white-space: pre-wrap;
            }
            .mceImageBorder {display: inline-block;}
            .mceImageBorder img {border: 0 !important;}
body, #bodyTable { background-color: rgb(244, 244, 244); }.mceText, .mceLabel { font-family: "Helvetica Neue", Helvetica, Arial, Verdana, sans-serif; }.mceText, .mceLabel { color: rgb(0, 0, 0); }.mceText h1 { margin-bottom: 0px; }.mceText p { margin-bottom: 0px; }.mceText label { margin-bottom: 0px; }.mceText input { margin-bottom: 0px; }.mceSpacing-12 .mceInput + .mceErrorMessage { margin-top: -6px; }.mceText h1 { margin-bottom: 0px; }.mceText p { margin-bottom: 0px; }.mceText label { margin-bottom: 0px; }.mceText input { margin-bottom: 0px; }.mceSpacing-24 .mceInput + .mceErrorMessage { margin-top: -12px; }.mceInput { background-color: transparent; border: 2px solid rgb(208, 208, 208); width: 60%; color: rgb(77, 77, 77); display: block; }.mceInput[type="radio"], .mceInput[type="checkbox"] { float: left; margin-right: 12px; display: inline; width: auto !important; }.mceLabel > .mceInput { margin-bottom: 0px; margin-top: 2px; }.mceLabel { display: block; }.mceText p { color: rgb(0, 0, 0); font-family: "Helvetica Neue", Helvetica, Arial, Verdana, sans-serif; font-size: 16px; font-weight: normal; line-height: 150%; text-align: center; direction: ltr; }.mceText h1 { color: rgb(0, 0, 0); font-family: "Helvetica Neue", Helvetica, Arial, Verdana, sans-serif; font-size: 31px; font-weight: bold; line-height: 150%; text-align: center; direction: ltr; }
@media only screen and (max-width: 480px) {
            .mceText p { font-size: 16px !important; line-height: 150% !important; }
          }
@media only screen and (max-width: 480px) {
            .mceText h1 { font-size: 31px !important; line-height: 150% !important; }
          }
@media only screen and (max-width: 480px) {
            .mceBlockContainer { padding-left: 16px !important; padding-right: 16px !important; }
          }
@media only screen and (max-width: 480px) {
            .mceDividerBlock { border-top-width: 2px !important; }.mceDividerContainer { width: 100% !important; }
          }
#dataBlockId-9 p, #dataBlockId-9 h1, #dataBlockId-9 h2, #dataBlockId-9 h3, #dataBlockId-9 h4, #dataBlockId-9 ul { text-align: center; }</style></head>
<body>
<!---->
<center>
<table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable" style="background-color: rgb(244, 244, 244);">
<tbody><tr>
<td class="bodyCell" align="center" valign="top">
<table id="root" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody data-block-id="13" class="mceWrapper"><tr><td align="center" valign="top" class="mceWrapperOuter"><!--[if (gte mso 9)|(IE)]><table align="center" border="0" cellspacing="0" cellpadding="0" width="660" style="width:660px;"><tr><td><![endif]--><table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:660px" role="presentation"><tbody><tr><td style="background-color:#ffffff;background-position:center;background-repeat:no-repeat;background-size:cover" class="mceWrapperInner" valign="top"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation" data-block-id="12"><tbody><tr class="mceRow"><td style="background-position:center;background-repeat:no-repeat;background-size:cover" valign="top"><table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation"><tbody><tr><td style="padding-top:0;padding-bottom:0" class="mceColumn" data-block-id="-4" valign="top" colspan="12" width="100%"><table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation"><tbody><tr><td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0" valign="top"><table width="100%" style="border:0;border-collapse:separate"><tbody><tr><td style="padding-left:24px;padding-right:24px;padding-top:12px;padding-bottom:12px" class="mceTextBlockContainer"><div data-block-id="3" class="mceText" id="dataBlockId-3" style="width:100%"><h1>¡Buenas Noticias!</h1><p>Se ha recibido una nueva postulación.<br></p><p>Con fecha ' . date("Y/m/d") . ' ' . date("H:i:s") . ' se ha recibido una nueva postulación de la concursante&nbsp;<strong>'.$NOMBRE_APELLLIDO.'</strong>, ' . $EDAD . ' años, nacionalidad '.$NACIONALIDAD.', lugar de residencia '.$LUGAR_RESIDENCIA.'.</p><p class="last-child"><br></p></div></td></tr></tbody></table></td></tr><tr><td style="padding-top:12px;padding-bottom:12px;padding-right:0;padding-left:0" class="mceBlockContainer" align="center" valign="top"><span class="mceImageBorder" style="border:0;vertical-align:top;margin:0"><img data-block-id="4" width="564" height="auto" style="width:564px;height:auto;max-width:700px !important;display:block" alt="" src="https://premiopam.cl/media/PAM.gif" role="Premio PAM" class="imageDropZone mceImage"></span></td></tr><tr><td style="background-color:transparent;padding-top:20px;padding-bottom:20px;padding-right:24px;padding-left:24px" class="mceBlockContainer" valign="top"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:transparent;width:100%" role="presentation" class="mceDividerContainer" data-block-id="6"><tbody><tr><td style="min-width:100%;border-top-width:2px;border-top-style:solid;border-top-color:#000000" class="mceDividerBlock" valign="top"></td></tr></tbody></table></td></tr><tr><td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0" valign="top"><table width="100%" style="border:0;border-collapse:separate"><tbody><tr><td style="padding-left:24px;padding-right:24px;padding-top:12px;padding-bottom:12px" class="mceTextBlockContainer"><div data-block-id="16" class="mceText" id="dataBlockId-16" style="width:100%"><h1 class="last-child">Retrato</h1></div></td></tr></tbody></table></td></tr><tr>
    
    <td style="padding-top:12px;padding-bottom:12px;padding-right:0;padding-left:0" class="mceBlockContainer" align="center" valign="top"><span class="mceImageBorder" style="border:0;vertical-align:top;margin:0"><img data-block-id="15" width="564" height="auto" style="width:564px;height:auto;max-width:1128px !important;display:block" alt="" src="'.$baseUrl.'/media/' . $registro . '/RETRATO.jpg" role="Foto retrato" class="imageDropZone mceImage"></span></td>
    </tr><tr>
    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0" valign="top"><table width="100%" style="border:0;border-collapse:separate"><tbody><tr><td style="padding-left:24px;padding-right:24px;padding-top:12px;padding-bottom:12px" class="mceTextBlockContainer"><div data-block-id="33" class="mceText" id="dataBlockId-33" style="width:100%"><p style="text-align: left;"><strong>Biografía</strong>:' . $BIOGRAFIA . ' .</p><p style="text-align: left;"><strong>Título obra</strong>:' . $TITULO_DE_OBRA . '.</p><p style="text-align: left;"><strong>Dimensiones</strong>: ' . $DIMENCIONES . '.</p><p style="text-align: left;"><strong>Descripción Obra</strong>: ' . $STATMENT . '.</p><p style="text-align: left;" class="last-child"><br></p></div></td></tr></tbody></table></td></tr><tr><td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0" valign="top"><table width="100%" style="border:0;border-collapse:separate"><tbody><tr><td style="padding-left:24px;padding-right:24px;padding-top:12px;padding-bottom:12px" class="mceTextBlockContainer"><div data-block-id="17" class="mceText" id="dataBlockId-17" style="width:100%"><h1 class="last-child">Fotos Obra</h1></div></td></tr></tbody></table></td></tr><tr>
    
    <td style="padding-top:12px;padding-bottom:12px;padding-right:0;padding-left:0" class="mceBlockContainer" align="center" valign="top"><span class="mceImageBorder" style="border:0;vertical-align:top;margin:0"><img data-block-id="18" width="564" height="auto" style="width:564px;height:auto;max-width:1128px !important;display:block" alt="" src="'.$baseUrl.'/media/' . $registro . '/1.jpg" role="Foto Obra 1" class="imageDropZone mceImage"></span></td> </tr>';
    
 
    if (file_exists("media/" . $registro . "/2.jpg")) {
$body .= '<tr>
    <td style="padding-top:12px;padding-bottom:12px;padding-right:0;padding-left:0" class="mceBlockContainer" align="center" valign="top"><span class="mceImageBorder" style="border:0;vertical-align:top;margin:0"><img data-block-id="19" width="564" height="auto" style="width:564px;height:auto;max-width:1128px !important;display:block" alt="" src="'.$baseUrl.'/media/' . $registro . '/2.jpg" role="Foto Obra 2" class="imageDropZone mceImage"></span></td>
    </tr>';
    }

    if (file_exists("media/" . $registro . "/3.jpg")) {
$body .= '<tr>
    <td style="padding-top:12px;padding-bottom:12px;padding-right:0;padding-left:0" class="mceBlockContainer" align="center" valign="top"><span class="mceImageBorder" style="border:0;vertical-align:top;margin:0"><img data-block-id="20" width="564" height="auto" style="width:564px;height:auto;max-width:1128px !important;display:block" alt="" src="'.$baseUrl.'/media/' . $registro . '/3.jpg" role="Foto Obra 3" class="imageDropZone mceImage"></span></td>
    </tr>';
    }

$body .= '<tr><td style="padding-top:8px;padding-bottom:8px;padding-right:8px;padding-left:8px" class="mceLayoutContainer" valign="top"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation" data-block-id="11" id="section_e3d59792b8c6da31813dea44378c8b5b" class="mceFooterSection"><tbody><tr class="mceRow"><td style="background-position:center;background-repeat:no-repeat;background-size:cover" valign="top"><table border="0" cellpadding="0" cellspacing="12" width="100%" role="presentation"><tbody><tr><td style="padding-top:0;padding-bottom:0;margin-bottom:12px" class="mceColumn" data-block-id="-3" valign="top" colspan="12" width="100%"><table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation"><tbody><tr><td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0" align="center" valign="top"><table width="100%" style="border:0;border-collapse:separate"><tbody><tr><td style="padding-left:16px;padding-right:16px;padding-top:12px;padding-bottom:12px" class="mceTextBlockContainer"><div data-block-id="9" class="mceText" id="dataBlockId-9" style="display:inline-block;width:100%"><p class="last-child"><em><span style="font-size: 12px">- FUNDACION ANTENNA</span></em></p></div></td></tr></tbody></table></td></tr><tr><td class="mceLayoutContainer" align="center" valign="top"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation" data-block-id="-2"><tbody><tr class="mceRow"><td style="background-position:center;background-repeat:no-repeat;background-size:cover" valign="top"><table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation"><tbody><tr><td class="mceColumn" data-block-id="-5" valign="top" colspan="12" width="100%"><table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation"><tbody><tr><td align="center" valign="top"><div><div data-block-id="10">
	</div></div></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--></td></tr></tbody></table>
</td>
</tr>
</tbody></table>
</center>
            <center>
                <br>
                <br>
      
               
                <style type="text/css">
                    @media only screen and (max-width: 480px){
                        table#canspamBar td{font-size:14px !important;}
                        table#canspamBar td a{display:block !important; margin-top:10px !important;}
                    }
                </style>
</center></body></html>';

 
$subject = 'Nueva postulación recibida PREMIOPAM';

mail('premiopam@antenna.cl', $subject, $body, $headers);
mail('andy@andy.cl', $subject, $body, $headers);
mail('proyectos@antenna.cl', $subject, $body, $headers);


 
echo json_encode($response);
exit;
