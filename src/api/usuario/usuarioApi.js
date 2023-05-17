const HOST = '10.10.165.15';
const PORT = '8000';
const URL = `http://${HOST}:${PORT}`;

export const postUsuario = async (usuario) => {
  const response = await fetch(`${URL}/usuarios`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(usuario),
  });

  const jsonData = response.json();
  console.log('jsonData', jsonData);

  return response.status;
};
