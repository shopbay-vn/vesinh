<?php

$actual_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
$fileName = (parse_url($actual_link, PHP_URL_PATH));
if ($fileName == '/') {
    $fileName = '/index';
}
// print_r($fileName); die;
$file = file_get_contents(".$fileName.html", true);
$file = str_replace('0903.55.2018', '0908662015', $file);
$file = str_replace('0976.728.898', '0948896966', $file);
$file = str_replace('moitruongdothisaigonxanh@gmail.com', 'congtyvesinhso1saigon@gmail.com', $file);
$file = str_replace('Công ty môi trường đô thị sài gòn', 'Công ty vệ sinh đô thị số 1 Sài Gòn', $file);
echo $file;

?>
