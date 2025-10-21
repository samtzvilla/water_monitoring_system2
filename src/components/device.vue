<template>
  <div>
    <div class="card border-dark mb-3">
      <div id ="tarjeta" class="card-header bg-secondary border-dark text-light">{{ device.name }}</div>
      <div class="card-body text-primary">
        <p class="card-text">Id:{{ device.id }}<br>Nombre: {{ device.nombre }}<br>Ubicación: {{ device.ubicacion }}<br>Coordenadas: {{ device.coordenadas }}</p> 
        <p class="card-text">Voltaje = {{ device.voltaje.nominal }} <br>Corriente = {{device.intensidad.nominal }} <br> Caudal = {{ device.flujo.nominal }}</p>
      </div>
      <div class="card-footer bg-transparent border-dark text-center">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#infoDevice" @click="sendDevice" >Ver detalles</button>
      </div>
    </div>
  </div>
</template>

<script>
//import infoDevice from './infoDevice.vue';S
export default
  {
    name: "device",
    // ¿Que diferencia tienen las pops del las propiedades definidas del objeto definidos en el data?
    data: function (){
      return {
      }
    },
    props:
    {
      device:
      {
        type: Object,    // <!--Con los : de le pasa -->¿Para qué definimos estas 2 propiedades?
        require: true
      }
    },
    methods:{ 
      // Le manda al padre el dispositivo para que imprima el modal corresponiende
      sendDevice()
      {
         // Solicita que list_devices ejecute el setDispositivo y le pasa el dispositivo que está imprimiendo actualmente
        this.$emit('setDispositivo', this.device)
      }
    },
  }
</script>


<style>
#tarjeta
{
  min-width: 200px;
}
</style>
