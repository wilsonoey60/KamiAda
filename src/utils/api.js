function getAccessToken() {
  return localStorage.getItem('accessToken')
}

function putAccessToken(accessToken) {
  return localStorage.setItem('accessToken', accessToken);
}

async function fetchWithToken(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`
    }
  });
}

async function login({ emailuser, passworduser }) {
  const response = await fetch(`${process.env.REACT_APP_LOGIN}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ emailuser, passworduser }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function register({ username, emailuser, passworduser, avataruser, roleuser, statususer }) {
  const response = await fetch(`${process.env.REACT_APP_REGISTER}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, emailuser, passworduser, avataruser, roleuser, statususer }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false };
}

async function getUserLogged() {
  const response = await fetchWithToken(`${process.env.REACT_APP_GET_USER_WITH_AUTH}`);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function addContact({ nameservice, descriptionservice }) {
  const response = await fetchWithToken(`${process.env.REACT_APP_ADD_SERVICE}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nameservice, descriptionservice }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false };
}

async function getContacts() {
  const response = await fetchWithToken(`${process.env.REACT_APP_DASHBOARD}`);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { error: true, data: [] };
  }

  return { error: false, data: responseJson.data };
}

async function getServicebyID(idservice) {
  const response = await fetchWithToken(`${process.env.REACT_APP_GET_DETAIL_SERVICE}/${idservice}`);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { error: true, data: [] };
  }

  return { error: false, data: responseJson.data };
}

async function editservice( idservice, { nameservice, descriptionservice }) {
  console.log(idservice, nameservice, descriptionservice);
  const response = await fetchWithToken(`${process.env.REACT_APP_EDIT_SERVICE}/${idservice}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nameservice, descriptionservice }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false };
}

async function deleteContact(idservice) {
  const response = await fetchWithToken(`${process.env.REACT_APP_DELETE_SERVICE}/${idservice}`, {
    method: 'DELETE',
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false };
}

export { 
  getAccessToken,
  putAccessToken,
  login,
  register,
  getUserLogged,
  addContact,
  getContacts,
  getServicebyID,
  editservice,
  deleteContact 
}
