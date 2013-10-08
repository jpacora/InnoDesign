<?php
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

if(!$nombre || !$email || !$mensaje) { die('0: Faltan datos'); };

$html="Nombre: " . $nombre . "<br>\n"; 
$html.="Email: " . $email . "<br>\n"; 
$html.="Mensaje " . $mensaje; 


include('phpmailer/class.phpmailer.php');
include('phpmailer/class.smtp.php');


	$mail = new PHPMailer;
	$mail->IsSMTP();   
	$mail->SMTPDebug = 0;                                   // Set mailer to use SMTP
	$mail->Host = 'localhost';  // Specify main and backup server
	$mail->SMTPAuth = true;                               // Enable SMTP authentication
	$mail->Username = 'contacto@id-peru.com';                            // SMTP username
	$mail->Password = '123';                           // SMTP password
	//$mail->SMTPSecure = 'tls';                            // Enable encryption, 'ssl' also accepted
	$mail->From = 'contacto@id-peru.com';
	$mail->FromName = 'Contacto';
	$mail->AddAddress('contacto@id-peru.com');

	$mail->Subject = 'Contacto';
	$mail->Body    = $html;

	if(!$mail->Send()) {
	   echo '0: El mensaje no se pudo enviar.';
	   echo 'Mailer Error: ' . $mail->ErrorInfo;
	   exit;
	}

	echo '1: Mensaje enviado';

