<template>
    <div class="d-flex justify-content-center align-items-center">
        <div class="row">
            <!--El device se toma como hijo del devices, el v-for se ejecuta una sola vez, se debe crear una copia de cada uno para mostrar detalles-->
            <device v-for="dispositivo in devices" :device="dispositivo"></device>
        </div>
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
            }
        },
        components:
        {
            device
        },
        methods:
        {
            // LOS MÉTODOS DEL OBJETO YA NO NECESITAN LA WORDKEY FUNCTION
            async readDB() {
                const res = await fetch("http://localhost:8080/data")
                console.log(res)
            },
        },
    }
</script>

<style></style>