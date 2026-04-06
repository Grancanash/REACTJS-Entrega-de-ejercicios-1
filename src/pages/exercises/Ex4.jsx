import { useMemo, useState } from "react";


const animals = [
    "León", "Elefante", "Colibrí", "Pulpo", "Lobo", "Pingüino", "Canguro", "Águila", "Tiburón", "Cebra", "Ajolote", "Oso Panda", "Zorro", "Flamenco", "Koala", "Delfín", "Guepardo", "Búho", "Tortuga", "Camaleón"
];

const Ex4 = () => {
    const [inputValue, setInputValue] = useState('');

    // Variable calculada: se actualiza solo cuando cambia inputValue o animals
    const filteredAnimals = useMemo(() => {
        const search = inputValue.toLowerCase().trim();
        return animals.filter((animal) =>
            animal.toLowerCase().includes(search)
        );
    }, [inputValue]);

    const handleInputChange = (e) => setInputValue(e.target.value);

    return (
        <section className="min-h-screen p-10 transition-colors duration-500">
            <h1>4. Filtro de Búsqueda en Tiempo Real</h1>
            
            <h3>Objetivo del ejercicio:</h3>
            <p>Practicar la interacción entre eventos del DOM y lógica en JavaScript.</p>
            
            <h3>Ejercicio:</h3>
            <p>Crea una página con un campo de texto y una lista predefinida de elementos.</p>
            <ul className="my-list">
                <li>Mientras el usuario escribe en el campo, la lista debe actualizarse en tiempo real para mostrar solo los elementos que contienen el texto escrito.</li>
            </ul>

            <h3>Ejemplo:</h3>
            <p>Si la lista contiene <code>["Perro", "Gato", "Pez"]</code> y el usuario escribe "Ga", solo "Gato" debe quedar visible.</p>

            <div className="card bg-base-200 shadow-xl mt-10">
                <div className="card-body flex flex-col text-info-content">
                    <div className="flex border">
                        <input type="text" placeholder="Buscar animal" className="input input-bordered flex-1 rounded-r-none text-black focus:outline-none focus:border-slate-400"
                            value={inputValue}
                            onChange={handleInputChange} />
                    </div>

                    {/* Renderizado de la lista filtrada */}
                    <ul className="mt-4 space-y-2 text-black flex flex-wrap gap-2">
                    {filteredAnimals.map((animal) => (
                        <li key={animal} className="px-4 py-2 bg-slate-100 rounded shadow-sm m-0">
                        {animal}
                        </li>
                    ))}
                    {filteredAnimals.length === 0 && (
                        <p className="text-gray-500">No se encontraron resultados.</p>
                    )}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Ex4;