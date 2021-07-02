const url = `https://striveschool-api.herokuapp.com/api/movies/`;

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

window.onload = async () => {
  // const data = await getData(url);
  // subMitData();
  submitData();
};

const submitData = async () => {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const subtObject = {
      name: document.getElementById('name').value,
      description: document.getElementById('description').value,
      category: document.getElementById('category').value,
      imageUrl: document.getElementById('imageUrl').value,
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(subtObject),
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWZkZWIzNTgxNzAwMTVjMjI3MDkiLCJpYXQiOjE2MjUyMTEwOTEsImV4cCI6MTYyNjQyMDY5MX0.VZNTSW2hSDU7qvG3bE4F-4_h7UfBioSpmz5Wl1imD-4',
        },
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  });
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
