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
          <p class="card-text">Id: {{ dispositivo_actual.id }}<br>Nombre: {{ dispositivo_actual.nombre }}<br>Ubicación: {{ dispositivo_actual.ubicacion }}<br>Coordenadas: {{ dispositivo_actual.coordenadas }}</p>
           <p class="card-text">Potencia mínima = {{ dispositivo_actual.potencia.minimo }} {{ dispositivo_actual.potencia.um }} <br> Potencia nominal = {{dispositivo_actual.potencia.nominal}} {{ dispositivo_actual.potencia.um }}<br> Potencia máxima = {{dispositivo_actual.potencia.maximo }} {{ dispositivo_actual.potencia.um }}</p>
          <p class="card-text">Voltaje mínimo = {{ dispositivo_actual.voltaje.minimo }} {{ dispositivo_actual.voltaje.um }} <br> Voltaje nominal = {{dispositivo_actual.voltaje.nominal}} {{ dispositivo_actual.voltaje.um }}<br> Voltaje máximo = {{dispositivo_actual.voltaje.maximo }} {{ dispositivo_actual.voltaje.um }}</p>
          <p class="card-text">Intensidad mínima = {{ dispositivo_actual.intensidad.minimo }} {{ dispositivo_actual.intensidad.um }} <br> Intensidad nominal = {{dispositivo_actual.intensidad.nominal}} {{ dispositivo_actual.intensidad.um }} <br> Intensidad máxima = {{dispositivo_actual.intensidad.maximo }} {{ dispositivo_actual.intensidad.um }}</p>
          <p class="card-text">Flujo mínimo = {{ dispositivo_actual.flujo.minimo }} {{ dispositivo_actual.flujo.um }} <br> Flujo nominal = {{dispositivo_actual.flujo.nominal}} {{ dispositivo_actual.flujo.um }} <br> Flujo máximo = {{ dispositivo_actual.flujo.maximo}} {{ dispositivo_actual.flujo.um }}</p>
           <p class="card-text">Presión mínima = {{ dispositivo_actual.presion.minimo }} {{ dispositivo_actual.presion.um }} <br> Presion nominal = {{dispositivo_actual.presion.nominal}} {{ dispositivo_actual.presion.um }}<br> Presion máxima = {{dispositivo_actual.presion.maximo }} {{ dispositivo_actual.presion.um }}</p>
            <p class="card-text">Temperatura mínima = {{ dispositivo_actual.temp.minimo }} {{ dispositivo_actual.temp.um }} <br> Temperatura nominal = {{dispositivo_actual.temp.nominal}} {{ dispositivo_actual.temp.um }}<br> Temperatura máxima = {{dispositivo_actual.temp.maximo }} {{ dispositivo_actual.temp.um }}</p>
             <p class="card-text">Humedad mínima = {{ dispositivo_actual.humedad.minimo }} {{ dispositivo_actual.humedad.um }} <br> Humedad nominal = {{dispositivo_actual.humedad.nominal}} {{ dispositivo_actual.humedad.um }}<br> HUmedad máxima = {{dispositivo_actual.humedad.maximo }} {{ dispositivo_actual.humedad.um }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default
  {
    name: "InfoDevice",
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
