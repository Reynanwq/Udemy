//IMPORTAR O PERSON DENTRO DO INDEX

class Person {
    constructor(name) {
        this.name = name;
    }

    sayMyName() {
        return `My name is ${this.name}`;
    }
}
//AGORA IREMOS EXPORTAR

module.exports = {
    Person, //Exportar o Person     
};