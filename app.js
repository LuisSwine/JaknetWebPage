//invocacion de modulos a utilizar
const express = require("express")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")
const path = require('path');

//invocamos express
const app = express()

//motor de plantillas
app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req,res)=>{
    res.render('index');
})

//Carpeta public para los archivos estaticos
app.use(express.static('public'))

//Configuramos procesamiento de datos
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//Inicializamos variables de entorno
dotenv.config({path: './env/.env'})

//Inicializamos cookies
app.use(cookieParser())

//Llamamos al enrutador
app.use('/', require('./routes/router'))

//Eliminar cache
/*app.use(function(req,res,next){
    if(!req.user)
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    next();
})*/

//Puerto del servidor
app.listen(3000, ()=>{
    console.log('Server corriendo en el puerto 3000')
})
