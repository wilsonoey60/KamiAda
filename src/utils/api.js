const BASE_URL = 'https://wilsonoey.helioho.st';

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
  const response = await fetch(`${BASE_URL}/pearson/login`, {
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
  const response = await fetch(`${BASE_URL}/pearson/register`, {
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
  const response = await fetchWithToken(`${BASE_URL}/user/profile`);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function addContact({ nameservice, descriptionservice }) {
  const response = await fetchWithToken(`${BASE_URL}/pearson/service/add`, {
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
  const response = await fetchWithToken(`${BASE_URL}/dashboard`);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { error: true, data: [] };
  }

  return { error: false, data: responseJson.data };
}

async function editservice({ idservice, nameservice, descriptionservice }) {
  const response = await fetchWithToken(`${BASE_URL}/pearson/service/${idservice}`, {
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
  const response = await fetchWithToken(`${BASE_URL}/pearson/service/${idservice}`, {
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
  deleteContact 
}

// async function dashboarduser(request, h) {
//   try {
//     // const verify = request.state.refreshToken;
//     // const verificator = TokenManager.verifyRefreshToken(verify);
//     const verificator = request.auth.credentials;
//     const selectuser = 'SELECT userskad.username, userskad.avataruser, serviceskad.* FROM userskad';
//     const query = `${selectuser} LEFT JOIN serviceskad ON userskad.iduser = serviceskad.iduser WHERE userskad.iduser = ?`;
//     return new Promise((resolve, reject) => {
//       connection.query(query, verificator.iduser, (error, results) => error ? reject(error) : () => {
//         if (results.length > 0) {
//           resolve(h.response(successwithdataANDcount(
//             results.length, 'Dashboard berhasil ditampilkan', results
//           )).code(200));
//         } else {
//           resolve(h.response(notfound('Dashboard tidak ditemukan')).code(404));
//         }
//       });
//     });
//   } catch (error) {
//     const { stack } = error;
//     return h.response(servererror(stack));
//   }
// }