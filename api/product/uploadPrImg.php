<?php

header("Content-Type: application/json");
header("Acess-Control-Allow-Origin: *");
header("Acess-Control-Allow-Methods: POST");
header("Acess-Control-Allow-Headers: Acess-Control-Allow-Headers,Content-Type,Acess-Control-Allow-Methods, Authorization");

// include_once '../config/database.php'; // include database connection file
include_once '../config/database.php';
include_once '../objects/product.php';
include_once '../shared/utilities.php';

$util = new Utilities();
$upload_path = 'img/products/';

$headers = apache_request_headers();
foreach ($headers as $header => $value) {
    if ($header == 'X-Access-Token'){
        $jwt = $value;
    }
}
if (!$util->validToken($jwt)){
    // код ответа 
    http_response_code(401);
 
    // сообщить пользователю что доступ запрещен 
    echo json_encode(array("message" => "Доступ запрещён."));
    exit;
}
// if no error caused, continue .. ..
if($util->saveImg('../../img/products/') && $_POST['title'])
{
    $database = new Database();
    $db = $database->getConnection();

    // инициализируем объект 
    $product = new product($db);
    $product->title = $_POST['title'];//$data->title;
    $product->url = $upload_path.$_FILES['sendimage']['name'];
    $stmt = $product->saveImg();
    
    http_response_code(201);
    echo json_encode(array("message" => "Картинка была загружена.", "id" => $stmt), JSON_UNESCAPED_UNICODE);    
}

?>