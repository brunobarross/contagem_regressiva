const diasContainer = document.querySelector("#days")
const horasContainer = document.querySelector("#hours")
const minutosContainer = document.querySelector("#minutes")
const segundosContainer = document.querySelector("#seconds");
const proximoAnoContainer = document.querySelector("#year")
const spinnerLoading = document.querySelector("#loading");
const contadorContainer = document.querySelector("#countdown")


const proximoAno = new Date().getFullYear() + 1;
const anoNovo = new Date(`January 01 ${proximoAno} 00:00:00`);


proximoAnoContainer.textContent = proximoAno;

const pegarUnidade = unidade => unidade < 10 ? "0" + unidade : unidade;

const inserirValoresContador = ({dias, horas, minutos, segundos}) => {
    diasContainer.textContent = pegarUnidade(dias);
    horasContainer.textContent = pegarUnidade(horas);
    minutosContainer.textContent = pegarUnidade(minutos);
    segundosContainer.textContent = pegarUnidade(segundos)
}


const atualizarContador = () => {
    const tempoAtual = new Date();
    const diferenca = anoNovo - tempoAtual; // subtração ano que estamos - ano desejado 
    const dias = Math.floor(diferenca / 1000 / 60 / 60 / 24) // resulta no numero de dias restante a partir do momento em que estamos
    const horas = Math.floor(diferenca / 1000 / 60 / 60) % 24 // resulta no numero de horas restante a partir do momento em que estamos
    const minutos = Math.floor(diferenca / 1000 / 60) % 60 // resulta no numero de minutos restante a partir do momento em que estamos
    const segundos = Math.floor(diferenca / 1000) % 60 // resulta no numero de segundos restante a partir do momento em que estamos

    inserirValoresContador({ dias, horas, minutos, segundos});
}


const contadorDisplay = () => {
    spinnerLoading.remove();
    contadorContainer.style.display = "flex";
}

setTimeout(contadorDisplay, 1000); // depois de um segundo que a pagina for carregada, essa função vai ser executada.

setInterval(atualizarContador, 1000);