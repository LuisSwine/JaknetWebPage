const express = require('express')
const nodemailer = require('nodemailer')
const router = express.Router()

router.get('/', (req,res)=>{
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

router.get('/about', (req, res) => {
    res.render('about'); 
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

router.get('/infraestructura', (req, res) => {
    res.render('infraestructurared'); 
});

router.get('/sistemaseguridad', (req, res) => {
    res.render('sistemass'); 
});

router.get('/telecomunicaciones', (req, res) => {
    res.render('telecomunicaciones'); 
});

router.get('/smarth', (req, res) => {
    res.render('smarth'); 
});

router.get('/energia', (req, res) => {
    res.render('energia'); 
});

router.get('/software', (req, res) => {
    res.render('software'); 
});

router.get('/hardware', (req, res) => {
    res.render('hardware'); 
});

router.get('/asesoria', (req, res) => {
    res.render('asesoria'); 
});

router.get('/cloud', (req, res) => {
    res.render('cloud'); 
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

    const destinatarioGsuite = 'correo_gsuite';
    const destinatarioYahoo1 = 'proyectos@tekcomit.net';
    const destinatarioYahoo2 = 'correo_destino_yahoo_2';

    // Configurar el transportador de correo electrónico
    /*
    const transporterGsuite = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'correo_gsuite',
            pass: 'ddqlccckcfkcilzm'
        }
    });
    */
    const transporterYahoo1 = nodemailer.createTransport({
        service: 'yahoo',
        auth: {
            user: 'proyectos@tekcomit.net',
            pass: 'Wargreymon11.'
        }
    });
/*
    const transporterYahoo2 = nodemailer.createTransport({
        service: 'yahoo',
        auth: {
            user: 'cffxuwx',
            pass: 'jnunucnud'
        }
    });

    const mailOptions = {
        from: email,
        to: `${destinatarioGsuite}, ${destinatarioYahoo1}, ${destinatarioYahoo2}`,
        subject: 'Contacto cliente',
        html: contentHTML
    };
    */
    const mailOptions = {
        from: email,
        to: `${destinatarioYahoo1}`,
        subject: 'Contacto cliente',
        html: contentHTML
    };

    /*
    transporterGsuite.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Correo electrónico enviado a G Suite: ' + info.response);
        }
    });
    */
    transporterYahoo1.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Correo electrónico enviado a Yahoo: ' + info.response);
        }
    });
    /*
    transporterYahoo2.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Correo electrónico enviado a Yahoo: ' + info.response);
        }
    });
    */
    //vaciar elementos del formulario
    req.body = {};

    //redirigir a la ruta de contacto
    res.redirect('/contacto')

});


module.exports = router
