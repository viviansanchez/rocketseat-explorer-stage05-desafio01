const fortuneCookiePhrases = [
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
  "Não há que ser forte. Há que ser flexível.",
  "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
  "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos",
  "Não importa o tamanho da montanha, ela não pode tapar o sol.",
  "O bom-senso vale mais do que muito conhecimento.",
  "O riso é a menor distância entre duas pessoas."
]

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const fortuneCookie = document.querySelector('.screen1 img')
const btnOpenAnotherCookie = document.querySelector('.screen2 button')
const cookiePhrase = document.querySelector('.screen2 p')
let controlArrayIndex = Math.round(Math.random() * (fortuneCookiePhrases.length))

fortuneCookie.addEventListener('click', findTodaysLuck)
btnOpenAnotherCookie.addEventListener('click', toggleScreen)

function findTodaysLuck () {
  toggleScreen()
  selectRandomCookiePhrase()
}

function toggleScreen () {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function selectRandomCookiePhrase () {
 cookiePhrase.innerHTML = fortuneCookiePhrases[controlArrayIndex]

 controlArrayIndex = Math.round(Math.random() * (fortuneCookiePhrases.length))
}



