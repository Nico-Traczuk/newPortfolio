<?php


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $asunto = $_POST['asunto'];
    $message = $_POST['message'];


    $destinatario = "ntraczuk92@gmail.com";

    $contenido = "Formulario de contacto\n\n";
    $contenido .= "Nombre: " . $name . "\n";
    $contenido .= "Email: " . $email . "\n";
    $contenido .= "Asunto: " . $asunto . "\n";
    $contenido .= "Message: " . $message . "\n";

    if (mail($destinatario, $asunto, $contenido, "From: $email")) {
        echo "El correo se ha enviado correctamente";
    } else {
        echo "El correo no se ha enviado";
    }
}


?>
