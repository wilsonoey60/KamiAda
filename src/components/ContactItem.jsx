import React from 'react';
import PropType from 'prop-types';
import ContactItemBody from './ContactItemBody';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

function ContactItem({ nameservice, descriptionservice, idservice, onDelete }) {
 return (
   <div className="contact-item">
     <ContactItemBody idservice={idservice} nameservice={nameservice} descriptionservice={descriptionservice} />
     <EditButton idservice={idservice} />
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