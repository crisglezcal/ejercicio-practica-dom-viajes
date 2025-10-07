// AÑADIR H2

const recomendados = document.getElementById("recomendados");
const subtitulo1 = document.createElement("h2");
subtitulo1.textContent = "Recomendados";
recomendados.appendChild(subtitulo1);

// AÑADIR DESTINOS RECOMENDADOS

// Array de destinos:

const destinos = [
  {
    title: "Viaje 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut fermentum justo. Duis euismod massa non augue euismod ultricies. Sed lobortis dignissim lorem, pharetra.",
    url_img: "./viajes/viajes-1.jpg" 
  },
  {
    title: "Viaje 2",
    description: "Mauris felis libero, suscipit sed pretium fermentum, aliquet a mauris. Nam justo mi, ultricies nec sem id, efficitur convallis arcu. Praesent suscipit augue nec velit egestas.",
    url_img: "./viajes/viajes-2.jpg"
  },
  {
    title: "Viaje 3",
    description: "Phasellus dignissim turpis id hendrerit mollis. Nulla laculis tempor vehicula. Quisque lectus purus, auctor at ultrices ac, laoreet in metus. Sed dui odio.",
    url_img: "./viajes/viajes-3.jpg"
  }
];

// Añadir destinos: 
const seccionDestinos = document.getElementById("destinos");
    // Para cada destino...
destinos.forEach(destino => {
    // Crea el contenedor div para el destino completo
  const destinoContenedor = document.createElement("div");
    // Título del destino en h3 al que le añade su correspondiente título del array y metido en el contenedor
  const tituloDestino = document.createElement("h3");
  tituloDestino.textContent = destino.title;
  destinoContenedor.appendChild(tituloDestino);
    // Mete cada imagen del array dentro del div que se ha creado
  const imagen = document.createElement("img");
  imagen.src = destino.url_img; 
  destinoContenedor.appendChild(imagen);
    // Mete cada descripción del array en el contenedor creado en los <p></p>
  const descripcion = document.createElement("p");
  descripcion.textContent = destino.description;
  destinoContenedor.appendChild(descripcion);
    // Junta toda la información completa del destino 
  seccionDestinos.appendChild(destinoContenedor); 
});


// AÑADIR H2

const destinosTitulo = document.getElementById("destinos");
const subtitulo2 = document.createElement("h2");
subtitulo2.textContent = "Destinos";
destinosTitulo.appendChild(subtitulo2);

// AÑADIR DESPLEGABLE DESTINOS

// Array de destomps
const destinos2 = [
    "Madrid",
    "Barcelona",
    "Valencia", 
    "Seville",
    "Bilbao",
    "Granada",
    "Malaga",
    "Palma de Mallorca",
    "Alicante",
    "Zaragoza"
];

// Crea el elemento select
const select = document.createElement("select");
select.name = "destinos";

// Añade "Burgos" como la opción visible
const opcionDefault = document.createElement("option");
opcionDefault.value = "burgos";
opcionDefault.textContent = "Burgos";
select.appendChild(opcionDefault);

// Añade el resto de ciudades
destinos2.forEach(ciudad => { // Para cada ciudad de la lista...
    const option = document.createElement("option"); // Crea una opción nueva
    option.value = ciudad.toLowerCase();
    option.textContent = ciudad; // Le pone el nombre de la ciudad
    select.appendChild(option); // Lo mete en la caja desplegable
});

// Añade el select al DOM para poner la caja desplegable en la pantalla
document.getElementById("destinos").appendChild(select);