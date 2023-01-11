const mongoose = require('mongoose'); //fazendo requisição da biblioteca mongodb

const connectToDatabase = async() => {
    await mongoose.connect( //uso do await é similar ao try catch
        `mongodb+srv://lck:<password>@lck.8g5ogdy.mongodb.net/?retryWrites=true&w=majority`,
        (error) => {
            if (error) {
                return console.log("Ocorreu um erro ao tentar se connectar ao banco de dados");
            }
            return console.log("Conexão ao banco de dados realizada com sucesso");
        }
    );
};


module.exports = connectToDatabase;