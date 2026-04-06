import { useState } from "react";

// utils/textMetrics.js
const getCharCount = (text) => text.replace(/\s+/g, '').length;
const getWordCount = (text) => text.trim().split(/\s+/).filter(Boolean).length;

const Ex8 = () => {
  const [inputText, setInputText] = useState('');

  // Cálculos derivados (Sin useEffect, sin sets adicionales)
  const stats = {
    chars: getCharCount(inputText),
    words: getWordCount(inputText),
  };

  console.log(stats);

  return (
    // <section className="p-8 max-w-2xl mx-auto">
    <section className="min-h-screen p-10 transition-colors duration-500">
        <h1>8. Contador de Palabras y Caracteres</h1>
        
        <h3>Objetivo del ejercicio:</h3>
        <p>Practicar eventos en tiempo real y manipulación avanzada del DOM.</p>
        
        <h3>Ejercicio:</h3>
        <p>Crea una página con un campo de texto donde el usuario pueda escribir un párrafo.</p>
        <ul className="my-list">
            <li>Muestra en tiempo real el número de caracteres y palabras ingresados debajo del campo.</li>
            <li>La palabras deben ser separadas por espacios, y los caracteres no deben incluir espacios ni saltos de línea.</li>
        </ul>
        <div className="card bg-base-200 shadow-xl mt-10">
            <div className="card-body">
                <h2 className="card-title text-primary">Analizador de Texto</h2>
                
                <textarea 
                    className={`textarea textarea-bordered h-40 mt-4 w-full ${stats.isOverLimit ? 'textarea-error' : ''}`}
                    placeholder="Empieza a escribir..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />

                {/* Grid de estadísticas estilo Dashboard */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                    <StatCard label="Caracteres" value={stats.chars} color="text-secondary" />
                    <StatCard label="Palabras" value={stats.words} color="text-accent" />
                </div>
            </div>
        </div>
    </section>
  );
};

// Sub-componente interno para mantener el DRY (Don't Repeat Yourself)
const StatCard = ({ label, value, color }) => (
    <div className="bg-base-100 p-4 rounded-lg text-center shadow-inner">
        <p className="text-xs uppercase font-bold opacity-60">{label}</p>
        <output className={`text-3xl font-mono ${color}`}>{value}</output>
    </div>
);

export default Ex8;