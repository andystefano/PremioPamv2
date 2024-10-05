<?php

function enviarCorreoVotacion($destinatario) {
    // Asunto del correo
    $asunto = "Confirma tu Voto Premio PAM";

    // Encabezados para el correo electrónico
    $encabezados = "MIME-Version: 1.0" . "\r\n";
    $encabezados .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $encabezados .= "From: no-responder@premiopam.cl" . "\r\n"; // Cambia esto al correo del remitente

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
      <div style="width: 100%; height: 100%; background-color: #fff6e6;padding-top: 1em; padding-bottom: 1em;">
        <div style="max-width: 720px; width: 100%; margin: 0 auto; display: block;">
          <table style="background-color: white; padding: 2em 2em 2em 2em; display: block;margin-top: 2em; margin-bottom: 2em;" border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td style="width: 45%; text-align: left;vertical-align: top;">
                <img src="http://v2024.premiopam.cl/img/mails/confirmaVoto/logo.png" style="width: 64%" alt="" />
              </td>
              <td style="width: 55%">
                <h1 style="font-size: 30px; font-style: normal; font-weight: 900; line-height: 37px; color: #f0000c; font-family: Inter, sans-serif;">
                  ¡Hola!
                </h1>
                <p style="color: #f0000c; font-family: Inter, sans-serif; font-weight: 500; text-align: left; line-height: 5px; font-size: 19px;margin:0px;">
                  Para completar la votación,
                </p>
                <p style="color: #f0000c; font-family: Inter, sans-serif; font-weight: 500; text-align: left; line-height: 5px; font-size: 19px;margin-bottom: 1px;margin-top: 8px;">
                  haz click en el siguiente enlace
                </p>
                <br />
                <a href="https://chatgpt.com/c/670166ee-7824-8002-852c-11d261d3e85d" style="color: #f0000c; font-family: Roboto Mono, monospace; font-weight: bolder; text-align: left; border: 1px solid; padding: 10px; text-decoration: none; margin-top: 8px; display: inline-block; cursor: pointer; font-size: 16px; font-weight: bold;">
                  COMPLETAR VOTACIÓN
                </a><br />
                <p style="color: #f0000c; font-family: Inter, sans-serif; font-weight: 700; text-align: left; font-size: 16px;">
                  https://chatgpt.com/c/670166ee-7824-8002-852c-11d261d3e85d
                </p>
                <p style="color: #f0000c; font-family: Inter, sans-serif; font-weight: 500; text-align: left; font-size: 16px;">
                  * Si no puedes hacer clic en el enlace, cópalo y pégalo en el navegador.
                </p>
                <br />
                <a style="color: #f0000c; font-family: Inter, sans-serif; font-weight: 500; text-align: left; line-height: 0px; font-size: 19px;">¡Muchas gracias!</a>
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

// Ejemplo de uso de la función
$destinatario = "andy@andy.cl"; // Cambia esto al correo del destinatario
echo enviarCorreoVotacion($destinatario);
?>
