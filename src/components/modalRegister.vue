<template>

  <!-- Button trigger modal -->
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
              <label class="form-label" for="name">Name</label>
              <input type="text" class="form-control" id="name" v-model="this.name" value="">
            </div>
            <div class="mb-3">
              <label for="location" class="form-label">Location</label>
              <input type="text" class="form-control" id="location" v-model="this.location" value="">
            </div>
            <div class="mb-3">
              <label for="v_min" class="form-label">Voltaje mínimo</label>
              <input type="number" class="form-control" id="v_min" v-model="this.v_min" value="">
            </div>    
            <div class="mb-3">
              <label for="v_max" class="form-label">Voltaje máximo</label>
              <input type="number" class="form-control" id="v_max" v-model="this.v_max" value="">
            </div> 
            <div class="mb-3">
              <label for="v_max" class="form-label">Voltaje nominal</label>
              <input type="number" class="form-control" id="v_nom" v-model="this.v_nom" value="">
            </div>     
            <div class="mb-3">
              <label for="i_min" class="form-label">Corriente mínima</label>
              <input type="number" class="form-control" id="i_min" v-model="this.i_min" value="">
            </div>
            <div class="mb-3">
              <label for="i_max" class="form-label">Corriente máxima</label>
              <input type="number" class="form-control" id="i_max" v-model="this.i_max" value="">
            </div>
            <div class="mb-3">
              <label for="i_max" class="form-label">Corriente nominal</label>
              <input type="number" class="form-control" id="i_nom" v-model="this.i_nom" value="">
            </div>
            <div class="mb-3">
              <label for="q_min" class="form-label">Caudal mínimo</label>
              <input type="number" class="form-control" id="q_min" v-model="this.q_min" value="">
            </div>
            <div class="mb-3">
              <label for="q_max" class="form-label">Caudal máximo</label>
              <input type="number" class="form-control" id="q_max" v-model="this.q_max" value="">
            </div>
            <div class="mb-3">
              <label for="i_max" class="form-label">Caudal nominal</label>
              <input type="number" class="form-control" id="i_nom" v-model="this.q_nom" value="">
            </div>
                      
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          <button type="button" class="btn btn-primary" @click="sendSystem">Guardar sistema</button>
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
      id:-1,
      name: "",
      location: "",
      status:"",
      v_min: undefined,
      v_max: undefined,
      v_nom: undefined,
      i_min: undefined,
      i_max: undefined,
      i_nom: undefined,
      q_min: undefined,
      q_max: undefined,
      q_nom: undefined,
      opera:undefined
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
      // Se crea un nuevo objeto y se añade al arreglo
      let elements = this.devices.length + 1
      let reactive_values = {
        voltaje:0,
        corriente: 0,
        caudal: 0,
        status:-1
      }
      const nuevo_sistema = {id:elements, name: this.name, location: this.location, status:"On", v_min:this.v_min, v_max:this.v_max, v_nom: this.v_nom,
      i_min:this.i_min, i_max:this.i_max, i_nom: this.i_nom, q_min:this.q_min, q_max:this.q_max, q_nom: this.q_nom, opera: reactive_values}
      this.$emit("addSystem", nuevo_sistema)  // Llama a que el padre ejecute la función pasándole el parámetro
    }
  },
}
</script>
<style></style>