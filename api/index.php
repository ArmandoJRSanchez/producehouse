<?php
// incluimos los archivos para la conexion e invocar las funciones 
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include_once './models/Database.php';
include_once './helpers/helper.php';

header('Content-Type: application/json');



$action = isset($_GET["data"]) ? $_GET["data"] : null;

if($action == null){
    $response = new helper();
    return print json_encode($response->error('Reuest invalido.', 'Parametro invalido.'));
}


if($action == 'productos'){
    include_once './controllers/productos-controller.php';
}

if($action == 'categorias'){
    include_once './controllers/categorias-controller.php';
}

if($action == 'registro' || $action == 'login'){
    include_once './controllers/usuarios-controller.php';
}