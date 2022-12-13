

const cadastroButton = document.querySelector("#cadastro");


cadastroButton.addEventListener("click", (e)=>{
    e.preventDefault();
    
    const nome = document.querySelector("#nome").value;
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const passwordConfirmation = document.querySelector("#passwordConfirmation").value;

    var novoUsuario = { email: email, senha: password, nomedeusuario: username, nome: nome}


    console.log(novoUsuario);

    usuarios.push(novoUsuario);

    console.log(usuarios);
});


