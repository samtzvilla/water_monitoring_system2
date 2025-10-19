<template>
    <div id="login" class="card bg-transparent mb-3 card-center login-card">
      <div class="card-body"> <!--Encabezado de la tarjeta-->
        <div class="text-center">
          <h4 class="card-title" title="Plataforma para monitoreo de Sistemas de Bombeo">Plataforma de monitoreo</h4>
          <h5 class="card-subtitle">Sistema de bombeo</h5>
        </div>
        <div class="row p-1"> <!--El row hace que los componentes esten sepadados, con una line
              de no se así loc componentes estarian pegados-->
          <form>
            <!--El form floatin, el label del input está dentro de el 
              type password hace que el texto no se imprima en pantalla
              -->
            <div class="form-floating p-1">
              <input type="text" id="userName" ref="userName" class="form-control" v-model="login.userName"
                v-on:keyup.enter="tfPassword()" aria-describedby="usuarioNombreHelp" placeholder="Nombre de Usuario" />
              <label id="usuarioNombreHelp" class="form-text text-muted">Nombre de usuario</label>
            </div>
            <div class="form-floating p-1">
              <input type="password" id="password" ref="password" class="form-control" v-model="login.password"
                v-on:keyup.enter="validar()" aria-describedby="usuarioPasswordHelp" />
              <label id="usuarioPasswordHelp" class="form-text text-muted">Contraseña</label>
            </div>
          </form>
        </div>
        <div class="row p-2">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="alert alert-danger" role="alert" v-if="alerta.mensaje">
              <strong>¡Error!</strong>
              <p v-html="alerta.mensaje"></p>
            </div>
          </div>
        </div>
        <div class="row p-2">
          <button class="btn btn-outline-success" type="button" @click="validar()"> Iniciar sesión </button>
        </div>
        <div class="card-body text-center">
            <a class="card-link" href="#" @click="register()">Registrarme</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // Se importan las funciones de los servicios
  import sessionStorage from '../services/sessionStorage'
  export default {
    name: 'Login',
    components: {   // Otros componentes que use 
    },
    // Es otra forma más clara de ver los atributos del componente 
    //  a exportar
    data: function () {
      return {  // Es un solo objeto (this) que almacena propiedades (login, alerta, ...)
                // donde su valor es otro objeto aceder con doble punto
        login: {
          userName: '', // Se vincularan con la directiva v-model
          password: '',
        },
        alerta: {
          mensaje: '',
        },
        registeredUser: false // Muestra registro exitoso si se registrpo el usuario y vuelve a este componente
      };
    },
    methods: {
      validar() {
        // Esta es una ruta al que direccionará el ruter cuando se presione el botón
        // Esa ruta podria referenciar al desplieque de otro componente (página de inicio.)
        if (sessionStorage.getVerificaUsuario(this.login.userName, this.login.password)) // Se validan las credenciales
          this.$router.push('/init')  // Router es una variable exportada del proyecto, se llama con $, por otra parte las clases se importan
        else
          this.alerta.mensaje = "Usuario no válido"   // Mensaje de alerta si no son validas
      },
      limpiarControles() {
        this.alerta.mensaje = ''
        // $refs se utiliza para referenciar una propiedad de un objeto que exporta el componente
        // En este caso login, cuyas propiedades estan vinculadas con los inputs con el v-model
        this.$refs.userName.focus()
      },
      tfPassword() {
        if (this.login.userName !== '') {
          this.$refs.password.focus() // Focus que hace???
        } else {
          this.alerta.mensaje = 'Debes escribir tu nombre de usuario'
        }
      },
      register()
      {
        this.$router.push("/register")
      }
    }
  }
  </script>
  
  <style scoped>
  h1 {
    font-size: 1.75rem;
    color: var(--gray-900);
    font-weight: 500;
    line-height: 100%;
    /*letter-spacing: -0.125rem;*/
    margin: 0;
    font-family: "Inter Tight", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
  }
  
  h2 {
    font-size: 1.25rem;
    color: var(--gray-900);
    font-weight: 500;
    line-height: 100%;
    margin: 0;
    font-family: "Inter Tight", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
  }
  
  p {
    margin: 0;
    color: var(--gray-700);
  }
  
  .login-card {
    max-width: 400px;
    min-width: 300px;
    width: 100%;
    /*background:  url('@/assets/img/background.png') repeat-x scroll;*/
  }
  
  .login-full-width {
    width: 100%;
  }
  </style>