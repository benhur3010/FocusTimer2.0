import Sounds from './sounds.js'

export default function Timer({ minutesDisplay, secondsDisplay }) {
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

  function hold() {
    clearTimeout(timerTimeOut)
  }

  function countDown() {
    console.log(timerTimeOut)

    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)

      if (minutes <= 0 && seconds <= 0) {
        Sounds().timeEnd()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        minutes--
      }

      minutesDisplay.textContent = String(minutes).padStart(2, '0')
      secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')

      countDown()
    }, 1000)
  }

  function moreFiveMinutes() {
    minutes = Number(minutesDisplay.textContent) + 5
    if (minutes > 90) {
      minutes = 90
    }
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
  }

  function lessFiveMinutes() {
    minutes = Number(minutesDisplay.textContent) - 5
    if (minutes < 0) {
      minutes = 0
    }
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
  }

  return {
    countDown,
    hold,
    moreFiveMinutes,
    lessFiveMinutes
  }
}
