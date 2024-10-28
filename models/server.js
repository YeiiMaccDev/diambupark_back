const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8080;

        // Paths de la API
        this.paths = {
            auth: '/api/auth',
            search: '/api/search',
            users: '/api/users',
            uploads: '/api/uploads',
            securityQuestions: '/api/security-questions', // Nuevo módulo para preguntas de seguridad
            userSecurityAnswers: '/api/user-security-answers' // Nuevo módulo para respuestas de seguridad de usuario
        }

        // Conectar a la base de datos
        this.connectDB();

        // Middlewares
        this.middlewares();

        // Rutas de la aplicación
        this.routes();
    }

    async connectDB() {
        await dbConnection();
    }

    middlewares() {

        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

        // Directorio público
        this.app.use(express.static('public'));

        // Carga de archivos
        this.app.use(fileUpload({
            useTempFiles: true,
            tempFileDir: '/tmp/',
            createParentPath: true
        }));
    }

    routes() {
        this.app.use(this.paths.auth, require('../routes/auth'));
        this.app.use(this.paths.search, require('../routes/search'));
        this.app.use(this.paths.users, require('../routes/user'));
        this.app.use(this.paths.uploads, require('../routes/upload'));
        this.app.use(this.paths.securityQuestions, require('../routes/securityQuestion')); // Ruta de SecurityQuestions
        this.app.use(this.paths.userSecurityAnswers, require('../routes/userSecurityAnswer')); // Ruta de UserSecurityAnswers
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto: ', this.port);
        });
    }
}

module.exports = Server;
