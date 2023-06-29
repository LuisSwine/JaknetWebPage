const express = require('express')
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


module.exports = router
