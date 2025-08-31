import './App.css';
import './index.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="h-screen bg-white text-white flex flex-col">
      
      <main className="flex-grow flex flex-col items-center justify-center gap-4">
        
      
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded">
          Todo OK
        </button>
      </main>
      
    </div>
  );
}

export default App;
