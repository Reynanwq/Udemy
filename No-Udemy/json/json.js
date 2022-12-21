/*O QUE É JSON*/

//json.parse() -> converte texto json em objetos
//json.stringfy() -> Converter objetos em texto padrão json

const car = {
    marca: "Ferrari",
    modelo: "Ferrari 488",
    ano: 2020,
    Peso: "1475 Kg",
    Potência: 669,
    Cilindrada: "3902 cm³"
}
let converteTexto = JSON.stringify(car);
document.getElementById('area').innerHTML = converteTexto;

//convertere novamente para objeto
let converteObjeto = JSON.parse(converteTexto);
console.log(car.marca);
console.log(car.Cilindrada);