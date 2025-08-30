
import './App.css'
import './index.css' 

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-6">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Soluciones Integrales
        </h1>
        <p className="text-gray-700 text-lg max-w-xl">
          Desarrollamos soluciones tecnológicas a medida para tu empresa.
        </p>
      </header>

      <a
        href="#contacto"
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300"
      >
        Contáctanos
      </a>
    </div>
  );
}

export default App;

