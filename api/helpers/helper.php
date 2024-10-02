<?php 

class helper 
{
    /**
     * Helper para la api
     *
     * Esta función toma la informacion para procesar la respuesta del servidor.
     *
     * @param array $data array de datos de la consulta.
     * @param string $msgExterno Mensaje que se mostrara cuando estemos en producción
     * @return array El array que se convertira en el json de respuesta.
     */
    function success($msgExterno, $data = null){       
        $data = array(
            'success' => true,
            'response' => $msgExterno,
            'data' => $data,
        );

        return $data;
    }

    
    /**
     * Helper para la api
     *
     * Esta función toma la informacion para procesar la respuesta de error del servidor.
     *
     * @param array $data array de datos de la consulta.
     * @param string $msgInterno Mensaje que se mostrara cuando estemos debugueando
     * @param string $msgExterno Mensaje que se mostrara cuando estemos en producción
     * @return array El array que se convertira en el json de respuesta.
     */
    
    function error($msgInterno, $msgExterno, $data = null){
        $mensaje = ($_SERVER['HTTP_HOST'] == "localhost:8080") ? $msgExterno : $msgInterno;
        
        
        $data = array(
            'success' => false,
            'response' => $mensaje,
            'data' => $data,
        );

        return $data;
    }
}