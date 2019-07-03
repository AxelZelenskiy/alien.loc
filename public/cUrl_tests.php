<?php
header('Content-Type: text/html; charset=utf-8');

require_once 'phpQuery-onefile.php';

function dd(string $str = '')
{
    echo '<pre style="background-color: #212121; color: goldenrod; padding: 1em; font-size: 1.2rem;">';
    var_dump($str);
    echo '</pre>';
}

function xd(string $str = '')
{
    echo '<pre style="background-color: #212121; color: goldenrod; padding: 1em; font-size: 1.2rem;">';
    print_r($str);
    echo '</pre>';
}

$url = 'https://0day.kiev.ua/';

$ch = curl_init();
curl_setopt($ch,CURLOPT_URL, $url);
curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);
$data = curl_exec($ch);
curl_close($ch);

$data = mb_convert_encoding($data, "UTF-8", "windows-1251");
xd($data);