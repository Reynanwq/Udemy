const conteudo = document.getElementById('conteudo')
const filho = document.createElement("p");
const img = document.createElement('img');
filho.innerHTML = 'Filho adicionado com sucesso!';
img.src = "./assets/ReyBasketball.jpeg";

conteudo.appendChild(filho);
conteudo.appendChild(img);