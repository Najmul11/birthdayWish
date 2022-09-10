// countdown
let days=document.getElementById('days');
let hours=document.getElementById('hours');
let minutes=document.getElementById('minutes');
let seconds=document.getElementById('seconds');
let endDate=new Date("Sep 17, 2022 00:00:00");
let endTime=endDate.getTime();

let countdown=setInterval(() => {
    let today=new Date();
    let todayTime=today.getTime()
    let timeLeft=endTime-todayTime;
    let oneMinute=1000*60;
    let oneHour=oneMinute*60;
    let oneDay=24*oneHour;

    let daysLeft=Math.floor(timeLeft/oneDay)
    let hoursLeft=Math.floor((timeLeft % oneDay) /oneHour)
    let minutesLeft=Math.floor((timeLeft% oneHour)/oneMinute)
    let secondsLeft=Math.floor((timeLeft% oneMinute)/1000)
    days.innerHTML=daysLeft;
    hours.innerHTML=hoursLeft;
    minutes.innerHTML=minutesLeft
    seconds.innerHTML=secondsLeft
    if (endTime<todayTime) {
        clearInterval()
    days.innerHTML=00;
    hours.innerHTML=00;
    minutes.innerHTML=00
    seconds.innerHTML=00
    window.location.href='birthday.html'
    }
}, 1000);

// music 
let music=new Audio();
music.src="audio/bits.mp3"
music.loop=true;
music.play();

// mute/unmute  
let mute=document.getElementById('mute');
let unmute=document.getElementById('unmute');
unmute.style.display='none'
// mute function

mute.addEventListener('click',()=>{
    music.muted=true;
    mute.style.display='none';
    unmute.style.display='block';
})
// // unmute function 
unmute.addEventListener('click',()=>{
    music.muted=false;
    mute.style.display='block';
    unmute.style.display='none';
})



