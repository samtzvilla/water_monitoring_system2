<template>
  <div>
    <div class="card border-success mb-3">
      <div class="card-header bg-transparent border-success">{{ device.name }}</div>
      <div class="card-body text-success">
        <p class="card-text">Id: {{ device.id }}<br>Nombre: {{ device.name }}<br>Ubicación: {{ device.location }}<br>Estado:{{ device.status }}</p>
        <p class="card-text">Voltaje mínimo = {{ device.v_min }} KV<br>Voltaje máximo = {{ device.v_max }} KV</p>
        <p class="card-text">Corriente mínima = {{ device.i_min }} A<br> Corriente máxima = {{ device.i_max }} A</p>
        <p class="card-text">Caudal mínimo = {{ device.i_min }} <br> Caudal máximo = {{ device.i_max }}</p>
        <p class="card-text">Voltaje = {{ device.opera.voltaje }} <br> Corriente = {{device.opera.corriente }}</p>
        <p class="card-text">Caudal = {{ device.opera.caudal }} <br> Estado = {{device.opera.status }}</p>
      </div>
      <div class="card-footer bg-transparent border-success">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" @click="getDevice" data-bs-target="#infoDevice">Ver detalles</button>
        <infoDevice :dispositivo_actual="this.current_device"></infoDevice>
      </div>
    </div>
  </div>
</template>

<script>
import infoDevice from './infoDevice.vue';
export default
  {
    name: "device",
    // ¿Que diferencia tienen las pops del las propiedades definidas del objeto definidos en el data?
    data: function (){
      return {
          current_device:{
            id:undefined,
            name: undefined,
            location: undefined,
            status:undefined,
            v_min: undefined,
            v_max: undefined,
            v_nom: undefined,
            i_min: undefined,
            i_max: undefined,
            i_nom: undefined,
            q_min: undefined,
            q_max: undefined,
            q_nom: undefined,
            opera: undefined
          }
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
      // Se realiza una copia de un dispositivo para mostrarlo en el modal.
      getDevice()
      {
        this.current_device.id = this.device.id
        this.current_device.name = this.device.name
        //console.log(this.current_device)
      }
    },
    components:{
      infoDevice
    }
  }
</script>


<style></style>
