// countdown
let days=document.getElementById('days');
let hours=document.getElementById('hours');
let minutes=document.getElementById('minutes');
let seconds=document.getElementById('seconds');
let endDate=new Date("Sep 13, 2022 12:55:10");
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
    // music.play()
    }
}, 1000);

// music
let music=new Audio();
music.src="audio/bits.mp3"
music.loop=true;

 // play/pause  
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


// body background

// Some random colors
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});



