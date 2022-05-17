const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const seconds = String(date.getSeconds()).padStart(2,"0");
    const minutes = ("00"+ (date.getMinutes()).toString()).slice(-2);
    const hours = ("00"+ (date.getHours()).toString()).slice(-2);
    clock.innerText = `${hours}:${minutes}:${seconds}`;   
    
    
}   
getClock();
setInterval(getClock, 1000);

