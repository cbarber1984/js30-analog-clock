const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

const hourDisplay = document.querySelector('.hour-display')
const minDisplay = document.querySelector('.min-display')
const secDisplay = document.querySelector('.sec-display')
const amPmDisplay = document.querySelector('.am-pm-display')

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  secDisplay.innerHTML = `<span>${seconds}</span>`
  
  console.log("seconds = " + seconds);
  
  const min = now.getMinutes();
  const minDegrees = ((min / 60) * 360) +90;
  minuteHand.style.transform = `rotate(${minDegrees}deg)`
  console.log("minutes = " + min)
  minDisplay.innerHTML = `<span>${min}</span>`

  const hours = now.getHours();
  const hourDegrees = ((hours / 12) * 360) + ((min/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`
  console.log("hours = " + hours)
  console.log("hoursDegrees = " + hourDegrees)
  
  if (hours <= 12) {
    hourDisplay.innerHTML = `<span>${hours}</span>`;
} else {
    const pmHours = hours - 12;
    hourDisplay.innerHTML = `<span>${pmHours}</span>`;
  }

  if (hours > 11) {
    amPmDisplay.innerHTML=`<span>p.m.</span>`
} else {
      amPmDisplay.innerHTML=`<span>a.m.</span>`
  }

}

setInterval(setDate, 1000);