import React from 'react';
import PropTypes from 'prop-types';

function ContactItemBody({ nameservice, descriptionservice }) {
 return (
   <div className="contact-item__body">
     <h3 className="contact-item__title">{nameservice}</h3>
     <p className="contact-item__username">{descriptionservice}</p>
   </div>
 );
}

ContactItemBody.propTypes = {
  nameservice: PropTypes.string.isRequired,
  descriptionservice: PropTypes.string.isRequired,
}

export default ContactItemBody;