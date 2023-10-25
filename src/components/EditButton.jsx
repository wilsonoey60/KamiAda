import React from 'react';
import PropTypes from 'prop-types';
import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function EditButton({ idservice }) {
  return (
    <button className='contact-item__edit'>
      <Link to={`/edit/service/${idservice}`}><FiEdit /></Link>
    </button>
  );
}

EditButton.propTypes = {
  idservice: PropTypes.string.isRequired,
}

export default EditButton;