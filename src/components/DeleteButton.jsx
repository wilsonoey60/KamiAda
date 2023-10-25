import React from 'react';
import PropTypes from 'prop-types';
import { FiDelete } from 'react-icons/fi';

function DeleteButton({ idservice, onDelete }) {
  return (
    <button className='contact-item__delete' onClick={() => onDelete(idservice)}>
      <FiDelete />
    </button>
  );
}

DeleteButton.propTypes = {
  idservice: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default DeleteButton;
