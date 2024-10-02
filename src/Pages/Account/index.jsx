import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Account() {
    const [user, setUser] = useState(null); // Estado para almacenar los datos del usuario
    const navigate = useNavigate();

    // Cargar los datos del usuario desde localStorage
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("sesionUsuario"));
        if (userData) {
            setUser(userData);
        } else {
            // Si no hay un usuario en sesión, redirigir al login
            navigate("/login");
        }
    }, [navigate]);

    // Cerrar sesión y redirigir al login
    const handleLogout = () => {
        localStorage.removeItem("sesionUsuario"); // Eliminar los datos del usuario de la sesión
        navigate("/login"); // Redirigir al login
    };

    if (!user) {
        return <p>Cargando...</p>; // Muestra esto mientras se cargan los datos del usuario
    }

    return (
        <section className="mt-20 w-full">
            <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold text-center">Mi Cuenta</h1>
                <div className="mt-4">
                    <p><strong>Nombre:</strong> {user.nombre}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                </div>
                <div className="mt-6">
                    <button
                        onClick={handleLogout}
                        className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-500"
                    >
                        Cerrar Sesión
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Account;
