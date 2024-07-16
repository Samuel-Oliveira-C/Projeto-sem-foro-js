const semaforo = new Semaforo(document.querySelector("button"), document.querySelector("img"));

document.querySelector("button").addEventListener("click",() =>{
    semaforo.desaparecerBotao();
    setInterval(() => {
        switch (semaforo.sinal) {
            case "vermelho":
                semaforo.elementoImg.setAttribute("src",semaforo.sinalCor.vermelho);
                semaforo.sinal= "amarelo"
                break;
            case "amarelo":
                semaforo.elementoImg.setAttribute("src",semaforo.sinalCor.amarelo);
                semaforo.sinal = "verde"
                break;
            case "verde":
                semaforo.elementoImg.setAttribute("src",semaforo.sinalCor.verde);
                semaforo.sinal = "vermelho"
                break;            
            default:
                console.error("Cor invalida meu Jovem!!!");
                break;
        }
    }, 3000);
})