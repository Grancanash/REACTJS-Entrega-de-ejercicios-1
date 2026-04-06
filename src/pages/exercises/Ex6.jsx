import { useRef, useState } from "react";

const Ex6 = () => {
    const [temp, setTemp] = useState(0);
    const [active, setActive] = useState(false);
    const idInterval = useRef(null);

    const init = () => {
        if (active) return;
        setActive(true);

        idInterval.current = setInterval(() => {
            setTemp(prev => prev + .1);
        }, 100);
    };

    const pause = () => {
        clearInterval(idInterval.current);
        setActive(false);
    };

    const reset = () => {
        pause();
        setTemp(0);
    };

    return (
        <section className="min-h-screen p-10 transition-colors duration-500">
            <h1>6. Temporizador con Inicio, Pausa y Reinicio</h1>
            
            <h3>Objetivo del ejercicio:</h3>
            <p> Practicar manejo de eventos, funciones de temporización y manipulación del DOM.</p>
            
            <h3>Ejercicio:</h3>
            <p>Crea una página con un temporizador que comience en 00:00:00. Incluye tres botones: “Iniciar”, “Pausar” y “Reiniciar”.</p>
            <ul className="my-list">
                <li>Al hacer clic en “Iniciar”, el temporizador debe comenzar a contar los segundos, minutos y horas.</li>
                <li>“Pausar” detiene el conteo pero mantiene el tiempo actual.</li>
                <li>“Reiniciar” pone el temporizador en 00:00:00.</li>
            </ul>

            {/* <div className="flex flex-col border alert-info shadow-sm bg-info/10 rounded-xl p-10 mt-10 border-info/20 text-info-content items-center gap-4"> */}
            <div className="card bg-base-200 shadow-xl mt-10">
                <div className="card-body flex flex-col text-info-content items-center gap-4">
                    <div className="flex gap-1">
                        {/* Columna 1: Operandos */}
                        <div className="flex gap-1">
                            <button className={`btn ${active ? 'btn-disabled' : 'btn-primary'}`} onClick={init}>
                                Iniciar temporizador
                            </button>
                        </div>
                        {/* Columna 2: Operadores */}
                        <div className="flex gap-1">
                            <button className="btn btn-primary" onClick={pause}>
                                Pausar temporizador
                            </button>
                        </div>
                        {/* Columna 2: Operadores */}
                        <div className="flex gap-1">
                            <button className="btn btn-primary" onClick={reset}>
                                Reiniciar temporizador
                            </button>
                        </div>
                    </div>
                    {/* Columna 3: Resultado */}
                    <div className="flex flex-col flex-2">
                        <div className="bg-base-100 p-4 rounded-lg text-center shadow-inner min-h-20 text-black flex w-50 justify-center font-digital text-6xl">
                        {temp.toFixed(1)}</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Ex6;