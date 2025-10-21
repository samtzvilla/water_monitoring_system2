class Servicio{
    
    getVerificaUsuario(user, password)
    {
        if(user === 'samuel' && password === 'samuel')
            return true
        else
            return false
    }
}

export default new Servicio