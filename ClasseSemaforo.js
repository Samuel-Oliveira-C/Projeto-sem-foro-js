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
        vermelho: "Assets/IMG/Sinal Vermelho.jpg",
        amarelo: "Assets/IMG/Sinal Amarelo.jpg",
        verde: "Assets/IMG/Sinal Verde.jpg"
    }

    sinal = "vermelho";

    iniciarSemaforo() {
        setInterval(() => {
            switch (this.sinal) {
                case "vermelho":
                    this.elementoImg.setAttribute("src",this.sinalCor.vermelho);
                    this.sinal= "amarelo"
                    break;
                case "amarelo":
                    this.elementoImg.setAttribute("src",this.sinalCor.amarelo);
                    this.sinal = "verde"
                    break;
                case "verde":
                    this.elementoImg.setAttribute("src",this.sinalCor.verde);
                    this.sinal = "vermelho"
                    break;            
                default:
                    console.error("Cor invalida meu Jovem!!!");
                    break;
            }
        }, 3000);
    }
}