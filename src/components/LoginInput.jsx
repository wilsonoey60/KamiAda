import React from 'react';
import PropTypes from 'prop-types';

class LoginInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emailuser: '',
      passworduser: '',
    };

    this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
    this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onEmailChangeHandler(event) {
    this.setState(() => {
      return {
        emailuser: event.target.value
      }
    })
  }

  onPasswordChangeHandler(event) {
    this.setState(() => {
      return {
        passworduser: event.target.value
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();

    this.props.login({
      emailuser: this.state.emailuser,
      passworduser: this.state.passworduser,
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler} className='login-input'>
        <input type="email" placeholder='Email' value={this.state.emailuser} onChange={this.onEmailChangeHandler} />
        <input type="password" placeholder='Password' value={this.state.passworduser} onChange={this.onPasswordChangeHandler} />
        <button>Masuk</button>
      </form>
    );
  }
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
}

export default LoginInput;