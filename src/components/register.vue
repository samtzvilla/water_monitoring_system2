<template>
    <div class="card bg-transparent mb-1 card-center" id="template" style="col-64">
        <div class="card-header text-center">Datos de registro</div>
        <div class="card-body text-center row p-5">
            <form>
                <div class="mb-3">
                    <!--Id es para referenciar en html, name para referenciar el elemento en el Js-->
                    <label class="form-label" for="name">Nombre</label>
                    <input type="text" class="form-control" id="name" v-model="this.userData.name" value="">

                </div>
                <div class="mb-3">
                    <!--Id es para referenciar en html, name para referenciar el elemento en el Js-->
                    <label for="email" class="form-label">Correo</label>
                    <input type="text" class="form-control" id="email" aria-describedby="messageEmail"
                        v-model="this.userData.email" value="">
                    <div id="messageEmail" class="form-text">Ingresa correo institucional. Ej: 1234567@umich.mx </div>
                    <div class="alert alert-danger" role="alert" v-if="this.validationData.invalidateEmail == true">
                        <p>Debes acceder con tu correo institucional</p>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Contraseña</label>
                    <input type="password" class="form-control" id="password" v-model="this.userData.password" value=""
                        aria-describedby="messagePassword">
                    <div id="messagePassword" class="form-text">La contraseña debe tener al menos 8 caracteres, contener
                        un dígito (0-9) y una mayúscula (A-Z)</div>
                    <br>
                    <div class="alert alert-danger" role="alert" v-if="this.validationData.invalidatePassword == true">
                        <p>La contraseña debe tener al menos 8 caracteres, contener un dígito (0-9) y una mayúscula
                            (A-Z)</p>
                    </div>
                    <!--Se usan los bigotes para mostrar variables en el html
                    <div id="contraseña">
                        <br><p>{{ this.userData.password }}</p>
                    </div>-->
                </div>
                <button type="button" class="btn btn-primary" @click="validateEP()">Registrarme</button>
            </form>
        </div>
    </div>
</template>

<script>

export default
    {
        name: "register",                // Se muestra mete la contraseña al div
        // document.getElementById("contraseña").innerHTML = "<p>{{ this.userData.password }}</p>"
        data: function () {
            return {    // Regresa un conjunto de objetos
                userData:
                {
                    name: "",
                    email: "",
                    password: "",

                },
                validationData:
                {
                    includeDigit: false,
                    includeMayus: false,
                    invalidatePassword: false,  // Banderas de validación para muestra de alerta
                    invalidateEmail: false
                }
            }
        },
        methods:
        {
            //Metodos que usan los elementos html

            // Valida longitud de 8 caracteres, al menos una mayúscula y un caracter especial
            validatePassword() {

                // Se reinicializa la variable de validación para la siguiente solicitud
                this.validationData.invalidatePassword = false;

                // Se valida longitud
                if (this.userData.password.length < 8)
                    this.validationData.invalidatePassword = true


                // Se validan las mayúsuclas van 65-90 y la Ñ 209
                for (let i = 65; i <= 90; i++) {
                    if (this.validationData.includeMayus == true)
                        break
                    if (this.userData.password.includes(String.fromCharCode(i)))
                        this.validationData.includeMayus = true
                }
                if (this.userData.password.includes(String.fromCharCode(209)))
                    this.validationData.includeMayus = true

                // Se validan un dígito (48-57)
                for (let i = 48; i <= 57; i++) {
                    if (this.validationData.includeDigit == true)
                        break
                    if (this.userData.password.includes(String.fromCharCode(i)))
                        this.validationData.includeDigit = true
                }
                if (this.validationData.includeDigit == false || this.validationData.includeMayus == false) // Si no tiene digito o una mayuscula, es inválida
                    this.validationData.invalidatePassword = true   // Se muestra alerta
            },
            validateEmail() {
                // Se reestablece el valor de la bandera de validación para el Email
                this.validationData.invalidateEmail = false

                if (!(this.userData.email.includes("@umich.mx")))
                    this.validationData.invalidateEmail = true
            },
            validateEP() {
                // Se redirecciona al componente login, si el registro fue exitoso para el inicio se sesión
                // Como se puede accesar a los objetos que regresa otro componente???
                this.validatePassword()
                this.validateEmail()

                if (this.validationData.invalidatePassword == false && this.validationData.invalidateEmail == false) {
                    this.$router.push("/")
                }
                // Impresiones para depuración
                console.log(this.validationData.includeMayus)
                console.log(this.validationData.includeDigit)
                console.log(this.validationData.invalidatePassword)
                console.log(this.validationData.invalidateEmail)
            }
        }
    
        
    }

</script>

<style>
/*¿Cómo centramos la tarjeta, su ancho fijo pero su largo dinámico (si hay alertas)*/
#template {
    width: 500px;
    height: 500px;
}
</style>