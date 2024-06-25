import e, { Router } from 'express';
import pool from '../database.js';

const router = Router();

router.get('/add', (req, res)=>{
    //el render se utiliza para inicar una ruta de una nueva direcion hacia un archivo hbs...(html)
    res.render('usuarios/registrar-user.hbs')
});

router.get('/list', async(req, res)=>{

    try {
        //se emplea la siguiente linea de codigo para ejecutar una consulta en la base de datos 
        const [result] = await pool.query('SELECT * FROM usuarios');
        //console.log(result);
        res.render('usuarios/list.hbs',{usuarios: result});

    } catch (error) {
        res.status(500).json({message:error.message});
    }
});

//se utiliza la siquiente ruta tipo(post) ya que se van a enviar datos de un formulario
router.post('/add', async(req, res)=>{
    try {
        //aqui se implementa una nueva conslta pero para insertar datos en la base de datos
        //se procede a recibir los datos que llegan del formulario
        const {nombre, apellido, edad} = req.body;
        //se crea un objeto para contener(definir) los datos que se reciben
        const newUsuarios = {
            nombre, apellido, edad
        
        };
        
        await pool.query('INSERT INTO usuarios SET ?',[newUsuarios]);
        //una vez guardado los datos se redirecciona a la ruta siguiente::
        res.redirect('/list');

    } catch (error) {
        res.status(500).json({message:error.message});

    }
});

export default router;

//validar ingresos de usuarios