const Response = require('../../../../model/constants/response')

const response = new Response()

class UsuarioProcess {
    processBienvenidaUsuario(){
        return new Promise(async (resolve, reject) => {
            try {
                console.log('Hola usuario');
                
                return resolve(response.success('Hola usuario y bienvenido seas'))
            } catch (error) {
                
            }
        })
    }
}

module.exports = UsuarioProcess