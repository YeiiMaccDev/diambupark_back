import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sign-in.css';

const Login = () => {
  return (
    <div 
      className="d-flex justify-content-center align-items-center vh-100 bg-body-tertiary"
    >
      <main className="form-signin">
        <form>
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
            />
            <label htmlFor="floatingInput">Usuario</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
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
        </form>
      </main>
    </div>
  );
};

export default Login;
