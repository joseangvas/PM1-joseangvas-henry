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

module.exports = {
  Repository,
  Activity,
};