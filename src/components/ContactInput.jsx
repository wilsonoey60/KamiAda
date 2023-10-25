import React from 'react';
import PropTypes from 'prop-types';

class ContactInput extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      nameservice: '',
      descriptionservice: '',
    }

    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onNameChangeEventHandler(event) {
    this.setState(() => {
      return {
        nameservice: event.target.value,
      }
    });
  }

  onTagChangeEventHandler(event) {
    this.setState(() => {
      return {
        descriptionservice: event.target.value,
      }
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addContact(this.state);
  }

  render() {
   return (
     <form className='contact-input' onSubmit={this.onSubmitEventHandler}>
       <input type="text" placeholder="Nama" value={this.state.nameservice} onChange={this.onNameChangeEventHandler} />
       <input type="text" placeholder="Tag" value={this.state.descriptionservice} onChange={this.onTagChangeEventHandler} />
       <button type="submit">Tambah</button>
     </form>
   )
 }
}

ContactInput.propTypes = {
  addContact: PropTypes.func.isRequired,
 }

export default ContactInput;