const mongoose = require('mongose'); //fazendo requisição da biblioteca

const connectToDataBase = async() => {
    await mongoose.connect(
        `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.dkhh6ic.mongodb.net/database?retryWrites=true&w=majority`,
        (error) => {
            if (error) {
                return console.log("Ocorreu um erro ao tentar se conectar ao banco de dados", error);
            }
            return console.log("Conexão no banco de dados realizada com sucesso!");
        }
    );
};

module.exports = connectToDataBase;