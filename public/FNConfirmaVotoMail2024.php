<?php

function enviarCorreoVotacion($destinatario,$token) {
    // Asunto del correo
    $asunto = "Confirma tu voto Premio PAM";

    // Encabezados para el correo electrónico
    $encabezados = "MIME-Version: 1.0" . "\r\n";
    $encabezados .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $encabezados .= "From: no-responder@premiopam.cl" . "\r\n"; // Cambia esto al correo del remitente

    $urlBase = "http://v2024.premiopam.cl/";

  // Contenido del correo (tu HTML)
  $mensaje = '
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>Confirma Tu Voto Premio PAM 2024</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <style type="text/css">
      td img {
        display: block;
      }
    </style>
  </head>
  <body bgcolor="#fff6e6">
    <div style="width: 100%; height: 100%; background-color: #fff6e6; padding-top: 1em; padding-bottom: 1em;">
      <div style="max-width: 45em; width: 100%; margin: 0 auto; display: block;">
        <table style="background-color: white; padding: 2em 2em 2em 2em; display: block; margin-top: 2em; margin-bottom: 2em;" border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td style="width: 45%; text-align: left; vertical-align: top;">
              <img src="http://v2024.premiopam.cl/img/mails/confirmaVoto/logo.png" style="width: 80%;" alt="" />
            </td>
            <td style="width: 55%">
              <h1 style="font-size: 1.875em; font-style: normal; font-weight: 900; line-height: 2.3125em; color: #f0000c; font-family: Inter, sans-serif;">
                ¡Hola!
              </h1>
              <p style="color: #f0000c; font-family: Inter, sans-serif; font-weight: 500; text-align: left; line-height: 0.3125em; font-size: 1.1875em; margin: 0;">
                Para completar la votación,
              </p>
              <p style="color: #f0000c; font-family: Inter, sans-serif; font-weight: 500; text-align: left; line-height: 0.3125em; font-size: 1.1875em; margin-bottom: 0.0625em; margin-top: 0.5em;">
                haz click en el siguiente enlace
              </p>
              <br />
              <a style="color: #f0000c; font-family: Roboto Mono, monospace; font-weight: bolder; text-align: left; border: 1px solid; padding: 0.625em; text-decoration: none; margin-top: 0.5em; display: inline-block; cursor: pointer; font-size: 1em; font-weight: bold;" href="'.$urlBase.'votacion?token='.$token.'">
                COMPLETAR VOTACIÓN
              </a><br />
              <p style="color: #f0000c; font-family: Inter, sans-serif; font-weight: 700; text-align: left; font-size: 1em;">
                '.$urlBase.'votacion?token='.$token.'
              </p>
              <p style="color: #f0000c; font-family: Inter, sans-serif; font-weight: 500; text-align: left; font-size: 1em;">
                * Si no puedes hacer clic en el enlace, cópalo y pégalo en el navegador.
              </p>
              <br />
              <a style="color: #f0000c; font-family: Inter, sans-serif; font-weight: 500; text-align: left; line-height: 0; font-size: 1.1875em;">¡Muchas gracias!</a>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <img src="http://v2024.premiopam.cl/img/mails/confirmaVoto/presentan.png" width="100%" alt="sss" style="width: 100%; margin-top: 2em" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  </body>
  </html>
  ';

    // Enviar el correo
    if(mail($destinatario, $asunto, $mensaje, $encabezados)) {
        return true;
    } else {
        return false;
    }
}


?>
