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

function fator_balanceamento() {
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
    if (this.fa) {

    }

}