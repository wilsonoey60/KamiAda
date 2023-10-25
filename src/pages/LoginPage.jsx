import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { login } from '../utils/api';

function LoginPage({ loginSuccess }) {
  async function onLogin({ emailuser, passworduser }) {
    const { error, data } = await login({ emailuser, passworduser });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <section className='login-page'>
      <h2>Silakan masuk untuk melanjutkan ...</h2>
      <LoginInput login={onLogin} />
      <p>Belum punya akun? <Link to="/register">Daftar di sini.</Link></p>
    </section>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
}

export default LoginPage;