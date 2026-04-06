import { useState, useEffect } from "react";

// Funciones de ayuda (Helper functions)
const saveToStorage = (tasks) => {
  localStorage.setItem("my_tasks", JSON.stringify(tasks));
};

const getFromStorage = () => {
    const saved = localStorage.getItem("my_tasks");
    if (!saved) return [];
    try {
        return JSON.parse(saved);
    } catch {
        return [];
    }
};

const Ex9 = () => {
  // Inicializamos el estado directamente desde LocalStorage
  const [tasks, setTasks] = useState(() => getFromStorage());
  const [newTask, setNewTask] = useState("");

  // Cada vez que 'tasks' cambie, actualizamos LocalStorage automáticamente
  useEffect(() => {
    saveToStorage(tasks);
  }, [tasks]);

  const createId = () =>
    `task-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;

  const addTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    const item = {
      id: createId(),
      text: newTask,
      completed: false,
    };

    setTasks([...tasks, item]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter(t => !t.completed));
  };

  return (
    <section className="min-h-screen p-10 transition-colors duration-500">
        <h1>9. Lista de Tareas con LocalStorage</h1>
        
        <h3>Objetivo del ejercicio:</h3>
        <p>Practicar persistencia de datos con localStorage.</p>
        
        <h3>Ejercicio:</h3>
        <p>Crea una aplicación de lista de tareas.</p>
        <ul className="my-list">
            <li>Cada tarea debe incluir un texto y un checkbox para marcarla como completada.</li>
            <li>Las tareas se deben guardar en localStorage para que persistan incluso si la página se recarga.</li>
            <li>Debe incluir un botón para limpiar todas las tareas completadas y actualizar el localStorage.</li>
        </ul>

        <div className="card bg-base-200 shadow-xl mt-10">
            <div className="card-body">
                <h2 className="text-2xl font-bold mb-6 text-center">Mis Tareas</h2>

                {/* Formulario de Entrada */}
                <form onSubmit={addTask} className="flex gap-2 mb-8">
                    <input
                    type="text"
                    placeholder="¿Qué hay que hacer?"
                    className="input input-bordered w-full"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary">Añadir</button>
                </form>

                {/* Lista de Tareas */}
                <div className="space-y-3">
                    {tasks.map((task) => (
                    <div key={task.id} className="flex items-center justify-between px-3 bg-base-200 rounded-lg group">
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                className="checkbox checkbox-primary"
                                checked={task.completed}
                                onChange={() => toggleTask(task.id)}
                            />
                            <span className={`text-lg ${task.completed ? 'line-through opacity-50' : ''}`}>
                                {task.text}
                            </span>
                        </div>
                    </div>
                    ))}
                </div>

                {/* Footer / Acciones */}
                {tasks.length > 0 && (
                    <div className="mt-8 pt-4 border-t border-base-300 flex justify-between items-center">
                        <span className="text-sm opacity-60">
                            {tasks.filter(t => !t.completed).length} pendientes
                        </span>
                        <button onClick={clearCompleted} className="btn btn-ghost btn-sm text-error">Limpiar completadas</button>
                    </div>
                )}
            </div>
        </div>
    </section>
  );
};

export default Ex9;