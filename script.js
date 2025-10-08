// ============================================== AÑADIR DESTINOS RECOMENDADOS ==============================================

// ARRAY DE DESTINOS:

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

// AÑADIR DESTINOS RECOMENDADOS:

const tarjetas = document.getElementById("tarjetas");
    
destinos.forEach(destino => {
  const destinoContenedor = document.createElement("div");
  destinoContenedor.className = "tarjeta";

  // 1º Imagen
  const imagen = document.createElement("img");
  imagen.src = destino.url_img;
  destinoContenedor.appendChild(imagen);
    
  // 2º Título
  const tituloDestino = document.createElement("h3");
  tituloDestino.textContent = destino.title;
  destinoContenedor.appendChild(tituloDestino);
    
  // 3º Descripción
  const descripcion = document.createElement("p");
  descripcion.textContent = destino.description;
  destinoContenedor.appendChild(descripcion);
    
  tarjetas.appendChild(destinoContenedor);
});

// ============================================== AÑADIR DESPLEGABLE DESTINOS ==============================================

// ARRAY DE DESTINOS

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

// CREA EL ELEMENTO SELECT

const select = document.createElement("select");
select.name = "destinos";

// AÑADE "BURGOS" COMO LA OPCIÓN VISIBLE

const opcionDefault = document.createElement("option");
opcionDefault.value = "burgos";
opcionDefault.textContent = "Burgos";
select.appendChild(opcionDefault);

// AÑADE EL RESTO DE CIUDADES

destinos2.forEach(ciudad => { // Para cada ciudad de la lista...
    const option = document.createElement("option"); // Crea una opción nueva
    option.value = ciudad.toLowerCase();
    option.textContent = ciudad; // Le pone el nombre de la ciudad
    select.appendChild(option); // Lo mete en la caja desplegable
});


// AÑADE EL SELECT AL DOM PARA PONER LA CAJA DESPLEGABLE EN LA PANTALLA

document.getElementById("destinos").appendChild(select);