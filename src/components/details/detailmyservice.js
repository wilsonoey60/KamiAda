import React from 'react'

import { Helmet } from 'react-helmet'
import PrimaryButton from '../button/primary-button'
import Footer from '../footer/footer'
import './detailmyservice.css'
import { Link, useNavigate } from 'react-router-dom'
import HeaderwithAuth from '../header/headerwith-auth'
import { confirmAlert } from 'react-confirm-alert'
import { deleteService } from '../../utils/api'
import { showFormattedDateTime } from '../../utils/date'

function DetailMyService({
	idservice,
	nameservice,
	avatarservice,
	descriptionservice,
	categoryservice,
	areaservice,
	contactservice,
	createdatservice,
	updatedatservice,
}) {
  const navigate = useNavigate();
  const handleDelete = () => {
    confirmAlert({
      title: 'Konfirmasi',
      message: 'Apakah Anda yakin ingin menghapus layanan jasa ini?',
      buttons: [
        {
          label: 'Ya',
          onClick: async() => {
            // Add your delete logic here
            const { error } = await deleteService(idservice);
            if (!error) {
              navigate('/dashboard');
            }
          },
        },
        {
          label: 'Tidak',
          onClick: () => {},
        },
      ],
    });
  };

  return (
    <div className="detail-servicewith-auth-container">
      <Helmet>
        <title>{`${nameservice}`} - KamiAda</title>
        <meta property="og:title" content="DetailServicewithAuth - KamiAda" />
      </Helmet>
      <div className="detail-servicewith-auth-fixed-header">
        <HeaderwithAuth rootClassName="header-root-class-name" />
      </div>
      <div className="detail-servicewith-auth-container1">
        <div className="detail-servicewith-auth-story">
          <span className="detail-servicewith-auth-text TextLG">
            <span>{showFormattedDateTime(createdatservice)}</span>
          </span>
          <span className="detail-servicewith-auth-text02 TextLG">{areaservice}</span>
          <span className="detail-servicewith-auth-text03 TextLG">{categoryservice}</span>
          <h3 className="detail-servicewith-auth-text04 Text2XL">
            {nameservice}
          </h3>
          <img
            alt="image"
            src={avatarservice}
            className="detail-servicewith-auth-image"
          />
          <span className="detail-servicewith-auth-text05 TextLG">
            <span className="detail-servicewith-auth-text06">{descriptionservice}</span>
            <br></br>
            <span></span>
            <br></br>
            <span className="detail-servicewith-auth-text09">{contactservice}</span>
            <br></br>
          </span>
					<Link to={`/myservice/update/${idservice}`}>
						<PrimaryButton
            	button="Edit"
            	rootClassName="primary-button-root-class-name2"
          	></PrimaryButton>
					</Link>
          <Link onClick={handleDelete}>
            <PrimaryButton
              button="Delete"
              rootClassName="primary-button-root-class-name4"
            ></PrimaryButton>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default DetailMyService