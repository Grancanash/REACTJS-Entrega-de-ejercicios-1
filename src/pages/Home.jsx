const Home = () => {
  return (
    <section className="min-h-screen p-10 transition-colors duration-500">
        {/* TÍTULO PRINCIPAL: Con tipografía moderna y color del tema */}
        <h1>
            Entrega de ejercicios 1
        </h1>

        <p>El objetivo con estos ejercicios es practicar todo lo aprendido con pequeños ejercicios sencillos y entregables ya realizados en vanilla JS, ahora hacerlos en React con el código mínimo. Aunque parezca que es matar moscas a cañonazos, haciendo cosas sencillas, nos vendrá genial para ir practicando poco a poco.</p>

        <h2>Formato de entrega</h2>

        <p>Para entregar estos ejercicios se realizará una página inicial de aterrizaje con un pequeño índice que enlace a cada uno de los ejercicios por separado.</p>
        <p>Se propone la siguiente estructura:</p>
    
        <ul className="ps-4">
            <li><code>index.html</code></li>
            <li><code>ejercicio_1.jsx</code></li>
            <li><code>ejercicio_2.jsx</code></li>
        </ul>

        <div className="divider before:bg-black after:bg-black opacity-30 before:h-[0.5px] after:h-[0.5px]"></div>
        
        {/* PÁRRAFO DESCRIPTIVO: Con buen interlineado y color suave */}
        <div className="alert alert-info shadow-sm bg-info/10 border border-info/20 text-info-content rounded-xl p-6">
            <p className="m-0">Utiliza el menú lateral de la izquierda para navegar por los diferentes ejercicios.</p>
        </div>
    </section>
  );
};

export default Home;