function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error("x e y previsam ser do tipo Number");
    }
    return x + y;
}


try {
    console.log(soma(1, 2));
    console.log(soma('12', 2));
} catch (error) {
    console.log(error);
    console.log("alguma coisa mais friendly")
}