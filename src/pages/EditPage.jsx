import React from 'react';
import EditService from '../components/EditService';
import { useNavigate, useParams } from 'react-router-dom';
import { editservice } from '../utils/api';

function EditPage() {
  const navigate = useNavigate();
  const { idservice } = useParams();

  function onEditServiceHandler(contact) {
    editservice(idservice, contact);
    navigate('/');
  }

  return (
    <section>
      <h2>Edit jasa</h2>
      <EditService editService={onEditServiceHandler} />
    </section>
  )
}

export default EditPage;