const min = document.querySelector('#minutos')
const seg = document.querySelector('#segundos')
const mile = document.querySelector('#milesimos')
const ini = document.querySelector('#iniciar')
const pau = document.querySelector('#pausar')
const cont = document.querySelector('#conti')
const res = document.querySelector('#resetar')

let interval;
let minutos =0;
let segundos =0;
let miles =0;
let pause = false;

ini.addEventListener('click', iniciar)
pau.addEventListener("click", pausar);
cont.addEventListener("click", conti);
res.addEventListener("click", resetar);
function iniciar(){

    interval = setInterval(() =>{
        if(!pause){
            miles +=10
            if(miles ===1000){
                segundos++;
                miles = 0;
            }
            if(segundos === 60){
                minutos++;
                segundos = 0;
            }
            min.innerHTML = formatTime(minutos);
           seg.innerHTML= formaTime(segundos);
           mile.innerHTML= formatMilliseconds(miles);
        }
    },10);
    ini.style.display = 'none'
    pau.style.display = 'inline-block'
}
function pausar() {
    pause = true;
    pau.style.display = 'none'
    cont.style.display = 'inline-block'
}
function conti() {
    pause = false;
    cont.style.display = 'none'
    pau.style.display = 'inline-block'
}

function resetar(){
    clearInterval(interval)
    minutos =0;
    segundos = 0;
    miles = 0;
    pause = false;
    min.innerHTML = '00';
    seg.innerHTML = '00'
    mile.innerHTML = '000'
    ini.style.display = "inline-block";
  pau.style.display = "none";
  cont.style.display = "none";
}
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
  
  function formatMilliseconds(time) {
    return time < 100 ? `0${time}`.padStart(3, "0") : time;
  }
  