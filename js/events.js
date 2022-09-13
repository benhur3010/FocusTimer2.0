import {
  buttonPlay,
  buttonStop,
  buttonMoreTime,
  buttonLessTime,
  nature,
  rain,
  coffee,
  fire
} from './elements.js'

export default function ({ sound, timer }) {
  buttonPlay.addEventListener('click', function () {
    timer.countDown()
    sound.buttonPress()
    buttonPlay.disabled = true
    return
  })
 

  buttonStop.addEventListener('click', function () {
    timer.hold()
    sound.buttonPress()
    buttonPlay.disabled = false

  })

  buttonMoreTime.addEventListener('click', function () {
    timer.moreFiveMinutes()
    sound.buttonPress()
  })

  buttonLessTime.addEventListener('click', function () {
    timer.lessFiveMinutes()
    sound.buttonPress()
  })

  nature.addEventListener('click', function () {
    sound.playNature()
  })

  rain.addEventListener('click', function () {
    sound.playRain()
  })

  coffee.addEventListener('click', function () {
    sound.playCoffee()
  })

  fire.addEventListener('click', function () {
    sound.playFire()
  })
}
