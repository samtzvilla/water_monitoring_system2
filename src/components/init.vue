<template>
  <div id="frame" class="container-fluid">
    <!-- Barra de navegación -->
    <navbar></navbar>

    <!-- Información -->
    <div class="row mt-3"> <h1>Lista de sistemas activos</h1> </div>

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
    <modalRegister :devices="dispositivos" @addSystem ="dispositivos.push($event)"></modalRegister>
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
        nIntervId:null
      }
    },
    components: {
      devices,
      modalRegister,
      navbar
    },
    computed: {
          dispositivos() {
            return this.$store.state.dispositivos
          }
    },
    methods:
    {
      refresh() {
                this.dispositivos.forEach((dispositivo, index) => {
                    let desviacion = 0.05
                    let voltaje = dispositivo.v_min +
                        (((dispositivo.v_max - dispositivo.v_min) +
                            (dispositivo.v_nom * desviacion)) * Math.random())
                    let corriente = dispositivo.i_min +
                        (((dispositivo.i_max - dispositivo.i_min) +
                            (dispositivo.i_nom * desviacion)) * Math.random())
                    let caudal = dispositivo.q_min +
                        (((dispositivo.q_max - dispositivo.q_min) +
                            (dispositivo.q_nom * 0.10)) * Math.random())
                    this.dispositivos[index].opera = {
                        voltaje: voltaje,
                        corriente: corriente,
                        caudal: caudal,
                        status: 1
                }})
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
    },
    // Función que se ejecuta automáticamente al crearse el componente
    created () {
          //this.$store.
          this.$store.commit('setDispositivos', DSDispositivos.getListaDataStore())
          //DSDispositivos.init()
          //this.Dispositivos = DSDispositivos.getListaDataStore()
            }
  }
</script>

<style>
#frame {

  height: max-content;
}
</style>