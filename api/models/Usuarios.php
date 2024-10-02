<?php
class Usuario {
    private $conn;
    private $table_name = "usuarios";

    public $id_usuario;
    public $usuario;
    public $password;
    public $estatus;

    public function __construct($db) {
        $this->conn = $db;
    }

    // Registro de nuevo usuario
    public function registrar() {
        $query = "INSERT INTO " . $this->table_name . " SET usuario=:usuario, password=:password, estatus=:estatus";

        $stmt = $this->conn->prepare($query);

        // Encriptar la contraseña
        $this->password = password_hash($this->password, PASSWORD_BCRYPT);
        $this->estatus = 'A';

        // Enlazar los valores
        $stmt->bindParam(":usuario", $this->usuario);
        $stmt->bindParam(":password", $this->password);
        $stmt->bindParam(":estatus", $this->estatus);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }

    // Iniciar sesión de usuario
    public function iniciarSesion() {
        $query = "SELECT * FROM " . $this->table_name . " WHERE usuario = :usuario LIMIT 0,1";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":usuario", $this->usuario);
        $stmt->execute();

        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($row && password_verify($this->password, $row['password'])) {
            // Asignar valores de la base de datos a las propiedades del objeto
            $this->id_usuario = $row['id_usuario'];
            $this->estatus = $row['estatus'];
            return true;
        }
        return false;
    }
}
?>