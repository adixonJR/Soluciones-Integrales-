
import './App.css'
import './index.css' 
function App() {
  return (
    <div className="h-screen bg-black text-white flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold text-green-400">✅ Tailwind CARGADO</h1>
      <p className="text-lg text-gray-300">
        Si ves este texto centrado con fondo negro, Tailwind está funcionando.
      </p>
      <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded">
        Todo OK
      </button>
    </div>
  );
}

export default App;

