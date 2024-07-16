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

    sinalCor = {
        vermelho: "Assets/IMG/Sinal Vermelho",
        amarelo: "Assets/IMG/Sinal Amarelo",
        verde: "Assets/IMG/Sinal Verde"
    }

    sinal = "vermelho";

    iniciarSemaforo() {
        setInterval(() => {
            switch (this.sinalCor) {
                case "vermelho":
                    this.sinalCor = "amarelo"
                    break;
                case "amarelo":
                    this.sinalCor = "verde"
                    break;
                case "verde":
                    this.sinalCor = "vermelho"
                    break;            
                default:
                    console.error("Cor invalida meu Jovem!!!");
                    break;
            }
        }, 3000);
    }
}