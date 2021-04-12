var secretNumber = parseInt(Math.random() * 10)

var attempts = 3

while (attempts > 0) {
var toKick = parseInt(prompt("Digite um número entre 0 e 10"))
if (secretNumber == toKick) {
    alert("Acertou!")
    break //O break é é uma forma de interromper o while
} else if (toKick > secretNumber) {
    alert("O número secreto é menor")
    attempts = attempts - 1
} else if (toKick < secretNumber) {
    alert("O número secreto é maior")
    attempts = attempts - 1
} } 

if (toKick != secretNumber){
    alert("Suas tentativas acabaram! O número secreto é " + secretNumber)
}