/*Para o uso do dotenv, usamos os seguintes comandos*/

const dotenv = require('dotenv');
const connectToDatabase = require('./src/database/connect');
dotenv.config();
connectToDatabase();

/*Todos os require ficam após esses comandos */
require('./modules/t1');
require('./modules/dk');
require('./modules/drx');
require('./modules/geng');
require('./modules/kdf');
require('./modules/kt');
require('./modules/lsb');
require('./modules/ns');
require('./modules/brion');
require('./modules/hle');