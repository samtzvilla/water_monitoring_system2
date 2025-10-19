<template>
    <div class="d-flex justify-content-center align-items-center">
        <div class="row">
            <!--El device se toma como hijo del devices-->
            <device v-for="dispositivo in devices" :device="dispositivo"></device>
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
                type:Array, // Objetc o array si son varios
                required:true
            }
        },
        data: function () {
            return{/*
                dispositivos: [
                    {
                        id: 1,
                        name: "Bomba de Zitácuaro",
                        location: "Zitácuaro",
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
                        v_min: 20,
                        v_max: 124,
                        i_min: 5,
                        i_max: 50,
                        q_min: 20,
                        q_max: 120
                    },
                ]*/
            }
        },
        components:
        {
            device
        }
    }
</script>

<style></style>