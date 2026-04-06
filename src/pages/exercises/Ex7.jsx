import { useRef, useState } from "react";

const Ex7 = () => {
    const [password, setPassword] = useState('');
    const [includesUpper, setIncludesUpper] = useState(true);
    const [includesNumbers, setIncludesNumbers] = useState(true);
    const [includesSpecial, setIncludesSpecial] = useState(true);
    const [passwordLength, setPasswordLength] = useState(4);
    const [showAlert, setShowAlert] = useState(false);

    const handleChangeOptions = (e, option) => {
        switch (option) {
            case 'includesUpper': setIncludesUpper(e.target.checked); break;
            case 'includesNumbers': setIncludesNumbers(e.target.checked); break;
            case 'includesSpecial': setIncludesSpecial(e.target.checked); break;
            default: return;
        }
    }

    const createPassword = () => {
        setShowAlert(false);
        setPassword('');
        if (passwordLength < 4) {
            setShowAlert(true);
            return;
        }
        const charset = `abcdefghijklmnopqrstuvwxyz${includesUpper && 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'}${includesNumbers && '0123456789'}${includesSpecial && "!\"#$%&'()*+,-./:;<=>?@[\\]^_{|}~`"}`;
        const randomValues = new Uint32Array(passwordLength);
        window.crypto.getRandomValues(randomValues);

        let password = '';
        
        for (let i = 0; i < passwordLength; i++) {
            // Usamos el operador módulo para elegir un índice del charset
            password += charset[randomValues[i] % charset.length];
        }

        setPassword(password);
    }


    return (
        <section className="min-h-screen p-10 transition-colors duration-500">
            <h1>7. Generador de Contraseñas Aleatorias</h1>
            
            <h3>Objetivo del ejercicio:</h3>
            <p>Practicar generación de cadenas aleatorias y uso de formularios.</p>
            
            <h3>Ejercicio:</h3>
            <p>Crea una página con un campo de entrada para especificar la longitud de una contraseña y un botón que diga “Generar contraseña”.</p>
            <ul className="my-list">
                <li>Al hacer clic en el botón, se debe mostrar una contraseña generada aleatoriamente usando letras, números y caracteres especiales.</li>
                <li>Si la longitud es menor a 4 o el campo está vacío, muestra un mensaje de error indicando que la longitud debe ser mayor o igual a 4.</li>
            </ul>

            <div className="card bg-base-200 shadow-xl mt-10">
                <div className="card-body items-center">
                    {/* Fila 0: Advertencia */}
                    { showAlert && (
                    <div role="alert" className="alert alert-warning">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <span>Advertencia! La contraseña debe tener más de 3 carácteres.</span>
                    </div>
                    )}
                    {/* Fila 1: longitud */}
                    <div className="flex gap-1">
                        <div className="flex items-center gap-2">
                            <label htmlFor="pass-length" className="text-black border-none">Longitud de contraseña:</label>
                            <input type="number" id="pass-length" name="pass-length" className="w-20 input input-bordered flex-1 rounded-r-none text-black focus:outline-none focus:border-slate-400"
                                value={passwordLength}
                                onChange={(e) => setPasswordLength(e.target.value)}/>
                        </div>
                        <div className="">
                            <button className='btn btn-primary'
                                onClick={createPassword}>
                                Generar contraseña
                            </button>
                        </div>
                    </div>
                    {/* Fila 2: Parámetros */}
                    <div className="flex flex-col gap-1 pb-5">
                        <label className="label text-black">
                            <input type="checkbox" checked={includesUpper} onChange={(e) => handleChangeOptions(e, 'includesUpper')} className="checkbox" />
                            Contiene mayúsculas
                        </label>
                        <label className="label text-black">
                            <input type="checkbox" checked={includesNumbers} onChange={(e) => handleChangeOptions(e, 'includesNumbers')} className="checkbox" />
                            Contiene números
                        </label>
                        <label className="label text-black">
                            <input type="checkbox" checked={includesSpecial} onChange={(e) => handleChangeOptions(e, 'includesSpecial')} className="checkbox" />
                            Contiene carácteres especiales
                        </label>
                    </div>
                    {/* Fila 3: Resultado */}
                    <div className="w-full">
                        <div className="bg-base-100 p-4 rounded-lg text-center shadow-inner min-h-20 text-3xl text-black font-mono">
                            {password}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Ex7;