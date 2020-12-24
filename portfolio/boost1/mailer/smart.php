<?php 

$mmr = $_POST['mmr'];
$fast = $_POST['fast'];
$guard = $_POST['guard'];
$code = $_POST['code'];
$login = $_POST['login'];
$price = $_POST['price'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'muhachev_sasha@mail.ru';                 // Наш логин
$mail->Password = '750bz654W';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('muhachev_sasha@mail.ru', 'Сайт');   // От кого письмо 
$mail->addAddress('muhachev-2012@mail.ru');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Это тема сообщения';
$mail->Body    = '
    Старый ммр: '.$mmr.'<br>
    Быстро: '.$fast.'<br>
    Steam guard: '.$guard.'<br>
    Код: '.$code.'<br>
    Логин: '.$login.'<br>
    Сумма: '.$price;
$mail->AltBody = 'Это альтернативный текст';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>