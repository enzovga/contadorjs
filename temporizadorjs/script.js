const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEls = document.getElementById('seconds');



const natal = '24 Dec 2022'

function temporizador() {
  const dataNatal = new Date(natal);
  const dataAtual = new Date();
  
  const segundosTotal = (dataNatal - dataAtual) / 1000;
  const dias = Math.floor(segundosTotal / 3600 / 24);
  const horas = Math.floor(segundosTotal/3600) % 24;
  const minutos = Math.floor(segundosTotal/60) % 60;
  const segundos = Math.floor(segundosTotal) % 60;


  daysEl.innerHTML = dias;
  hoursEl.innerHTML = horas;
  minsEl.innerHTML = minutos;
  secondsEls.innerHTML = segundos;
}

temporizador();
setInterval(temporizador, 1000)