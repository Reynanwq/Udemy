//Trabalhar com datas

const date = new Date(0); //01/01/1970 ÉPOCA DO UNIX
console.log(date.toString());

//Exata data que estou executando
const nowData = new Date();
console.log(nowData.toString());

//TODAS AS FUNCOES DO USO DATE
const data = new Date('2022-11-15 16:10:43.100');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth());
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minuto', data.getMinutes());
console.log('Segundos', data.getSeconds());
console.log('Milessegundos', data.getMilliseconds());
console.log('Dia da Semana', data.getDay()); // 0 = domingo e 6 = sábado
console.log(Date.now()); //data atual em milissegundos