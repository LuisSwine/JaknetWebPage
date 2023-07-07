const express = require('express')
const nodemailer = require('nodemailer')
const router = express.Router()

router.get('/home', (req,res)=>{
    res.render('index');
})

router.get('/blog', (req, res) => {
    res.render('blog'); 
});

router.get('/servicios', (req, res) => {
    res.render('servicios'); 
});

router.get('/contacto', (req, res) => {
    res.render('contacto'); 
});

router.get('/perfil', (req, res) => {
    res.render('perfil'); 
});

router.get('/login', (req, res) => {
    res.render('login'); 
});

router.get('/registro', (req, res) => {
    res.render('registro'); 
});

router.post('/send-email', (req, res) =>{
    console.log(req.body); 
    const { Nombre, email, Telefono, Mensaje} = req.body;
    contentHTML = `
        <h1>Informacion Usuario</h1>
        <ul>
            <li>Nombre: ${Nombre}</li>
            <li>Correo: ${email}</li>
            <li>Telefono: ${Telefono}</li>
        <ul>
        <p>${Mensaje}</p>
    
    `;
    // Configurar el transportador de correo electrónico
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: '',
            pass: 'ddqlccckcfkcilzm'
        }
    });

    const mailOptions = {
        from: email,
        to: 'eduardoleon1266@gmail.com',
        subject: 'NodeJs',
        html: contentHTML
      };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          res.send('Error al enviar el correo electrónico');
        } else {
          console.log('Correo electrónico enviado: ' + info.response);
          res.send('Correo electrónico enviado correctamente');
        }
      });
    res.redirect('/contacto')
});


module.exports = router
