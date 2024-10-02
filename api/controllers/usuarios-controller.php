<?php
include_once './models/Usuarios.php';
include_once './models/DatosUsuarios.php';
$database = new Database();
$db = $database->getConnection();

$usuario = new Usuario($db);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    var_dump($_REQUEST);
    if (isset($_POST['registro'])) {
        // Registro de nuevo usuario
        $datosUsuario = new DatosUsuario($db);

        $usuario->usuario = $_POST['usuario'];
        $usuario->password = $_POST['password'];

        if ($usuario->registrar()) {
            // Si el registro es exitoso, también se crean los datos adicionales
            $datosUsuario->id_usuarios_fk_datos_usuarios = $db->lastInsertId();
            $datosUsuario->nombre_completo = $_POST['nombre_completo'];
            $datosUsuario->direccion = $_POST['direccion'];
            $datosUsuario->extra = $_POST['extra'];
            $datosUsuario->telefono = $_POST['telefono'];
            $datosUsuario->empresa = $_POST['empresa'];
            $datosUsuario->estatus = 'A';

            if ($datosUsuario->crearDatosUsuario()) {
                echo json_encode("Registro exitoso.");
            } else {
                echo json_encode("Error al crear los datos adicionales del usuario.");
            }
        } else {
            echo json_encode("Error al registrar usuario.");
        }
    } elseif (isset($_POST['login'])) {
        // Login de usuario existente
        $usuario = new Usuario($db);
        $usuario->usuario = $_POST['usuario'];
        $usuario->password = $_POST['password'];

        if ($usuario->iniciarSesion()) {
            session_start();
            $_SESSION['id_usuario'] = $usuario->id_usuario;
            $_SESSION['usuario'] = $usuario->usuario;
            echo "Inicio de sesión exitoso.";
        } else {
            echo "Usuario o contraseña incorrectos.";
        }
    }
}
?>