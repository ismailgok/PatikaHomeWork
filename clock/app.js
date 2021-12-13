let submit = document.querySelector('.submit')
const input = document.querySelector('input');
const log = document.getElementById('log');
const ad = document.getElementById('ad');
const pDate = document.querySelector('.date')
const saat = document.querySelector('#saat');




input.addEventListener('keyup', logKey);


let value;

function myclock(){
  const date = new Date()
  let h,m,s;
  h = date.getHours();
  m = date.getMinutes();
  s = date.getSeconds();
  let session = date.getDay();


    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
  if(session === 1){
    session = "Pazartesi";
  }if(session === 2){
    session = "Salı";
  }if(session === 3){
    session = "Çarşamba";
  }if(session === 4){
    session = "Perşembe";
  }if(session === 5){
    session = "Cuma";
  }if(session === 6){
    session = "Cumartesi";
  }if(session === 7){
    session = "Pazar";
  }

  value = h+":"+m+":"+s +" "+ session;

  saat.innerText = value;
  saat.TextContent = value;
  setTimeout(myclock, 1000);
}

function logKey(e) {
  log.textContent = `Merhaba, ${e.target.value}! Hoş geldin!`
  log.style.display="none";
  log.style.color="#99ffcc"
}

submit.addEventListener("click",run)
function run(e){
  log.style.display="block";
  input.style.display="none";
  submit.style.display="none";
  ad.style.display="none"
  pDate.innerHTML = value;
  saat.style.display="block";

}
myclock()
