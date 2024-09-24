import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sign-in.css';
import { Menu } from './components/Menu';

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  console.log("Email: ", email)
  console.log("Password: ", password)

  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita el envío del formulario

    try {
      const response = await fetch('https://diambupark-back.vercel.app/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login exitoso:', data);

      } else {
        console.error('Error en el login:', data.msg);
        alert(`Error en el login: ${data.msg}`);
      }
    } catch (error) {
      console.error('Error de conexión:', error);
    }
  };

  return (
    <>
      <Menu />
      <div
        className="d-flex justify-content-center align-items-center vh-100 bg-body-tertiary"
      >
        <main className="form-signin">
          <form onSubmit={handleSubmit}>
            <img
              className="mb-4"
              src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
              alt="Bootstrap logo"
              width="72"
              height="57"
            />
            <h1 className="h3 mb-3 fw-normal">Inicio Sesion</h1>

            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="floatingInput">Usuario</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
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
            <button className="btn btn-primary w-100 py-2" type="submit">
              Registrate
            </button>
          </form>
        </main>
      </div>
    </>
  );
};

export default Login;
