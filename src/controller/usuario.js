const UsuarioProcess = require("../model/MySQL/AZURE/Process/processUsuario")
const processUsuario = new UsuarioProcess()

class Usuario {
    bienvenidaUsuario(){
        return processUsuario.processBienvenidaUsuario()
    }
}

module.exports = Usuario