/*---------------------  AVL -----------------------*/

//contrutor do NÓ
class NoAVL {
    constructor(chave, dado) {
        this.chave = chave;
        this.dado = dado;
        this.esquerda = null;
        this.direita = null;
        this.altura = 0;
    }
}

class ArvoreAVL {
    constructor() {
        this.raiz = null;
    }
}

//ela chama a insert_aux, mas definife que a raiz será o novo nó criado
function insert(chave, dado) {
    this.raiz = this.insert_aux(chave, dado);
}


function insert_aux(chave, dado, no = this.raiz) {
    //verifica se o NÓ é nulo
    if (no === null) {
        no = new NoAVL(chave, dado);
    } else if (chave < no.chave) {
        no.esquerda = this.insert_aux(chave, dado, no.esquerda);
    } else if (chave > no.chave) {
        no.direita = this.insert_aux(chave, dado, no.direita);
    } else {
        throw Error("Chave já definida ou não numerica");
    }
    //balancear a raiz  
    return this.rebalanceamento(no);
}

//ROTAÇÃO DIREITA
function rotacaoDireita(no) {

}

//ROTAÇÃO ESQUERDA
function rotacaoEsquerda(no) {

}

//ROTAÇÃO DIREITA E ESQUERDA
function rotacaoDireitaEsquerda(no) {

}

//ROTAÇÃO ESQUERDA E DIREITA
function rotacaoEsquerdaDireita(no) {

}


function altura(no) {
    //se o NÓ for nulo, ele tem altura -1   
    return no == null ? -1 : no.altura;
}

function atualizaAltura(no) {
    //math.max: retorna o maior entre 2 números
    no.altura = 1 + Math.max(this.altura(no.esquerda), this.altura(no.direita));
}

function fator_balanceamento(no) {
    if (no !== null) {
        return (this.altura(no.direita) - this.altura(no.esquerda));
    } else {
        return 0;
    }
}


function rebalanceamento(no) {
    if (no === null) {
        return no;
    }
    if (this.fator_balanceamento(no) < -1) {
        if (this.altura(no.esquerda.esquerda) >= this.altura(no.esquerda.direita)) {
            no = this.rotacaoDireita(no);
        } else {
            no = this.rotacaoEsquerdaDireita(no);
        }
    } else if (this.fator_balanceamento(no) > 1) {
        if (this.altura(no.direita.direita) >= this.altura(no.direita.esquerda)) {
            no = this.rotacaoEsquerda(no);
        } else {
            no = this.rotacaoDireitaEsquerda(no);
        }
    }
    this.atualizaAltura(no);
    return no;
}