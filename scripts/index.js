// Definición de la clase Activity
class Activity {
  constructor(id, title, description, imgUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }
}

// Definición de la clase Repository
class Repository {
  constructor() {
    this.activities = [];
    this.id = 0;
  }

  // Método para obtener todas las actividades del repositorio
  getAllActivities() {
    return this.activities;
  }

  // Método para crear una nueva actividad y agregarla al repositorio
  createActivity(title, description, imgUrl) {
    this.id++;
    const activity = new Activity(this.id, title, description, imgUrl);
    this.activities.push(activity);
  }

  // Método para eliminar una actividad del repositorio por su nombre
  deleteActivity(id) {
    this.activities = this.activities.filter((activity) => activity.id !== id);
  }
}

// Crear una instancia de la clase Repository
const repository = new Repository();

// Seleccionar los elementos del formulario y el botón de agregar
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const img_url = document.querySelector("#img_url");
const add_activity = document.querySelector("#add_activity");

// Evento al cargar el contenido del DOM
document.addEventListener("DOMContentLoaded", function () {
  // Iniciar el mensaje "No hay actividades" al cargar la página
  const noActivitiesMessage = document.querySelector(".msgAct");
  noActivitiesMessage.style.display = "block";

  // Evento al hacer clic en el botón de agregar actividad
  add_activity.addEventListener("click", function (event) {
    event.preventDefault();

    // Validar que los tres campos estén llenos
    if (!title.value || !description.value || !img_url.value) {
      alert("Por favor, complete todos los campos antes de enviarlos");
      return;
    }

    // Agregar la actividad al repositorio
    repository.createActivity(title.value, description.value, img_url.value);

    // Limpiar los campos del formulario
    title.value = "";
    img_url.value = "";
    description.value = "";
    // Tambien puede ser form.reset()

    // Verificar actividades después de agregar la tarjeta
    renderActivities();
  });

  // Función para convertir una instancia de Activity en un elemento HTML como tarjeta
  function activityToHtml(activity) {
    // Crear elementos para la nueva tarjeta
    const cardActivityTitle = document.createElement("h3");
    const cardDescription = document.createElement("p");
    const cardImgUrl = document.createElement("img");
    const card = document.createElement("div");
    card.className = "card";

    // destructurar el objeto de la clase Activity instanciada
    const { id, title, description, imgUrl } = activity;

    // Asignar valores a los elementos de la tarjeta
    cardActivityTitle.innerText = title;
    cardDescription.innerText = description;
    cardImgUrl.src = imgUrl;

    // Agregar elementos a la tarjeta
    card.appendChild(cardActivityTitle);
    card.appendChild(cardImgUrl);
    card.appendChild(cardDescription);

    // Agregar evento de clic en la card para borrar la tarjeta
    card.addEventListener("click", function () {
      // Eliminar la actividad del repositorio
      repository.deleteActivity(id);

      // Verificar actividades después de borrar la tarjeta
      renderActivities();
    });

    return card;
  }

  // Función para renderizar todas las actividades en el contenedor de HTML
  function renderActivities() {
    const cardContainer = document.querySelector(".card-container");

    // Vaciar el contenido actual del contenedor
    cardContainer.innerHTML = "";

    // Obtener el listado completo de actividades mediante el método correspondiente de una instancia de Repository
    const activities = repository.getAllActivities();

    // Mapear el listado de actividades para convertirlos todos en elementos HTML
    const activityElements = activities.map(activityToHtml);

    // Append a todos los elementos HTML del nuevo array dentro del contenedor seleccionado
    activityElements.forEach((element) => {
      cardContainer.appendChild(element);
    });

    // Mostrar el mensaje solo si no hay tarjetas
    mostrarMsg = cardContainer.length === 0 ? "block" : "none";
    noActivitiesMessage.style.display = mostrarMsg;
  }
});
