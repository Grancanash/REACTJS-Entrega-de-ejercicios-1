import { useState } from "react";

const Ex2 = () => {

    const [contador, setContador] = useState(0);

    return (
        <section className="min-h-screen p-10 transition-colors duration-500">
            <h1>2. Contador de Clics</h1>
            
            <h3>Objetivo del ejercicio:</h3>
            <p>Practicar el manejo de eventos y la actualización del contenido del DOM.</p>
            
            <h3>Ejercicio:</h3>
            <p>Crea una página con un botón que diga "Contar clics" y un texto inicial que muestre "Clics: 0". Cada vez que se haga clic en el botón, el texto debe actualizarse para mostrar el número total de clics realizados.</p>

            <div className="card bg-base-200 shadow-xl mt-10">
                <div className="card-body flex flex-col text-info-content p-10 items-center">
                    <div className="flex flex-col w-50 mb-4 px-4 py-3 bg-white/50 rounded shadow gap-0 m-0 items-center">
                        <p className="m-0">Clics:</p>
                        <p className="font-bold m-0 font-digital text-9xl">{contador}</p>
                    </div>
                    <button className="px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-primary/80 transition-all active:scale-95"
                        onClick={() => setContador(contador + 1)}>
                        Contar clicks
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Ex2;