/*O QUE É "module.exports"
O QUE É "SCHEMA"
*/
const mongoose = require('mongoose'); //requisição

const userSchema = new mongoose.Schema({
    firstName: {
        type: String, //o tipo
        required: true, //possibilita o uso
    },
    LastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 7, //esse password precisa ter no minimo 7 caracteres
    },
});

const userModel = mongoose.model("user", userSchema) //fazer o model em sí
module.exports = userModel; //Para exportar o userModel