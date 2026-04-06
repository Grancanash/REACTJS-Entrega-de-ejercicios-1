import { useParams } from 'react-router-dom';
import * as Exercises from './exercises'; // Importa todos los Ex del index.js

const ExerciseSelector = () => {
    const { id } = useParams(); // Extrae el "1", "2", etc., de la URL
    
    // Buscamos el componente en el objeto importado (Exercises.Ex1, Exercises.Ex2...)
    const SelectedExercise = Exercises[`Ex${id}`];

    // Si el usuario pone /ejercicios/99 y no existe, mostramos un error limpio
    if (!SelectedExercise) {
        return (
        // <div className="p-10 text-center">
        <section className="min-h-screen p-10 transition-colors duration-500">
            <div className="alert alert-info shadow-sm bg-info/10 border border-info/20 text-info-content rounded-xl p-6">
                <h2 className="my-0 text-2xl font-bold">404</h2>
                <p className='my-0 ms-3'>El ejercicio {id} no existe.</p>
            </div>
        </section>
        );
    }

    // Retornamos el componente encontrado para que se pinte en el <Outlet />
    return <SelectedExercise />;
};

export default ExerciseSelector;