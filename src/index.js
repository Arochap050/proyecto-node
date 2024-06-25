import express from 'express';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
import {join, dirname} from 'path';
import { fileURLToPath } from 'url';
import usuariosRoutes from './routes/usuarios.routes.js'

//inicializacion
const app = express();
const _dirname = dirname(fileURLToPath(import.meta.url));

//configuraciones
app.set('port', process.env.PORT || 3000);
app.set('views', join(_dirname, 'views'));
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: join(app.get('views'), 'layouts'),
    partialsDir: join(app.get('views'), 'partials'),
    extname: '.hbs',
}));
app.set('view enigine', '.hbs');

//middlewaare
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//ruotes o rutas pa los que no saben ingles XD
app.get('/', (req, res)=>{
    res.render('index.hbs');
});

app.use(usuariosRoutes);

//archivos publicos
app.use(express.static(join(_dirname + '/public')));

//inicio del servidor
app.listen(app.get('port'), ()=>console.log('Servidor conectado por el puerto', app.get('port')));