import { useState } from "react";

const Ex5 = () => {
    const [inputs, setInputs] = useState({ operand1: '', operand2: '' });
    const [result, setResult] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        // 1. Limpiamos cualquier carácter que no sea número o punto
        const regex = /^-?\d*\.?\d*$/;

        // 2. UNA SOLA llamada a setInputs con el valor ya limpio
        if (regex.test(value) || value === '') {
            setInputs({
                ...inputs,
                [name]: value
            });
        }
    };

    const handleButtonClick = (operator) => {
        const op1 = parseFloat(inputs.operand1) || 0;
        const op2 = parseFloat(inputs.operand2) || 0;
        let res = 0;

        switch(operator) {
            case '+': res = op1 + op2; break;
            case '-': res = op1 - op2; break;
            case '*': res = op1 * op2; break;
            case '/': res = op2 !== 0 ? op1 / op2 : 'Error (Div 0)' ; break;
            default: return;
        }

        setResult(res);
    }

    return (
        <section className="min-h-screen p-10 transition-colors duration-500">
            <h1>5. Calculadora Sencilla</h1>
            
            <h3>Objetivo del ejercicio:</h3>
            <p>Practicar la manipulación de formularios, eventos, y lógica básica de JavaScript.</p>
            
            <h3>Ejercicio:</h3>
            <p>Crea una página con dos campos de entrada de números y cuatro botones: "Sumar", "Restar", "Multiplicar", y "Dividir".</p>
            <ul className="my-list">
                <li>Al hacer clic en cualquiera de los botones, debe mostrarse el resultado de la operación en un área de texto o debajo de los botones</li>
                <li>Asegúrate de validar los datos para evitar errores (como división por cero o entradas vacías).</li>
            </ul>

            <div className="card bg-base-200 shadow-xl mt-10">
                <div className="card-body">
                    <div className="flex  items-center gap-4">
                        {/* Columna 1: Operandos */}
                        <div className="flex flex-col gap-1 flex-2">
                            <div className="flex items-center gap-2">
                                <label htmlFor="operand-1" className="text-black border-none">Operando 1</label>
                                <input type="text" id="operand-1" name="operand1" placeholder="Escribe un número" className="input input-bordered flex-1 rounded-r-none text-black focus:outline-none focus:border-slate-400"
                                    value={inputs.operand1}
                                    onChange={handleInputChange} />
                            </div>
                            <div className="flex items-center gap-2">
                                <label htmlFor="operand-2" className="text-black border-none">Operando 2</label>
                                <input type="text" id="operand-2" name="operand2" placeholder="Escribe un número" className="input input-bordered flex-1 rounded-r-none text-black focus:outline-none focus:border-slate-400"
                                    value={inputs.operand2}
                                    onChange={handleInputChange} />
                            </div>
                        </div>
                        {/* Columna 2: Operadores */}
                        <div className="grid grid-cols-2 gap-1 flex-1">
                            {[
                                { op: '+', path: "M12 4.5v15m7.5-7.5h-15" },
                                { op: '-', path: "M5 12h14" },
                                { op: '*', path: "M6 18 18 6M6 6l12 12" },
                                { op: '/', path: "M4.499 11.998h15m-7.5-6.75h.008v.008h-.008v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM12 18.751h.007v.007H12v-.007Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" }
                            ].map((item) => (
                                <button 
                                    key={item.op}
                                    className="btn btn-primary" 
                                    onClick={() => handleButtonClick(item.op)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d={item.path} />
                                    </svg>
                                </button>
                            ))}
                        </div>
                        {/* Columna 3: Resultado */}
                        <div className="flex flex-col flex-2">
                            <label htmlFor="result" className="text-black border-none">Resultado:</label>
                            <input type="text" id="result" placeholder="Resultado" className="input input-bordered rounded-r-none text-black focus:outline-none focus:border-slate-400" readOnly
                                value={result}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Ex5;