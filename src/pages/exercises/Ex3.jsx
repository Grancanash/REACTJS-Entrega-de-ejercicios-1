import { useState } from "react";

const Ex3 = () => {

    const [inputValue, setInputValue] = useState('');
    const [myList, setMyList] = useState([]);

    const hasElements = myList.length > 0;

    const addElement = (e) => {
        e.preventDefault();
        if (inputValue.trim() === '') return;
        setMyList([...myList, inputValue]);
        setInputValue('');
    };

    const deleteElement = (e, index) => {
        e.preventDefault();
        setMyList(myList.filter((_, i) => i !== index));
    };

    return (
        <section className="min-h-screen p-10 transition-colors duration-500">
            <h1>3. Lista Dinámica</h1>
            
            <h3>Objetivo del ejercicio:</h3>
            <p>Trabajar con la creación, eliminación y manipulación de elementos del DOM.</p>
            
            <h3>Ejercicio:</h3>
            <p>Crea una página con un campo de texto, un botón que diga "Agregar", y una lista vacía debajo.</p>
            <ul className="my-list">
                <li>Cuando el usuario escriba un texto y haga clic en "Agregar", el texto debe añadirse como un nuevo elemento de la lista.</li>
                <li>Añade un botón al lado de cada elemento para eliminarlo de la lista.</li>
            </ul>

            <div className="card bg-base-200 shadow-xl mt-10">
                <div className="card-body flex flex-col text-info-content p-10">
                    <form onSubmit={addElement} className="flex border">
                        <input type="text" placeholder="Nuevo elemento" className="input input-bordered flex-1 rounded-r-none text-black focus:outline-none focus:border-slate-400"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)} />
                        <button className="px-6 bg-primary hover:bg-primary/80 text-white rounded-lg shadow-md transition-all shrink-0 rounded-l-none"
                            type="submit">
                            Agregar
                        </button>
                    </form>
                    {/* Renderizado de la lista con un botón para eliminar */}
                    { hasElements && (
                    <ul className="mt-4 w-full">
                        {myList.map((nombre, index) => (
                            <li key={index} className="alert flex justify-between items-center p-3 bg-primary/20 rounded-lg">
                                {nombre}
                                <a href="" onClick={(e) => deleteElement(e, index)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                        <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
                </div>
            </div>
        </section>
    );
}

export default Ex3;