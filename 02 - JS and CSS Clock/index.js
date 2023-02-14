const secondHand = document.querySelector('.second-hand')
const minutesHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

const setDate = () => {
    const now = new Date()
    const seconds = now.getSeconds()
    const secondDeg = ((seconds / 60) * 360) + 90 //90 добавили из-за того, что стартовая позиция стрелки = 90градусов
    secondHand.style.transform = `rotate(${secondDeg}deg)`
    
    const minutes = now.getMinutes()
    const minutesDeg = ((minutes / 60) * 360) + 90
    minutesHand.style.transform = `rotate(${minutesDeg}deg)`

    const hour = now.getHours()
    console.log(hour);
    const hourDeg = ((hour / 12) * 360) + 90
    hourHand.style.transform = `rotate(${hourDeg}deg)`
}

setInterval(setDate, 1000)