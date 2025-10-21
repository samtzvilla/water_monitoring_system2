
// Vuex es para implementar variables globales que conozcan todos los componentes, acceden a un componente global que tiene de todos los datos (como una base de datos interna)
import { createStore } from 'vuex'


export default createStore({
  state: {
    // Se accede a la spropiedades del data store con el atributo computed de los componenetes que lo necesitan
    // this.$store.state.dispositivos
    dispositivos: [],   // Este arreglo se rellena con los dispositivos definidos en el servicio
    usuarios: [],
    usuario: {
      id: 0,
      name: ''
    }
  },
  mutations: {
    setUsuario: function(state, usuario) {
      state.usuario = usuario
    },
    setDispositivos (state, payload) {
      state.dispositivos = payload
    },
    setUsuarios (state,payload) {
      state.usuarios = payload
    },
    addUsuario (state, usuario) {
      state.usuarios.push(usuario)
    },
    addDispositivo (state, dispositivo) {
      state.dispositivos.push(dispositivo)
    }
  },
  actions: {
  }
})

