import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

import Contacto from './pages/Contacto';
import Navbar from './components/navbar';
import Footer from './components/footer';
import QuienesSomos from './pages/QuienesSomos';
import NuestraHistoria from './pages/NuestraHistoria';
import NuestraOrganizacion from './pages/NuestraOrganizacion';
import NuestroEquipo from './pages/NuestroEquipo';
import ConsultoriaTI from './pages/ConsultoriaTI';
import ConsultoriaEmpresarial from './pages/ConsultoriaEmpresarial';
import ComunidadActiva from './pages/ComunidadActiva';
import Convenios from './pages/Convevios';
import Organigrama from './pages/Organigrama';




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
        <Route
          path="/QuienesSomos"
          element={
            <Layout>
              <QuienesSomos />
            </Layout>
          }
        />
        <Route
          path="/NuestraHistoria"
          element={
            <Layout>
              <NuestraHistoria />
            </Layout>
          }
        />
        <Route
          path="/ComunidadActiva"
          element={
            <Layout>
              <ComunidadActiva/>
            </Layout>
          }
        />
        <Route
          path="/ConsultoriaEmpresarial"
          element={
            <Layout>
              <ConsultoriaEmpresarial />
            </Layout>
          }
        />
        <Route
          path="/ConsultoriaTI"
          element={
            <Layout>
              <ConsultoriaTI />
            </Layout>
          }
        />
        <Route
          path="/Convenios"
          element={
            <Layout>
              <Convenios />
            </Layout>
          }
        />
        <Route
          path="/NuestraOrganizacion"
          element={
            <Layout>
              <NuestraOrganizacion />
            </Layout>
          }
        />
        <Route
          path="/NuestroEquipo"
          element={
            <Layout>
              <NuestroEquipo />
            </Layout>
          }
        />
        <Route
          path="/Orgamigrama"
          element={
            <Layout>
              <Organigrama />
            </Layout>
          }
        />
       
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
