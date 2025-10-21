<template>

  <!-- Button trigger modal -->
   <div class="text-center">

  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Agregar sistema</button>

  <!-- Modal -->
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Nuevo sistema</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">

          <!--Formulario para datos del sistema nuevo-->
          <form>
            <div class="mb-3">
              <!--Id es para referenciar en html, name para referenciar el elemento en el Js-->
              <label class="form-label" for="nombre">Nombre</label>
              <input type="text" class="form-control" id="nombre" v-model="this.nombre" value="">
            </div>
            <div class="mb-3">
              <label for="ubicacion" class="form-label">Ubicación</label>
              <input type="text" class="form-control" id="ubicacion" v-model="this.ubicacion" value="">
            </div>
            <div class="mb-3">
              <label for="coordenadas" class="form-label">Coordenadas</label>
              <input type="text" class="form-control" id="coordenadas" v-model="this.coordenadas" value="">
            </div>
            
             <div class="mb-3">
              <label for="p_min" class="form-label">Potencia mínima</label>
              <input type="number" class="form-control" id="p_min" v-model="this.potencia.minimo" value="">
            </div>    
            <div class="mb-3">
              <label for="p_max" class="form-label">Potencia máxima</label>
              <input type="number" class="form-control" id="p_max" v-model="this.potencia.maximo" value="">
            </div> 
            <div class="mb-3">
              <label for="p_nom" class="form-label">Potencia nominal</label>
              <input type="number" class="form-control" id="p_nom" v-model="this.potencia.nominal" value="">
            </div>  

            <div class="mb-3">
              <label for="v_min" class="form-label">Voltaje mínimo</label>
              <input type="number" class="form-control" id="v_min" v-model="this.voltaje.minimo" value="">
            </div>    
            <div class="mb-3">
              <label for="v_max" class="form-label">Voltaje máximo</label>
              <input type="number" class="form-control" id="v_max" v-model="this.voltaje.maximo" value="">
            </div> 
            <div class="mb-3">
              <label for="v_nom" class="form-label">Voltaje nominal</label>
              <input type="number" class="form-control" id="v_nom" v-model="this.voltaje.nominal" value="">
            </div>   

            <div class="mb-3">
              <label for="i_min" class="form-label">Intensidad mínima</label>
              <input type="number" class="form-control" id="i_min" v-model="this.intensidad.minimo" value="">
            </div>
            <div class="mb-3">
              <label for="i_max" class="form-label">Intensidad máxima</label>
              <input type="number" class="form-control" id="i_max" v-model="this.intensidad.maximo" value="">
            </div>
            <div class="mb-3">
              <label for="i_nom" class="form-label">Intensidad nominal</label>
              <input type="number" class="form-control" id="i_nom" v-model="this.intensidad.nominal" value="">
            </div>

            <div class="mb-3">
              <label for="q_min" class="form-label">Flujo mínimo</label>
              <input type="number" class="form-control" id="q_min" v-model="this.flujo.minimo" value="">
            </div>
            <div class="mb-3">
              <label for="q_max" class="form-label">Flujo máximo</label>
              <input type="number" class="form-control" id="q_max" v-model="this.flujo.maximo" value="">
            </div>
            <div class="mb-3">
              <label for="q_nom" class="form-label">Flujo nominal</label>
              <input type="number" class="form-control" id="q_nom" v-model="this.flujo.nominal" value="">
            </div>

            <div class="mb-3">
              <label for="pre_min" class="form-label">Presión mínima</label>
              <input type="number" class="form-control" id="pre_min" v-model="this.presion.minimo" value="">
            </div>    
            <div class="mb-3">
              <label for="pre_max" class="form-label">Presión máxima</label>
              <input type="number" class="form-control" id="pre_max" v-model="this.presion.maximo" value="">
            </div> 
            <div class="mb-3">
              <label for="pre_nom" class="form-label">Presión nominal</label>
              <input type="number" class="form-control" id="pre_nom" v-model="this.presion.nominal" value="">
            </div>

            <div class="mb-3">
              <label for="t_min" class="form-label">Temperatura mínima</label>
              <input type="number" class="form-control" id="t_min" v-model="this.temp.minimo" value="">
            </div>    
            <div class="mb-3">
              <label for="t_max" class="form-label">Temperatura máxima</label>
              <input type="number" class="form-control" id="t_max" v-model="this.temp.maximo" value="">
            </div> 
            <div class="mb-3">
              <label for="t_nom" class="form-label">Temperatura nominal</label>
              <input type="number" class="form-control" id="t_nom" v-model="this.temp.nominal" value="">
            </div> 

            <div class="mb-3">
              <label for="h_min" class="form-label">Humedad mínima</label>
              <input type="number" class="form-control" id="h_min" v-model="this.humedad.minimo" value="">
            </div>    
            <div class="mb-3">
              <label for="h_max" class="form-label">Humedad máxima</label>
              <input type="number" class="form-control" id="h_max" v-model="this.humedad.maximo" value="">
            </div> 
            <div class="mb-3">
              <label for="h_nom" class="form-label">Humedad nominal</label>
              <input type="number" class="form-control" id="h_nom" v-model="this.humedad.nominal" value="">
            </div>  
            
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          <button type="button" class="btn btn-primary" @click="sendSystem">Agregar sistema</button>
        </div>
      </div>
    </div>
  </div>

  </div>
</template>

<script>

export default {
  name: 'modalRegister',
  data() {
    return {
      // Atributos para añadir un nuevo sistema
      id:undefined,
      nombre: undefined,
      ubicacion: undefined,
      coordenadas: undefined,
      potencia:{nominal: undefined, minimo: undefined, maximo: undefined, um: "KW"},
      voltaje: {nominal: undefined, minimo: undefined, maximo: undefined, um: "V"},
      intensidad: {nominal: undefined, minimo: undefined, maximo: undefined, um: "A"},
      flujo: {nominal: undefined, minimo: undefined, maximo: undefined, um: "LPM"},
      presion: {nominal: undefined, minimo: undefined, maximo: undefined, um: "BAR"},
      temp: {nominal: undefined, minimo: undefined, maximo: undefined, um: "C"},
      humedad: {nominal: undefined, minimo: undefined, maximo: undefined, um: "%"},
      fecha_registro:null
    }
  },
  props:
  {
    devices:
    {
      type:Array,
      required:true
    }
  },
  methods: {
    sendSystem()
    {
      const nuevo_sistema = {id:this.id, nombre: this.nombre, ubicacion: this.ubicacion, coordenadas:this.coordenadas, potencia:{nominal:this.potencia.nominal, minimo:this.potencia.minimo, maximo:this.potencia.maximo}, voltaje:{nominal:this.voltaje.nominal, minimo:this.voltaje.minimo, maximo:this.voltaje.maximo},
      intensidad:{nominal:this.intensidad.nominal, minimo:this.intensidad.minimo, maximo:this.intensidad.maximo}, flujo:{nominal:this.voltaje.nominal, minimo:this.voltaje.minimo, maximo:this.voltaje.maximo}, presion: {nominal:this.presion.nominal, minimo:this.presion.minimo, maximo:this.presion.maximo},
      temp:{nominal:this.temp.nominal, minimo:this.temp.minimo, maximo:this.temp.maximo}, humedad:{nominal:this.humedad.nominal, minimo:this.humedad.minimo, maximo:this.humedad.maximo}, fecha_registro: this.fecha_registro
      }
      this.$emit("addSystem", nuevo_sistema)  // Llama a que el padre ejecute la función pasándole el parámetro
    }
  },
}
</script>
<style></style>