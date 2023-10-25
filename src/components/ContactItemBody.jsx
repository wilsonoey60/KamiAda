import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ContactItemBody({ idservice, nameservice, descriptionservice }) {
 return (
   <div className="contact-item__body">
     <h3 className="contact-item__title">
      <Link to={`/user/service/${idservice}`}>{nameservice}</Link>
     </h3>
     <p className="contact-item__username">{descriptionservice}</p>
   </div>
 );
}

ContactItemBody.propTypes = {
  idservice: PropTypes.string.isRequired,
  nameservice: PropTypes.string.isRequired,
  descriptionservice: PropTypes.string.isRequired,
}

export default ContactItemBody;