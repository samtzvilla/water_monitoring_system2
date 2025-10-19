<template>
  <div class="modal fade" id="infoDevice" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="infoDeviceLabel">{{ dispositivo_actual.name }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p class="card-text">Id: {{ dispositivo_actual.id }}<br>Nombre: {{ dispositivo_actual.name }}<br>Ubicación: {{ dispositivo_actual.location }}<br>Estado: {{ dispositivo_actual.status }}</p>
          <p class="card-text">Voltaje mínimo = {{ dispositivo_actual.v_min }} KV<br>Voltaje máximo = {{dispositivo_actual.v_max }} KV</p>
          <p class="card-text">Corriente mínima = {{ dispositivo_actual.i_min }} A<br> Corriente máxima = {{dispositivo_actual.i_max }} A</p>
          <p class="card-text">Caudal mínimo = {{ dispositivo_actual.q_min }} <br> Caudal máximo = {{ dispositivo_actual.q_max}}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary"  @click="printObject" data-bs-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default
  {
    name: "infoDevice",
    props:
    {
      dispositivo_actual:
      {
        type: Object,
        require: true
      }
    },
    data: function () {
      return {
      }
    },
    methods:
    {
      printObject()
      {
        console.log(this.dispositivo_actual)
      }
    }
  }
</script>
