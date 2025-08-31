import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Contacto from './pages/Contacto';
import Navbar from './components/navbar';
import Footer from './components/footer';

// Layout para que Navbar y Footer estén siempre
const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="h-screen bg-white text-black flex flex-col">
    {/* Navbar siempre */}
    <Navbar />
    <main className="flex-grow">{children}</main>
    {/* Footer siempre */}
    <Footer />
  </div>
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <App />
            </Layout>
          }
        />
        <Route
          path="/contacto"
          element={
            <Layout>
              <Contacto />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
