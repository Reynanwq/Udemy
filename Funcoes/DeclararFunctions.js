function helloFriend() {
    console.log('Hello Friend');
}
helloFriend();

const funcaoArrow = () => {
    console.log("Sou uma Arrow function");
};

funcaoArrow();


//Declarar a função em um Método
const objeto = {
    falar() {
        console.log("Estou te falando...");
    }
};

objeto.falar();