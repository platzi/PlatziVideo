import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { registerUser } from '../actions';
import '../assets/styles/components/Register.scss';

const Register = (props) => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerUser(form, '/login');
  };

  return (
    <>
      <Header isRegister />
      <section className="register">
        <section className="register__container">
          <h2>Regístrate</h2>
          <form className="register__container--form" onSubmit={handleSubmit}>
            <input
              name="name"
              className="input"
              type="text"
              placeholder="Nombre"
              onChange={handleInput}
              required
            />
            <input
              name="email"
              className="input"
              type="text"
              placeholder="Correo"
              onChange={handleInput}
              required
            />
            <input
              name="password"
              className="input"
              type="password"
              placeholder="Contraseña"
              onChange={handleInput}
              required
            />
            <button className="button" type="submit">Registrarme</button>
          </form>
          <Link to="/login">
            Iniciar sesión
          </Link>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  registerUser,
};

export default connect(null, mapDispatchToProps)(Register);
