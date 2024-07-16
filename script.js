const semaforo = new Semaforo(document.querySelector("button"), document.querySelector("img"));

document.querySelector("button").addEventListener("click",semaforo.iniciarSemaforo());