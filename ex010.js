function login() {
    var usuario =  document.getElementById("usuario").value
    var senha = document.getElementById("senha").value

    if (usuario == "adm" && senha == "123") {
        document.getElementById("passou").innerHTML = `Login concluído`
    } else {
        document.getElementById("passou").innerHTML = `Usuário ou senha incorretos`

    }

    //operadores logicos
    //&& representa o E
    var login = "adm"
    var senha 

    //para sortearmos um valor aleatorio utilizamos o Match,random()
    //o Math.random retirna um número 
}