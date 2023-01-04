/*Função que chama a sí mesma, única preocupação é quando que a função deve parar de se chamar de volta*/

function recursiva(max) {
    console.log(max); //0 //1
    if (max >= 100) {
        return;
    }
    max++; //1 //2
    recursiva(max);
};

recursiva(0);