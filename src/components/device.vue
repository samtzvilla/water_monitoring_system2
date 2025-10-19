<template>
<div>
        <div class="card border-success mb-3">
        <div class="card-header bg-transparent border-success">{{device.name}}</div>
        <div class="card-body text-success">
          <p class="card-text">Id: {{device.id}}<br>Nombre: {{device.name}}<br>Ubicación: {{ device.location }}<br>Estado: {{ device.status }}</p>
          <p class="card-text">Voltaje mínimo = {{device.v_min}} KV<br>Voltaje máximo = {{device.v_max}} KV</p>
          <p class="card-text">Corriente mínima = {{device.i_min }} A<br> Corriente máxima = {{ device.i_max }} A</p>
          <p class="card-text">Caudal mínimo = {{device.i_min }} <br> Caudal máximo = {{ device.i_max }}</p>
        </div>
        <div class="card-footer bg-transparent border-success"></div>
      </div>
</div>
</template>

<script>
export default
  {
    name: "device",
    // ¿Que diferencia tienen las pops del las propiedades definidas del objeto definidos en el data?
    props:
    {
        device:
        {
            type:Object,    // <!--Con los : de le pasa -->¿Para qué definimos estas 2 propiedades?
            require:true
        }
    },
    data: function () {
      return {
        }
      }
  }
</script>


<style></style>


