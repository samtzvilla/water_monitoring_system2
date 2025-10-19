<template>
  <div id="frame" class="container-fluid">
    <!-- Barra de navegación -->
    <div class="row">
      <nav class="navbar navbar-expand-sm body-evenly">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-6 mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Menú</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">Administración</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">Dropdown</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Opción 1</a></li>
                <device v-for="dispositivo in this.dispositivos" :device="dispositivo"></device>
                <li><a class="dropdown-item" href="#">Opción 2</a></li>
                <li><a class="dropdown-item" href="#">Opción 3</a></li>
              </ul>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="button" @click="">Search</button>
            <!--Si el modal es true, se muestra la ventana modal (flotante) para dar de alta otro sistema-->
          </form>
        </div>
      </nav>
    </div>

    <!-- Información -->
    <div class="row mt-3">
      <h1>Lista de sistemas activos</h1>
    </div>

    <!--AQUÍ SE LISTA EL ARREGLO DE DISPOSITIVOS, se muestra la plantilla del dispositivo -->
    <!--Con los : de le pasa el arreglo de dispositivos (this.devices) al componente device
       y se vincula con la propiedad  device del componente device
      <devices v-for="dispositivo in this.dispositivos" :device="dispositivo"> -->
    <devices :devices="dispositivos"> </devices>

    <!--Se pasa la lista de dispositivos a los componentes hijos para que puedan consultarlos-->
    <modalRegister :devices="dispositivos" @addSystem ="dispositivos.push($event)"></modalRegister>
  </div>
</template>

<script>
// Se importa el componente (etiqueta coustomizada) que utiliza el componente actual, se añade en components
import devices from './list_devices.vue'
import modalRegister from './modalRegister.vue'
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
            i_min: 5,
            i_max: 50,
            q_min: 20,
            q_max: 120
          },
          {
            id: 2,
            name: "Bomba de Morelia",
            location: "Morelia",
            status:"On",
            v_min: 15,
            v_max: 150,
            i_min: 5,
            i_max: 30,
            q_min: 30,
            q_max: 140
          },
          {
            id: 3,
            name: "Bomba de Zacapu",
            location: "Zacapu",
            status:"On",
            v_min: 30,
            v_max: 140,
            i_min: 18,
            i_max: 40,
            q_min: 20,
            q_max: 100
          },
          {
            id: 4,
            name: "Bomba de Uruapan",
            location: "Uruapan",
            status:"On",
            v_min: 20,
            v_max: 124,
            i_min: 5,
            i_max: 50,
            q_min: 20,
            q_max: 120
          },
        ]
      }
    },
    methods:
    {
      // LOS MÉTODOS DEL OBJETO YA NO NECESITAN LA WORDKEY FUNCTION
      async readDB() {
        const res = await fetch("http://localhost:8080/data")
        console.log(res)
      }
    },
    components: {
      devices,
      modalRegister
    }
  }
</script>

<style>
#frame {
  background-color: cornflowerblue;
  height: max-content;
}
</style>