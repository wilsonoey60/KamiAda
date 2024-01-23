import React, { useEffect, useState } from 'react'
import DetailMyService from '../components/details/detailmyservice'
import { getServicebyID } from '../utils/api';
import { useNavigate, useParams } from 'react-router-dom';

function DetailServicewithAuth() {
  const navigate = useNavigate();
  const { idservice } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    getServicebyID(idservice).then(({ data }) => {
      setService(data);
    });
    
    const token = localStorage.getItem('accessToken');
    if (token === null) {
      navigate('/login');
    }
  }, [idservice]);

  return (<DetailMyService {...service}/>)
}

export default DetailServicewithAuth
