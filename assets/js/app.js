const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
// Se declaran correctamente las constantes que hacen referencias a las etiquetas HTML mediante su etiqueta y clase
const n = document.querySelector('p.name');
const b = document.querySelector('p.blog');
const l = document.querySelector('p.location');

// Dado que se maneja con 'await', la función se declara asíncrona
async function displayUser(username) {
  n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  // Se declara una constante para recibir los datos de la API
  const data = await response.json();
  console.log(data);

  // Se añade if para mostrar la información del usuario si es que se encuentra, por lado contrario, se muestra un mensaje de no encontrado
  if(data.status == 404) {
    n.textContent = `No se encontró al usuario '${username}'.`;
  } else {
    n.textContent = `Name: ${data.name}`;
    b.textContent = `URL blog: ${data.blog}`;
    l.textContent = `Location: ${data.location}`;
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);