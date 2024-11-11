<?php

try {
	$pdo = new PDO('mysql:charset=utf8; dbname=u1392839_karasuk_spo; host=localhost', 'u1392839_default', 'BAhDp2NpF2FM5hd1');
} catch (PDOException $e) {
	die($e->getMessage());
}

// try {
// 	$pdo = new PDO('mysql:dbname=test; host=localhost', 'root', 'root');
// } catch (PDOException $e) {
// 	die($e->getMessage());
// }
