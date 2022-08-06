const URL = "https://marvel-jza8ekvv9-pedroleni.vercel.app/api/v1/film/";

const URL2 ="https://marvel-jza8ekvv9-pedroleni.vercel.app/api/v1/actor/"

const container = document.querySelector("#container");
const containerDos = document.querySelector("#containerDos");



//De manera global tengo una lista donde almacenar las peliculas fuera de cualquier función
let filmList;

let actorList;
//---------------------------------------------

const get = async () => {
  const raw = await fetch(URL);
  const json = await raw.json();
  const film =  json.data.film;
 
  mapFilm(film);
};

const get2 = async () => {
    const raw = await fetch(URL2);
    const json = await raw.json();

    const actor =  json.data.actors;
    console.log(actor)
 
    mapActor(actor);
  };

const mapFilm = (films) => {
  
  const mappedFilm = films.map((film) => ({
    img: film.images ,
    name: film.name,
    fase: film.fase,
    date: film.date,
    description: film.description,
    actors: film.actors.name
    
  }));
  filmList = mappedFilm;
  generateHTMLFilm(filmList);
};

const mapActor = (actores) => {
  
    const mappedActor = actores.map((actor) => ({
      img: actor.images[0] ,
      name: actor.name,
      gender: actor.gender,
      origin: actor.origin,
      age: actor.age,
      character: actor.character
     
    }));
    actorList = mappedActor;
    generateHTMLActor(actorList);
  };

const generateHTMLFilm = (mappedList) => {
  for (const item of mappedList) {
    const figure = `
    <figure class="figure">
    <div class="image"><img src="${item.img}"/></div>
    <h1 class="titulo">${item.name}</h1>
    <p><spam>Fase: </spam>${item.fase}</p>
    <p><spam>Date: </spam>${item.date}</p>
    <p class="description">${item.description}</p>

    
  
    
    </figure>

    `;
    paint(figure);
  }
};
const generateHTMLActor = (mappedList) => {
    for (const item of mappedList) {
      const figure = `
      <figure class="figureActor">
      <div class="imageActor"><img src="${item.img}"/></div>
      <div class="texto">
        <h1 class="titulo">${item.name}</h1>
        <p class="description"><spam>Character: </spam> ${item.character}</p>
        <p><spam>Age: </spam> ${item.age} </p>
        <p><spam>Origin: </spam>${item.origin}</p>
      
      </div>
      </figure>
      `;
      paint(figure);
    }
  };
  

const paint = (figure) => {
  container.innerHTML += figure;
};



const starActor = () => {
  container.innerHTML = "";
  get2()



}

const starFilm = () => {
  container.innerHTML = "";
  get()
  
}





