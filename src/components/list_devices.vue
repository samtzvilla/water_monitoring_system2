<template>
    <div>
        <div class="row">
            <!--El device se toma como hijo del devices, el v-for se ejecuta una sola vez, se debe crear una copia de cada uno para mostrar detalles, también se habilita
            el método setDispositivo que pide ejecutar el componente hijo (el botón ver detalles hace que el current_device sea igual al que envía el componente device)-->
            <device v-for="dispositivo in devices" :key="dispositivo.id" :device="dispositivo" @setDispositivo="setDispositivo"></device>
        </div>
    <!--El modal se muestra una vez se presiona el botón, en ese momento se ejecuta un método para salvar el dispositivo actual en el que se presiona el botón, para mostrar su info-->
        <InfoDevice :dispositivo_actual="current_device"></InfoDevice>
        <div class="row">
            <div class="btn-group" role="group" aria-label="Second group">
                <button type="button" class="btn btn-secondary" @click="this.$emit('refresh')">refresh</button>
                <button type="button" class="btn btn-secondary" @click="this.$emit('start')">Iniciar</button>
                <button type="button" class="btn btn-secondary" @click="this.$emit('stop')">Detener</button>
            </div>
        </div>
    </div>
</template>

<script>
import device from './device.vue'
import InfoDevice from './infoDevice.vue'
export default
    {
        name: "devices",
        props:
        {
            devices:
            {
                type: Array, // Objetc o array si son varios
                required: true
            }
        },
        data: function () {
            return {
            current_device:{
            id:undefined,
            nombre: undefined,
            ubicacion: undefined,
            coordenadas: undefined,
            potencia:{nominal: 0, minimo: 0, maximo: 0, um: ""},
            voltaje: {nominal: 0, minimo: 0, maximo: 0, um: ""},
            intensidad: {nominal: 0, minimo: 0, maximo: 0, um: ""},
            flujo: {nominal: 0, minimo: 0, maximo: 0, um: ""},
            presion: {nominal: 0, minimo: 0, maximo: 0, um: ""},
            temp: {nominal: 0, minimo: 0, maximo: 0, um: ""},
            humedad: {nominal: 0, minimo: 0, maximo: 0, um: ""},
            fecha_registro:null
        }
            }
        },
        components:
        {
            device, 
            InfoDevice
        },
        methods:
        {
            // LOS MÉTODOS DEL OBJETO YA NO NECESITAN LA WORDKEY FUNCTION
            async readDB() {
                const res = await fetch("http://localhost:8080/data")
                console.log(res)
            },
            setDispositivo(device)
            {
                //console.log(device)
                this.current_device = device

            }
        },
    }
</script>

<style></style>