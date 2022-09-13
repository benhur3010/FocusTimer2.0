export default function Sound() {

const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

const natureSound = new Audio("audios/Floresta.wav")
const rainSound = new Audio("audios/Chuva.wav")
const coffeeSound = new Audio("audios/Cafeteria.wav")
const fireSound = new Audio("audios/Lareira.wav")

natureSound.loop = true;
rainSound.loop = true;
coffeeSound.loop = true;
fireSound.loop = true;

function buttonPress() {
  buttonPressAudio.play()
}

function timeEnd() {
  kitchenTimer.play()
}

function playNature() {
  natureSound.play()
  rainSound.pause()
  coffeeSound.pause()
  fireSound.pause()
}

function playRain() {
  rainSound.play()
  natureSound.pause()
  coffeeSound.pause()
  fireSound.pause()
}

function playCoffee() {
  coffeeSound.play()
  natureSound.pause()
  rainSound.pause()
  fireSound.pause() 
}

function playFire() {
  fireSound.play()
  natureSound.pause()
  rainSound.pause()
  coffeeSound.pause() 
}

return {
  buttonPress,
  timeEnd,
  playNature,
  playRain,
  playCoffee,
  playFire
}
}




