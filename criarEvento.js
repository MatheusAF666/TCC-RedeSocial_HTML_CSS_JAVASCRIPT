//variaveis

const buttonCE = document.querySelector('.Criar');
const CEcard = document.querySelector('.criar-evento');
const fecharCE = document.querySelector('#fecharCE');
const addDescButton = document.querySelector('#adicionar-descriçao');
const addDescContainer = document.querySelector('.addDescContainer');
const concluirAddDesc = document.querySelector('.addDescContainer span');


buttonCE.addEventListener('click', ()=>{
    CEcard.style.display = 'grid';
});

fecharCE.addEventListener('click', ()=>{
    CEcard.style.display = 'none';
    addDescContainer.style.display = 'none';
});

addDescButton.addEventListener('click', ()=>{
    addDescContainer.style.display = 'grid';
});

concluirAddDesc.addEventListener('click', ()=>{
    addDescContainer.style.display = 'none';
});

