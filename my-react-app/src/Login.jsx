import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sign-in.css';

const Login = () => {
  // Estados para capturar el email y la contraseña
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Función que maneja el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario
    
    // Datos que se enviarán a la API
    const loginData = {
      email: email,
      password: password
    };

    try {
      // Realiza la petición POST a la API
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData), // Convierte los datos a formato JSON
      });

      // Manejo de la respuesta
      const data = await response.json();
      
      if (response.ok) {
        // Si el login fue exitoso, manejar la respuesta
        console.log('Inicio de sesión exitoso', data);
        // Puedes redirigir o almacenar el token según sea necesario
      } else {
        // Si hubo un error, manejar el error
        console.error('Error en el inicio de sesión:', data.message);
      }
    } catch (error) {
      console.error('Error de conexión:', error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-body-tertiary">
      <main className="form-signin">
        <form onSubmit={handleSubmit}>
          <img
            className="mb-4"
            src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
            alt="Bootstrap logo"
            width="72"
            height="57"
          />
          <h1 className="h3 mb-3 fw-normal">Inicio de Sesion</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={email} // Asocia el valor del estado email
              onChange={(e) => setEmail(e.target.value)} // Actualiza el estado email
            />
            <label htmlFor="floatingInput">Usuario</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={password} // Asocia el valor del estado password
              onChange={(e) => setPassword(e.target.value)} // Actualiza el estado password
            />
            <label htmlFor="floatingPassword">Contraseña</label>
          </div>

          <div className="form-check text-start my-3">
            <input
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Recuerdame
            </label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">
            Iniciar Sesion
          </button>
          <br></br>
          <br></br>
          <button className="btn btn-primary w-100 py-2" type="button">
            Registrate
          </button>
        </form>
      </main>
    </div>
  );
};

export default Login;
