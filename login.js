let form = document.getElementById("form");
let body = document.getElementById("body");


form.addEventListener("submit", login =>{
    let userName = document.getElementById("userName").value;
    let userPass = document.getElementById("userPass").value;
    login.preventDefault();
    if (userName != "" && userPass != ""){
       redirec();
    } else {
        let error = document.createElement("p");
        error.innerText = "Todos los campos son obligatorios";
        document.getElementById("error").appendChild(error);
        setTimeout(errorMs, 2000);
        function errorMs(){
            document.getElementById("error").removeChild(error);
        }
    }
})
function redirec(){
    body.innerHTML = `
        <html>
        <head>
            <meta http-equiv="Refresh" content="3;url=login.html">
        </head>
        <body class="azulOscuro d-flex justify-content-center">
            <div class="container" style="margin-top: 20%;">
                <h1 class="text-center">Bienvenido</h1>
                <p class="text-center">Seras rediccionado en instantes a tu bliblioteca</p>
            </div>
        </body>
        </html>
       `
}
