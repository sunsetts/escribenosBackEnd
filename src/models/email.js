const nodemailer = require('nodemailer')

class email {
  constructor(oConfig) {
    this.createTransport = nodemailer.createTransport(oConfig)
  }

  enviarCorreo(oEmail) {
    try{
      this.createTransport.sendMail(oEmail, function(error, info){
        if (error) {
          console.log('error al enviar correo')
        } else{
          console.log('correo enviado satisfactoriamente')
        }
        this.createTransport.close()
      })
    }catch(x){
      console.log('Error al enviar mensaje ' + x)
    }
  }
}

module.exports = email
