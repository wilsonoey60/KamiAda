import React from 'react';
import PropType from 'prop-types';
import ContactItemBody from './ContactItemBody';
import DeleteButton from './DeleteButton';

function ContactItem({ nameservice, descriptionservice, idservice, onDelete }) {
 return (
   <div className="contact-item">
     <ContactItemBody nameservice={nameservice} descriptionservice={descriptionservice} />
     <DeleteButton idservice={idservice} onDelete={onDelete} />
   </div>
 );
}

ContactItem.propType = {
  name: PropType.string.isRequired,
  tag: PropType.string.isRequired,
  id: PropType.number.isRequired,
  onDelete: PropType.func.isRequired,
};

export default ContactItem;