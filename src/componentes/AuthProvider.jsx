const AuthProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null);
  
    // Simula la base de datos de usuarios para pruebas
    const usuariosDB = {
      'admin@example.com': {
        correo: 'admin@example.com',
        contraseña: 'admin123',
        nombre: 'Admin Uno',
        esAdministrador: true,
      },
      'usuario@example.com': {
        correo: 'usuario@example.com',
        contraseña: 'usuario123',
        nombre: 'Usuario Uno',
        esAdministrador: false,
      },
    };
  
    const iniciarSesion = (correo, contraseña) => {
      return new Promise((resolve, reject) => {
        const usuario = usuariosDB[correo];
        if (usuario && usuario.contraseña === contraseña) {
          setUsuario(usuario);
          resolve(usuario); 
        } else {
          reject('Credenciales incorrectas');
        }
      });
    };
    
  
    const cerrarSesion = () => {
      setUsuario(null);
    };
  
    return (
      <AuthContext.Provider value={{ usuario, iniciarSesion, cerrarSesion }}>
        {children}
      </AuthContext.Provider>
    );
  };
  