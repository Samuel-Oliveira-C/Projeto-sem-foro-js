/*Criar um Semaforo de transito
    o que eu preciso:
    foto de semaforo igual
    vermelho
    amarelo
    verde
-----------------------------------
Lógica:
    dentro de um determinado tempo um dos três sinais irá aparecer (Assincronismo) ao clicar no botão
------------------------------------------------------------------------------------------
Style ?

*/
class Semaforo{
    constructor(elementoBotao,elementoImg){
        this.elementoBotao = elementoBotao;
        this.elementoImg = elementoImg;
    }
    getElementoBotao(){
        return this.elementoBotao;
    }
    getElementoImg(){
        return this.elementoImg;
    }

    sinalCor = {
        vermelho: "Assets/IMG/Sinal Vermelho.jpg",
        amarelo: "Assets/IMG/Sinal Amarelo.jpg",
        verde: "Assets/IMG/Sinal Verde.jpg"
    }

    sinal = "vermelho";
    
    desaparecerBotao(){
        this.getElementoBotao().style.display = "none";
    }
}