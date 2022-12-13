const loginButton = document.querySelector('#loginButton');

var usuarios = [
    {email: `matilda@gmail.com`, senha: 12345678, nomedeusuario: 'matilda', nome:'Matheus Alves'},
    {email: `matilda2@gmail.com`, senha: 11234567, nomedeusuario: 'matilda', nome:'Matheus Alves'},
    {email: `matilda3@gmail.com`, senha: 12245678, nomedeusuario: 'matilda', nome:'Matheus Alves'},
    {email: `matilda4@gmail.com`, senha: 12344678, nomedeusuario: 'matilda', nome:'Matheus Alves'}
];


loginButton.addEventListener('click', (e)=>{
    e.preventDefault();

    var usuarioDigitado = {email: document.querySelector('#email').value , senha:document.querySelector('#password').value};

    console.log(usuarioDigitado);

    for (let i = 0; i < usuarios.length; i++) {
        const usuario = usuarios[i];
        console.log(usuario);
        if(usuario.email == usuarioDigitado.email && usuario.senha ==           usuarioDigitado.senha){
            window.location.href = './index.html';
           
            break;
        }
        else{
            window.alert("Email ou senha incorretos!");
            break;
        }
    }
    
       
});


function removeSpan(span){
    span.innerText = '';
}


const emailInp = document.querySelector('#email')

emailInp.addEventListener('click', ()=>{
 
    if(document.getElementById.value !== '')
    {
        removeSpan(document.getElementById('emailIcon'));
    }
});
const senhaInp = document.querySelector('#password')

senhaInp.addEventListener('click' ,()=>{
        if( document.getElementById('passwordIcon') !== '')
        {
            removeSpan(document.getElementById('passwordIcon'));
        }
    });




