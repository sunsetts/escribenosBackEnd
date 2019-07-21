const router = require('express').Router()
const cors = require('cors')
router.use(cors())
const bodyParser = require('body-parser')


const email = require("../models/email.js");

router.use(bodyParser.json()) // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true }))

const oEmail = new email({
    "host":"smtp.gmail.com",
    "port":"465",
    "secure":true,
    "auth":{
        "type":"login",
        "user":"alfamedicavenezuela@gmail.com",
        "pass":"alfamedica1512"
    }
});


router.get('/', (req, res) => {
  res.send('Server Works')
})

router.post('/api/contacto', (req, res, next) => {
  let email ={
        from:"alfamedicavenezuela@gmail.com",
        to:"luisfernandocolmenarez@gmail.com",
        subject:"Nuevo mensaje de usuario",
        html:`
            <div>
            <p>Correo: ${req.body.c}</p>
            <p>Nombre: ${req.body.n}</p>
            <p>Mensaje: ${req.body.m}</p>
            </div>`
        }

        oEmail.enviarCorreo(email);
        res.send("ok");

})



module.exports = router
