const url = `https://striveschool-api.herokuapp.com/api/movies/`;
const key =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWZkZWIzNTgxNzAwMTVjMjI3MDkiLCJpYXQiOjE2MjUyMTEwOTEsImV4cCI6MTYyNjQyMDY5MX0.VZNTSW2hSDU7qvG3bE4F-4_h7UfBioSpmz5Wl1imD-4';
const form = document.querySelector('.form');

console.log(form);
// const getData = async function (url) {
//   const response = await fetch(url, {
//     method: 'POST',
//     headers: {
//       Authorization:
//         'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWZkZWIzNTgxNzAwMTVjMjI3MDkiLCJpYXQiOjE2MjUyMTEwOTEsImV4cCI6MTYyNjQyMDY5MX0.VZNTSW2hSDU7qvG3bE4F-4_h7UfBioSpmz5Wl1imD-4',
//     },
//   });

//   const data = await response.json();

//   return data;
// };

const submitData = async () => {
  form.addEventListener('submit', async e => {
    e.preventDefault();

    const subtObject = {
      name: document.getElementById('name').value,
      description: document.getElementById('description').value,
      category: document.getElementById('category').value,
      imageUrl: document.getElementById('imageUrl').value,
    };

    console.log(subtObject);
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(subtObject),
        headers: {
          'Content-Type': 'application/json',
          Authorization: key,
        },
      });
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  });
};

const entPoint = new URLSearchParams(window.location.search).get('movie');

const upgradeMovies = async () => {
  const response = await fetch(url + entPoint, {
    method: 'PUT',
    headers: {
      authorization: key,
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  name: document.getElementById('name').value = data.name;
  description: document.getElementById('description').value = data.description;
  category: document.getElementById('category').value = data.category;
  imageUrl: document.getElementById('imageUrl').value = data.imageUrl;

  if (entPoint) {
    document.querySelector('.btn-color').innerHTML = ' Upgrade';
    document.querySelector('.delete').classList.remove('d-none');
  }
};

// const btnDelele = document.querySelector('delete');
// btnDelele.classList.remove('d-none');

const deleteMovie = async () => {
  const response = await fetch(url + entPoint, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: key,
    },
  });

  const confirmed = confirm('Are you sure that you want to delete the movie');
  if (confirmed) {
    showAlert();
  }
};

window.onload = async () => {
  // const data = await getData(url);
  // subMitData();
  submitData();

  upgradeMovies();
  // deleteMovie();
};

const showAlert = mes => {
  const form = document.querySelector('form');
  const hmtl = `
  <div class="alert alert-danger" role="alert">
  A simple danger alert—check it out!
  </div>
  
  `;

  form.appendChild(hmtl);
};

// const subMitData = async event => {
//   event.preventDefault();

//   const subtObject = {
//     name: document.getElementById('name').value,
//     description: document.getElementById('description').value,
//     category: document.getElementById('category').value,
//     imageUrl: document.getElementById('imageUrl').value,
//   };

//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       body: JSON.stringify(subtObject),
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization:
//           'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWZkZWIzNTgxNzAwMTVjMjI3MDkiLCJpYXQiOjE2MjUyMTEwOTEsImV4cCI6MTYyNjQyMDY5MX0.VZNTSW2hSDU7qvG3bE4F-4_h7UfBioSpmz5Wl1imD-4',
//       },
//     });

//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// };
