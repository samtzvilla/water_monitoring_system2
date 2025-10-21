class DSDispositivos {
  getListaDataStore() {
    return [
        {
          id: 1,
          name: "Bomba de Zitácuaro",
          location: "Zitácuaro",
          status:"On",
          v_min: 20,
          v_max: 124,
          v_nom: 130,
          i_min: 5,
          i_max: 50,
          i_nom: 30,
          q_min: 20,
          q_max: 120,
          q_nom: 60,
          opera: {
            voltaje:0,
            corriente:0,
            caudal:0,
            status:0
          }
        },
        {
          id: 2,
          name: "Bomba de Morelia",
          location: "Morelia",
          status:"On",
          v_min: 15,
          v_max: 150,
          v_nom: 130,
          i_min: 5,
          i_max: 30,
          i_nom: 30,
          q_min: 30,
          q_max: 140,
          q_nom: 60,
          opera: {
            voltaje:0,
            corriente:0,
            caudal:0,
            status:0
          }
        },
        {
          id: 3,
          name: "Bomba de Zacapu",
          location: "Zacapu",
          status:"On",
          v_min: 30,
          v_max: 140,
          v_nom: 130,
          i_min: 18,
          i_max: 40,
          i_nom: 30,
          q_min: 20,
          q_max: 100,
          q_nom: 60,
          opera: {
            voltaje:0,
            corriente:0,
            caudal:0,
            status:0
          }
        },
        {
          id: 4,
          name: "Bomba de Uruapan",
          location: "Uruapan",
          status:"On",
          v_min: 20,
          v_max: 124,
          v_nom: 130,
          i_min: 5,
          i_max: 50,
          i_nom: 30,
          q_min: 20,
          q_max: 120,
          q_nom: 60,
          opera: {
            voltaje:0,
            corriente:0,
            caudal:0,
            status:0
          }
        },
      ]
  }
  /*
  Estos metodos implementan una capa de abstraccion entre el almacen de datos y la UI
  Sella a la data store local o a la API Rest.
  */
  // Data Store local 
  getLista() {
    return Promise.resolve(this.getListaDataStore());
  }

}

export default new DSDispositivos()