const Response = require('../../model/constants/response')
const Usuario = require('../../controller/usuario')

const response = new Response()
const User = new Usuario()

module.exports = (app) => {
    app.get('/usuario/bienvenida', (req, res) => {
        
        User.bienvenidaUsuario()
            .then(result => {
                console.log(result)
                response.send(res, result)
            })
            .catch(error => {
                console.log(error)
                response.send(res, error)
            })

    })
}