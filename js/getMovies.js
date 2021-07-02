const key =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWZkZWIzNTgxNzAwMTVjMjI3MDkiLCJpYXQiOjE2MjUyMTEwOTEsImV4cCI6MTYyNjQyMDY5MX0.VZNTSW2hSDU7qvG3bE4F-4_h7UfBioSpmz5Wl1imD-4';

const comodyMovies = document.querySelector('.movies-comedy');

const loveMovies = document.querySelector('.movies-love');

const entPoint = ['comedy', 'loveOne'];
console.log(entPoint);

const displayMovies = movies => {
  loveMovies.innerHTML = '';
  comodyMovies.innerHTML = '';
  // <p class="netflix">Netflix</p>
  movies.forEach(movie => {
    const html = `
    <a href="./backOffice.html?movie=${movie._id}">
    <div class=" episodes   col   px-1  ">
      <img class="mb-2   mb-md-2   mb-sm-0  img-fluid w-100" src="${movie.imageUrl}" alt="">
      <p class="p"> New Episodes </p>
    
    </div>
  </a>

    `;

    comodyMovies.insertAdjacentHTML('afterbegin', html);
    getMoviesLoveOne.insertAdjacentHTML('afterbegin', html);
  });
};

const displayMovieLove = movies => {
  loveMovies.innerHTML = '';

  // <p class="netflix">Netflix</p>
  movies.forEach(movie => {
    const html = `
    <a href="./backOffice.html?movie=${movie._id}">
    <div class=" episodes   col   px-1  ">
      <img class="mb-2   mb-md-2   mb-sm-0  img-fluid w-100" src="${movie.imageUrl}" alt="">
      <p class="p"> New Episodes </p>
    
    </div>
  </a>

    `;

    comodyMovies.insertAdjacentHTML('afterbegin', html);
    // getMoviesLoveOne.insertAdjacentHTML('afterbegin', html);
  });
};

const getMoviesComedy = async () => {
  const response = await fetch(
    ` https://striveschool-api.herokuapp.com/api/movies/comedy`,
    {
      method: 'GET',
      headers: {
        Authorization: key,
      },
    }
  );

  const data = await response.json();
  displayMovies(data);
  console.log(data);
};

const getMoviesLoveOne = async () => {
  const response = await fetch(
    ` https://striveschool-api.herokuapp.com/api/movies/loveOne`,
    {
      method: 'GET',
      headers: {
        Authorization: key,
      },
    }
  );

  const data = await response.json();
  displayMovies(data);
  console.log(data);
};

window.onload = async () => {
  getMoviesComedy();
  getMoviesLoveOne();
};
