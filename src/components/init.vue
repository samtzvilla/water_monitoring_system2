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
    <modalRegister :devices="dispositivos" @addSystem ="dispositivos.push($event)"></modalRegister>
  </div>
</template>

<script>
// Se importa el componente (etiqueta coustomizada) que utiliza el componente actual, se añade en components
import devices from './list_devices.vue'
import modalRegister from './modalRegister.vue'
import navbar from "./navbar.vue"
export default {
    name: "init",
    data: function () {
      return {
        dispositivos: [
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
        ],
        nIntervId:null
      }
    },
    components: {
      devices,
      modalRegister,
      navbar
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
            }
    }
  }
</script>

<style>
#frame {
  background-color: cornflowerblue;
  height: max-content;
}
</style>