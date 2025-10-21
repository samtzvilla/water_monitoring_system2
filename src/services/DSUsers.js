class DSUsers {
  listUsers() {
    return [
        {
          user: "uno",
          email: "",
          password: "unomasuno",
        }
      ]
  }
  /*
  Estos metodos implementan una capa de abstraccion entre el almacen de datos y la UI
  Sella a la data store local o a la API Rest.
  */
  // Data Store local, método que llama a otro que regresa el arreglo de usuarios
  sendUsers() {
    return Promise.resolve(this.listUsers());
  }

}

export default new DSUsers()