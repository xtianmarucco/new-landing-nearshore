<?php


$email_to = 'christian.marucco@devlights.com';

if(isset($_POST['name'], $_POST['email'], $_POST['message'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mensaje = $_POST['message'];

    if(filter_var($email, FILTER_VALIDATE_EMAIL) == true){
        $email_subject="Devlights software solutions";
        $email_from = "De: ".$email."\n";
        $email_message = "Nombre: " .$name."\n";
        $email_message .= "Email: ".$email."\n";
        $email_message .= "Mensaje: ".$mensaje."\n";
        mail($email_to, $email_subject, $email_message);
    }else{
        echo 'error';
    }
};






