<?php
class DatosUsuario {
    private $conn;
    private $table_name = "datos_usuarios";

    public $id_datos_usuario;
    public $nombre_completo;
    public $id_usuarios_fk_datos_usuarios;
    public $direccion;
    public $extra;
    public $telefono;
    public $empresa;
    public $estatus;

    public function __construct($db) {
        $this->conn = $db;
    }

    // Crear datos de usuario
    public function crearDatosUsuario() {
        $query = "INSERT INTO " . $this->table_name . " SET 
            nombre_completo=:nombre_completo,
            id_usuarios_fk_datos_usuarios=:id_usuarios_fk_datos_usuarios,
            direccion=:direccion,
            extra=:extra,
            telefono=:telefono,
            empresa=:empresa,
            estatus=:estatus";

        $stmt = $this->conn->prepare($query);

        // Enlazar los valores
        $stmt->bindParam(":nombre_completo", $this->nombre_completo);
        $stmt->bindParam(":id_usuarios_fk_datos_usuarios", $this->id_usuarios_fk_datos_usuarios);
        $stmt->bindParam(":direccion", $this->direccion);
        $stmt->bindParam(":extra", $this->extra);
        $stmt->bindParam(":telefono", $this->telefono);
        $stmt->bindParam(":empresa", $this->empresa);
        $stmt->bindParam(":estatus", $this->estatus);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }

    // Obtener datos del usuario
    public function obtenerDatosUsuario() {
        $query = "SELECT * FROM " . $this->table_name . " WHERE id_usuarios_fk_datos_usuarios = :id_usuario";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":id_usuario", $this->id_usuarios_fk_datos_usuarios);
        $stmt->execute();

        return $stmt;
    }
}
?>