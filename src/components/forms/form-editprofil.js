import React from 'react';
import { Helmet } from 'react-helmet';
import HeaderwithAuth from '../header/headerwith-auth';
import PrimaryButton from '../button/primary-button';
import Footer from '../footer/footer';
import './form-editprofil.css';
import Inputs from '../inputs/inputs';
import useInput from '../../hooks/useInput';

function FormUpdateProfile({ edit }) {
	const [avataruser, onAvataruserChange] = useInput('');
  const [username, onUsernameChange] = useInput('');
  const [completename, onCompletenameChange] = useInput('');

	const onSubmitHandler = (event) => {
    event.preventDefault();
    edit({
			avataruser: avataruser,
      username: username,
      completename: completename,
    });
  };

  return (
    <form className="edit-profile-container" onSubmit={onSubmitHandler}>
      <Helmet>
        <title>EditProfile - KamiAda</title>
        <meta property="og:title" content="EditProfile - KamiAda" />
      </Helmet>
      <div className="edit-profile-fixed-header">
        <HeaderwithAuth rootClassName="headerwith-auth-root-class-name8" />
      </div>
      <div className="edit-profile-form">
        <h1 className="edit-profile-text">Apakah anda ingin mengubah profil?</h1>
        <span className="edit-profile-text1 TextXL">Silakan ubah melalui form ini</span>
        <Inputs
          objectinput="Gambar (URL)"
          type="text"
          placeholder="Contoh : https://d17ivq9b7rppb3.cloudfront.net/small/avatar/pp.jpg"
          value={avataruser}
          onChange={onAvataruserChange}
        />
        <Inputs
          objectinput="Username"
          type="text"
          placeholder="Contoh : tester123"
          value={username}
          onChange={onUsernameChange}
        />
        <Inputs
          objectinput="Nama Lengkap"
          type="text"
          placeholder="Contoh : Notus Sample"
          value={completename}
          onChange={onCompletenameChange}
        />
        <div className="edit-profile-container1">
          <PrimaryButton rootClassName="primary-button-root-class-name14" button="Simpan" />
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name2"></Footer>
    </form>
  )
}

export default FormUpdateProfile;
