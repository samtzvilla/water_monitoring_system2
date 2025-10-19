<template>
  <div id="frame" class="container-fluid position-fixed top-0 start-0">
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
                <li><a class="dropdown-item" href="#">Opción 2</a></li>
                <li><a class="dropdown-item" href="#">Opción 3</a></li>
              </ul>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
    
    <!-- Información -->
    <div class="row mt-3">
      <h1>Lista de sistemas activos</h1>
    </div>
    
    <div class="row mt-3">
      <table class="table table-hover table-striped" id="avalibleSystems">
        <thead>
          <tr> <!--9 col-->
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Location</th>
            <th scope="col">V_min</th>
            <th scope="col">V_max</th>
            <th scope="col">I_min</th>
            <th scope="col">I_max</th>
            <th scope="col">Q_min</th><!--Q (caudal)= V * A -->
            <th scope="col">Q_max</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <!--Aquí se listan los sistemas activos-->
        </tbody>
      </table>
    </div>
    <div class="row mt-3">
      <div class="col-3 d-flex justify-content-center">
        <button class="btn btn-light" type="button" @click="this.modal = true" >Agregar sistema</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default
  {
    name:"init",
    data:function()
    {
      return{
        modal:false,
      }
    },
    methods:
    {

    },
    components:{

    }
  }
</script>

<style>
#frame {
  background-color: cornflowerblue;
  height: 100vh;
}
</style>