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