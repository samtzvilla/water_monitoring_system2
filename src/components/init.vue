<template>
  <div id="frame" class="container-fluid">
    <!-- Barra de navegación -->
    <navbar></navbar>

    <!-- Información -->
    <div class="row mt-3">
      <h1>Lista de sistemas activos</h1>
    </div>

    <!--AQUÍ SE LISTA EL ARREGLO DE DISPOSITIVOS, se muestra la plantilla del dispositivo -->
    <!--Con los : de le pasa el arreglo de dispositivos (this.devices) al componente device
       y se vincula con la propiedad  device del componente device
      <devices v-for="dispositivo in this.dispositivos" :device="dispositivo"> -->
    <!--Los hijos reciben datos del padre, los hijos hacen llamadas al padre para que procese datos-->
    <!--@call_children vincula la llamada del hijo con un métoro del padre, se listan todas las posibles llamadas del hijo (emit)-->
    <devices :devices="dispositivos" @refresh="refresh" @start="start" @stop="stop"> </devices>


    <!--Se pasa la lista de dispositivos a los componentes hijos para que puedan consultarlos
    addSystem es la función que pidió el hijo, $event es el dispositivo que mandó el hijo-->
    <br>
    <!--<modalRegister :devices="dispositivos" @addSystem="dispositivos.push($event)"></modalRegister>-->
    <modalRegister :devices="dispositivos" @addSystem="addSystem($event)"></modalRegister>
    <br>
  </div>
</template>

<script>
// Se importa el componente (etiqueta coustomizada) que utiliza el componente actual, se añade en components
import devices from './list_devices.vue'
import modalRegister from './modalRegister.vue'
import navbar from "./navbar.vue"
import DSDispositivos from '../services/DSDispositivos'

export default {
  name: "init",
  data: function () {
    return {
      nIntervId: null,
      dispositivos: []
    }
  },
  components: {
    devices,
    modalRegister,
    navbar
  },
  // Las propiedades computed, son atributos que son productos del resultados de una operación o consulta (reactivos), cambiantes
  computed: {
    dispositivosX() {  //<< Es una propiedad como this.dispositivos
      return this.$store.state.dispositivos
    }
  },
  methods:
  {
    refresh() {
      this.dispositivos.forEach((dispositivo, index) => {
        let desviacion = 0.05
        let voltaje = dispositivo.voltaje.minimo +
          (((dispositivo.voltaje.maximo - dispositivo.voltaje.minimo) +
            (dispositivo.voltaje.nominal * desviacion)) * Math.random())
        let corriente = dispositivo.intensidad.minimo +
          (((dispositivo.intensidad.maximo - dispositivo.intensidad.minimo) +
            (dispositivo.intensidad.nominal * desviacion)) * Math.random())
        let caudal = dispositivo.flujo.nominal +
          (((dispositivo.flujo.maximo - dispositivo.flujo.nominal) +
            (dispositivo.flujo.nominal * 0.10)) * Math.random())
            // Se agrgan los cambios al voltaje nominal para postrarlos
        this.dispositivos[index].voltaje.nominal = voltaje;
        this.dispositivos[index].intensidad.nominal = corriente;
        this.dispositivos[index].flujo.nominal = caudal;
      })
    },
    start() {
      if (!this.nIntervId) {
        this.nIntervId = setInterval(() => { this.refresh() }, 1000);
      }
    },
    stop() {
      clearInterval(this.nIntervId);
      this.nIntervId = null;
    },
    async addSystem(event)
    {
      const nuevoDispositivo = await DSDispositivos.setDevicetoAPI(event); // No se hace nada con el resultset
      /* Se vuelve a cargar la lista de dispositivos y se recarga la página
      DSDispositivos.getListaFromAPI().then(data => {
      this.dispositivos = data;
      this.$router.push("/init");// router no recarga la página si ya estas ahí*/
      //this.dispositivos.push(nuevoDispositivo)
     this.dispositivos = [...this.dispositivos, nuevoDispositivo];
    }
  // Función que se ejecuta automáticamente al crearse el componente, es un hook(gancho) que se ejecuta antes del codigo del componente
  // PAra modificar su estado (traer los dispositivos antes). Cuando recibe el arreglo de dispositivos desde el back, hace un commit al dataStore del front
  // (vuex), usando la mutación (método que modifica a la clase), y guarda el resultado en la propiedad dispositivos
  },
  created() {
    // El método fetListaFromAPI regresa una promesa, con then se especifica una función para ejecutar una vez se cumpla la promesa (lleguen los datos de la DB)
    DSDispositivos.getListaFromAPI().then(data => {
      //console.log('Dispositivos recibidos:', data)
      //this.$store.commit('setDispositivos', data)
      //console.log(data);
      this.dispositivos = data;
    })
  }

}
</script>

<style>
#frame {

  height: max-content;
}
</style>