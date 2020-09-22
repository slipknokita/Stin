let form = document.getElementById("form");
let body = document.getElementById("body");
let users = JSON.parse(localStorage.getItem("users"));

console.log(users)
form.addEventListener("submit", login =>{
    login.preventDefault();
    let userLogin = document.getElementById("userName").value;
    let userPass = document.getElementById("userPass").value;
    function veri (){
        for (i= 0; i < users.length; i++){
            if (userLogin == users[i].userName && userPass == users[i].password){
                redirec();
            }
        }
    }
    veri();
    if (veri() != true){
        let error = document.createElement("p");
        error.innerText = "Nombre de usuario y/o contraseña erroneo.";
        document.getElementById("error").appendChild(error);
        setTimeout(errorMs, 2000);
        function errorMs(){
            document.getElementById("error").removeChild(error);
        } 
    }
});
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
