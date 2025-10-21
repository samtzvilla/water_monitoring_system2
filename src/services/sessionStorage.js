class Servicio{
    
    getVerificaUsuario(user, password)
    {
        if(user === 'uno' && password === 'unomasuno')
            return true
        else
            return false
    }
}

export default new Servicio