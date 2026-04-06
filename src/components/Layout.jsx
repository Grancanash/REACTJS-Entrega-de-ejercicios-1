import { NavLink, Outlet } from 'react-router-dom';
import { ROUTES } from '../routes/paths';
import LogoConquerBlocks from '../assets/logo_cb.png';

const Layout = () => {
  // Ahora sí, ejercicios de código
  const exercises = [
    { id: '1', nombre: 'Cambiador de Color de Fondo' },
    { id: '2', nombre: 'Contador de Clics' },
    { id: '3', nombre: 'Lista Dinámica' },
    { id: '4', nombre: 'Filtro de Búsqueda en Tiempo Real' },
    { id: '5', nombre: 'Calculadora Sencilla' },
    { id: '6', nombre: 'Temporizador con Inicio, Pausa y Reinicio' },
    { id: '7', nombre: 'Generador de Contraseñas Aleatorias' },
    { id: '8', nombre: 'Contador de Palabras y Caracteres' },
    { id: '9', nombre: 'Lista de Tareas con LocalStorage' },
  ];

  return (
    /* Contenedor centrado de 1126px con estética limpia de documentación */
    <div className="mx-auto max-w-281.5 min-h-screen flex border-x border-base-300 bg-base-100 shadow-sm">
      
      {/* BARRA LATERAL: Listado de lecciones/ejercicios */}
      <aside className="w-72 bg-base-200/30 border-r border-base-300 flex flex-col">
        <div className="p-6">
          <NavLink to='/'><div className="text-2xl font-bold text-primary tracking-widest uppercase">React JS</div></NavLink>
        </div>
        
        <nav className="flex-1 px-4 overflow-y-auto">
            <ul className="menu w-full p-0 flex gap-2">
                {exercises.map((ex) => (
                    <li key={ex.id}>
                        <NavLink
                        to={ROUTES.DETALLE_EJERCICIO.replace(':id', ex.id)}
                        className={({ isActive }) => `
                            flex items-start gap-1 p-2 rounded-lg transition-all
                            ${isActive 
                                ? 'bg-primary text-primary-content font-bold shadow-md' // Estilo cuando está activo
                                : 'hover:bg-base-300 text-base-content opacity-70 hover:opacity-100' // Estilo normal
                            }
                        `}
                        >
                            {({isActive}) => (
                            <div className='flex gap-2'>
                                <div className=''>
                                    <span className={`flex w-5 h-5 mt-0.5 rounded-sm justify-center items-center text-[12px] font-bold ${isActive && "bg-white text-primary"}`}>{ex.id}</span>
                                </div>
                                <div>
                                    <span className="font-mono leading-tight tracking-tight">{ex.nombre}</span>
                                </div>
                            </div>
                            )}


                            
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>

        <div className="p-6">
          <img  src={LogoConquerBlocks} alt="Logo COnquerBlocks" className="w-30 object-contain"/>
          <div className="mt-1 text-xs"><span className='opacity-60'>Máster en desarrollo FullStack</span></div>
        </div>
      </aside>

      {/* ÁREA DE TRABAJO: Donde renderizas tus ejercicios de React */}
      <main className="flex-1 bg-base-100">
        <div>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;