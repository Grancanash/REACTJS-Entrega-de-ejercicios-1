import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './routes/paths';
import Layout from './components/Layout';
import ExerciseSelector from './pages/ExerciseSelector';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter basename="/REACTJS-Entrega-de-ejercicios-1">
        <Routes>
            {/* Ruta Padre: Siempre carga el Layout */}
            <Route path="/" element={<Layout />}>
                {/* Ruta Hija: Se cargará donde esté el <Outlet /> */}

                {/* 1. Cuando estás en "/", el <Outlet /> mostrará el Home */}
                <Route index element={<Home />} />

                {/* 2. Cuando estés en "/exercises/1", el <Outlet /> mostrará el Selector */}
                <Route path={ROUTES.DETALLE_EJERCICIO} element={<ExerciseSelector />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;