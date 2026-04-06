import { useState } from "react";

const Ex1 = () => {
    // 1. Estado para guardar el color actual (empezamos en blanco)
    const [color, setColor] = useState('#ffffff');

    // 2. Función para generar un color hexadecimal aleatorio
    const changeColor = () => {
        // Generamos un número aleatorio entre 0 y 0xFFFFFF
        // Luego lo convertimos a cadena hexadecimal y nos aseguramos de que tenga 6 dígitos.
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        
        // Actualizamos el estado con el nuevo color
        setColor(randomColor);
    };

    return (
        /* React sincroniza el estado 'color' con el estilo automáticamente aquí */
        <section className="min-h-screen p-10 transition-colors duration-500" style={{ backgroundColor: color }}>
            <h1>1. Cambiador de Color de Fondo</h1>
            
            <h3>Objetivo del ejercicio:</h3>
            <p>Practicar eventos en JavaScript y manipulación de estilos del DOM.</p>
            
            <h3>Ejercicio:</h3>
            <p>Crea una página web con un botón que diga "Cambiar color". Cada vez que el usuario haga clic en el botón, el color de fondo de la página debe cambiar a un color aleatorio.</p>

            <div className="card bg-base-200 shadow-xl mt-10">
                <div className="card-body flex flex-col text-info-content p-10 items-center">
                    <p className="text-xl mb-4 px-6 py-3 text-center bg-white/50 rounded shadow">
                        Color actual: <span className="font-mono font-bold">{color}</span>
                    </p>
                    {/* Botón con el evento onClick */}
                    <button onClick={changeColor} className="px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-primary/80 transition-all active:scale-95">
                        Cambiar Fondo
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Ex1;