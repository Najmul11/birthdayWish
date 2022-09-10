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
// music.play();

// // play/pause  
let play=document.getElementById('play');
let pause=document.getElementById('pause');
pause.style.display='none'

// play function
play.addEventListener('click',()=>{
    music.play();
    play.style.display='none';
    pause.style.display='block';
})
// pause function 
pause.addEventListener('click',()=>{
    music.pause();
    pause.style.display='none';
    play.style.display='block';
})



