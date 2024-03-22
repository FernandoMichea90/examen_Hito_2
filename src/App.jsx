import React from 'react';
import { AuthProvider } from './componentes/AuthContext'; 
import { CarritoProvider } from './componentes/CarritoContext';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Rutas from './componentes/Rutas';
import Footer from './componentes/Footer';
import { FavoritosProvider } from './componentes/FavoritosContext';

function App() {
  return (
    <AuthProvider>
      <CarritoProvider>
      <FavoritosProvider>
        <Router>
          <Navbar />
          <Rutas />
          <Footer />
        </Router>
        </FavoritosProvider>
      </CarritoProvider>
    </AuthProvider>
  );
}

export default App;
