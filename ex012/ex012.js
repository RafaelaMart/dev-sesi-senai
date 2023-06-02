var nm = parseInt(Math.random() * 100)
   var nr = 0

   function jpv() {
    var guess = prompt("digite o  numero que voce deseja")
    nr++
    if (guess < nm){
        document.getElementById("jpv").innerHTML += `${guess} < o que o numero que eu Pensei. ${nr} tentativas <br>`
   } else if (guess > nm){
        document.getElementById("jpv").innerHTML += `${guess} > o que o numero que eu Pensei. ${nr} tentativas <br>`
   } else {
        document.getElementById("jpv").innerHTML += `${guess} = o que o numero que eu Pensei. ${nr} tentativas <br>`
   }
}