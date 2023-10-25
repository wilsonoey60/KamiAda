import React from 'react';
import PropTypes from 'prop-types';

class RegisterInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      emailuser: '',
      passworduser: '',
      avataruser: 'https://d17ivq9b7rppb3.cloudfront.net/small/avatar/pp.jpg',
      roleuser: 'user',
      statususer: 'active',
    }

    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onNameChange(event) {
    this.setState(() => {
      return {
        username: event.target.value,
      };
    });
  }

  onEmailChange(event) {
    this.setState(() => {
      return {
        emailuser: event.target.value
      };
    });
  }

  onPasswordChange(event) {
    this.setState(() => {
      return {
        passworduser: event.target.value
      };
    })
  }

  onSubmitHandler(event) {
    event.preventDefault();

    this.props.register({
      username: this.state.username,
      emailuser: this.state.emailuser,
      passworduser: this.state.passworduser,
      avataruser: this.state.avataruser,
      roleuser: this.state.roleuser,
      statususer: this.state.statususer,
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler} className='register-input'>
        <input type="text" placeholder="Nama" value={this.state.username} onChange={this.onNameChange} />
        <input type="email" placeholder="Email" value={this.state.emailuser} onChange={this.onEmailChange} />
        <input type="password" placeholder="Password" autoComplete='current-password' value={this.state.passworduser} onChange={this.onPasswordChange} />
        <button>Register</button>
      </form>
    )
  }
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;