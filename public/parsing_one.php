<?php
header('Content-Type: text/html; charset=utf-8');
//$w = stream_get_wrappers();
//echo 'openssl: ',  extension_loaded  ('openssl') ? 'yes':'no', "\n";
//echo 'http wrapper: ', in_array('http', $w) ? 'yes':'no', "\n";
//echo 'https wrapper: ', in_array('https', $w) ? 'yes':'no', "\n";
//echo 'wrappers: ', var_export($w);


require_once 'phpQuery-onefile.php';

$file = file_get_contents("https://0day.kiev.ua/");

phpQuery::newDocument($file);

$favorites = pq('table.post2 div.post2 table')->children();
foreach ($favorites as $element)
{
    pq($element)->find('img')->remove();
    echo pq($element)->text(),"<br/>";
}


phpQuery::unloadDocuments();

