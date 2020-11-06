<?php
header("Content-Type: text/html; charset=utf-8");
$email = htmlspecialchars($_POST["email"]);
$name = htmlspecialchars($_POST["name"]);
$tel = htmlspecialchars($_POST["tel"]);
$del = htmlspecialchars($_POST["del"]);
$pay = htmlspecialchars($_POST["pay"]);
$kom = htmlspecialchars($_POST["kom"]);
$soc = htmlspecialchars($_POST["soc"]);

$check = is_array($_POST['check']) ? $_POST['check'] : array();
$check = implode (', ', $check );

$radio = htmlspecialchars($_POST["radio"]);

$refferer = getenv('HTTP_REFERER');
$date=date("d.m.y"); // число.месяц.год  
$time=date("H:i"); // часы:минуты:секунды 
$myemail = "podushka.obnimashka18@gmail.com";

$tema = "Поступил новый заказ";
$message_to_myemail = "Ура, у нас новая заявка:
<br><br>
Имя: $name<br>
E-mail: $email<br>
Телефон: $tel<br>
Доставка: $del<br>
Оплата: $pay<br>
Комментарий: $kom<br>
Ссылка: $soc<br>

Источник (ссылка): $refferer
";

mail($myemail, $tema, $message_to_myemail, "From: Подушка-Обнимашка<podushka.obnimashka18@gmail.com> \r\n Reply-To: Подушка-Обнимашка \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );


$tema = "Ваш заказ успешно принят";
$message_to_myemail = "
Вaша заявка принята, в ближайшее время мы с вами свяжемся!
Хорошего дня :)

";
$myemail = $email;
mail($myemail, $tema, $message_to_myemail, "From: Подушка-Обнимашка<podushka.obnimashka18@gmail.com> \r\n Reply-To: Подушка-Обнимашка \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );


$f = fopen("leads.xls", "a+");
fwrite($f," <tr>");    
fwrite($f," <td>$email</td> <td>$name</td> <td>$tel</td>   <td>$date / $time</td>");   
fwrite($f," <td>$refferer</td>");    
fwrite($f," </tr>");  
fwrite($f,"\n ");    
fclose($f);


?>
