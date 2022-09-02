let day=document.getElementById('days');
let hr=document.getElementById('hrs');
let min=document.getElementById('min');
let sec=document.getElementById('sec');
let endDate=new Date("Sep 2, 2022 09:07:30");
let endTime=endDate.getTime();

let countdown=setInterval(() => {
    let today=new Date();
    let todayTime=today.getTime()
    let timeLeft=endTime-todayTime;
    let oneMin=1000*60;
    let oneHr=oneMin*60;
    let oneDay=24*oneHr;

    let dayLeft=Math.floor(timeLeft/oneDay)
    let hrsLeft=Math.floor((timeLeft %oneDay) /oneHr)
    let minLeft=Math.floor((timeLeft%oneHr)/oneMin)
    let secLeft=Math.floor((timeLeft%oneMin)/1000)
    console.log(dayLeft,hrsLeft);

    day.innerHTML=dayLeft;
    hr.innerHTML=hrsLeft;
    min.innerHTML=minLeft
    sec.innerHTML=secLeft
    if (endTime<todayTime) {
        clearInterval()
    day.innerHTML=00;
    hr.innerHTML=00;
    min.innerHTML=00
    sec.innerHTML=00
    window.location.href='birthday.html'
    }
}, 1000);


