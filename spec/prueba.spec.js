/*
- Repository debería ser una Clase
- Debería ser una instancia de la Clase Repository
- Debería tener un Método llamado createActivity para agregar un elemento a la lista.
- Debería tener un Método llamado deleteActivity para eliminar un elemento de la lista.
- Debería tener un Método llamado getAllActivities para mostrar todos los elementos de la lista.
- El Método createActivity debería poder agregar un elemento a la lista.
- El Método deleteActivity debería eliminar un elemento de la lista.
- El Método getAllActivities debería poder mostrar todos los elementos de la lista.
*/

const { Repository, Activity } = require("../scripts/models");

xdescribe("demo", function () {
  it("Este test debe pasar siempre", function () {
    expect(4 + 2).toBe(6);
  });
});

let repository

describe('Clase Repository', () => {
  beforeEach(() => {
    repository = new Repository
    const expectedActivity = {
      title: "Hacer Yoga",
      description: "Entrenamiento de Mente y Cuerpo",
      imgUrl:
        "https://img.remediosdigitales.com/a6d207/amigos-tiro-completo-pintando-juntos/450_1000.jpeg",
    };
  })

  it('Repository debería ser una Clase', () => {
    expect(typeof Repository.prototype.constructor).toBe('function')
  })

  it('Debería ser una instancia de la clase Repository', () => {
    expect(repository instanceof Repository).toBe(true)
  })

  it('Debería tener un Método llamado createActivity para agregar un elemento a la lista', () => {
    expect(typeof repository.createActivity).toBe('function')
  })

  it("Debería tener un Método llamado deleteActivity para eliminar un elemento de la lista", () => {
    expect(typeof repository.deleteActivity).toBe('function')
  });

  it("Debería tener un Método llamado getAllActivities para mostrar todos los elementos de la lista", () => {
    expect(typeof repository.getAllActivities).toBe('function')
  });

  it("El Método createActivity debería poder agregar un elemento a la lista", () => {
    repository.createActivity(
      expectedActivity.title,
      expectedActivity.description,
      expectedActivity.imgUrl
    );

    const newActivity = new Activity(id = 1, expectedActivity.title, expectedActivity.description, expectedActivity.imgUrl)

    expect(repository.getAllActivities()).toEqual([newActivity])
  });

  it("El Método deleteActivity debería eliminar un elemento de la lista", () => {

  });

  it("El Método getAllActivities debería poder mostrar todos los elementos de la lista", () => {
    
  });

})