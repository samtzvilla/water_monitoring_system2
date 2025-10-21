class DSDispositivos {

  async getListaFromAPI() {
    const res = await fetch('http://localhost:8080/devices');
    return await res.json();
  }
  
  async setDevicetoAPI(event) {
    // Se preparan los datos para hacer el fetch, se desestructura el objeto para obtener los parámetros de la query
    const datos = 
    {
      id:undefined, // Se desconoce, la db lo pone, en getListaFromAPI ya aparecerá
      nombre: event.nombre,
      ubicacion: event.ubicacion,
      coordenadas: event.coordenadas,
      potencia:{nominal: event.potencia.nominal, minimo: event.potencia.minimo, maximo: event.potencia.maximo, um: event.potencia.um},
      voltaje: {nominal: event.voltaje.nominal, minimo: event.voltaje.minimo, maximo: event.voltaje.maximo, um: event.voltaje.um},
      intensidad: {nominal: event.intensidad.nominal, minimo: event.intensidad.minimo, maximo: event.intensidad.maximo, um: event.intensidad.um},
      flujo: {nominal: event.flujo.nominal, minimo: event.flujo.minimo, maximo: event.flujo.maximo, um: event.flujo.um},
      presion: {nominal: event.presion.nominal, minimo: event.presion.minimo, maximo: event.presion.maximo, um: event.presion.um},
      temp: {nominal: event.temp.nominal, minimo: event.temp.minimo, maximo: event.temp.maximo, um: event.temp.um},
      humedad: {nominal: event.humedad.nominal, minimo: event.humedad.minimo, maximo: event.humedad.maximo, um: event.humedad.um},
      fecha_registro:null
    };

    console.log(datos);
    
    const res = await fetch('http://localhost:8080/addDevice', 
    {
      method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(datos) // Ocupa que el back sepa manejar los jsons (express.json())
    });
    return await res.json();  // SE devuelve el nuevo componente
  }
}

export default new DSDispositivos()