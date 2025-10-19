<template>
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
</template>

<script>
    export default
    {
        name: "navbar",
    }
</script>