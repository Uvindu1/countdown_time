const daysEl =document.getElementById('days');
const hoursEl =document.getElementById('hours');
const minsEl =document.getElementById('mins');
const secondsEl =document.getElementById('seconds');

const newYears="11 10 2021";

function countdown(){
    const newYearsDate =new Date(newYears);//memagin karanne udin globali deeepu string eka date ekak bawata hadunwa denoo
    const currentDate =new Date();//ada dinaya memagin gathaheka
    const seconds = (currentDate - newYearsDate)/1000;//mehi enne dawas athara wenasa mili thappara wlin
    const days = Math.floor(seconds/3600/24);//memagin karanne purna sankayawata watayanna kiyana eka
    const hours = Math.floor(seconds/3600)% 24;
    const minutes = Math.floor(seconds/60)% 60;
    const prvSeconds = Math.floor(seconds)% 60;

daysEl.innerHTML= days;
hoursEl.innerHTML= hours;
minsEl.innerHTML= minutes;
secondsEl.innerHTML= prvSeconds;    
  
}

countdown();

setInterval(countdown,1000);