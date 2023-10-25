import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DetailItem from '../components/DetailItem';
import { getServicebyID } from '../utils/api';

function DetailPage() {
  const { idservice } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
   
    React.useEffect(() => {
      getServicebyID(idservice).then(({ data }) => {
        setService(data);
      });
    }, [idservice]);
 
    return (
      <DetailItem {...service}/>
    );
  }
   
  export default DetailPage;