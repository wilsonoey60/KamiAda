import React, { useEffect } from 'react'
import FormUpdateProfile from '../components/forms/form-editprofil'
import { useNavigate } from 'react-router-dom';
import { updateProfile } from '../utils/api';

function EditProfile() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token === null) {
      navigate('/login');
    }
  });

  function onEditServiceHandler(service) {
    updateProfile(service);
    navigate(`/profile`);
  }

  return (<><FormUpdateProfile edit={onEditServiceHandler} /></>)
}

export default EditProfile;
