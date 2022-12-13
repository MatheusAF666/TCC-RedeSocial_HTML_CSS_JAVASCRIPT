
// -------------------------- font size ------------------------

function fontSize(size) {
    removeSizeSelector();
    let fontsize;
    size.classList.toggle('active');

    if (size.classList.contains('font-size-1')) {
        fontsize = '10px';
        root.style.setProperty('----sticky-top', '5.4rem');
        root.style.setProperty('----sticky-top-right', '5.4rem');
        noti.style.top = '0.9rem';
        noti.style.right = '27rem';
        notiM.style.top = '0.9rem';
        notiM.style.right = '27rem';
        container.style.marginTop = '2rem';
    }
    else if (size.classList.contains('font-size-2')) {
        fontsize = '13px';
        root.style.setProperty('----sticky-top', '5.4rem');
        root.style.setProperty('----sticky-top-right', '-7rem');
        noti.style.top = '0.9rem';
        noti.style.right = '19.6rem';
        notiM.style.top = '0.9rem';
        notiM.style.right = '19.6rem';
        container.style.marginTop = '2rem';
    }
    else if (size.classList.contains('font-size-3')) {
        fontsize = '16px';
        root.style.setProperty('----sticky-top', '-2rem');
        root.style.setProperty('----sticky-top-right', '-17rem');
        container.style.marginTop = '2rem';
    }
    else if (size.classList.contains('font-size-4')) {
        fontsize = '19px';
        root.style.setProperty('----sticky-top', '-5rem');
        root.style.setProperty('----sticky-top-right', '-25rem');
        noti.style.top = '0.7rem';
        noti.style.left = '2.3rem';
        notiM.style.top = '0.7rem';
        notiM.style.left = '2.3rem';
        container.style.marginTop = '2rem';
    }
    else if (size.classList.contains('font-size-5')) {
        fontsize = '21px';
        root.style.setProperty('----sticky-top', '-12rem');
        root.style.setProperty('----sticky-top-right', '-25rem');
        noti.style.top = '0.7rem';
        noti.style.left = '2.3rem';
        notiM.style.top = '0.7rem';
        notiM.style.left = '2.3rem';
        container.style.marginTop = '2rem';
        nav.style.height = '4rem';
    }

    document.querySelector('html').style.fontSize = fontsize;

}

// ---------------------Paleta de cores --------------------
function paletaDeCores(color) {
    let primaryHue;
    changeActiveclass();

    if (color.classList.contains('color-1')) {
        primaryHue = 252;
    }

    if (color.classList.contains('color-2')) {
        primaryHue = 52;
    }

    if (color.classList.contains('color-3')) {
        primaryHue = 352;
    }

    if (color.classList.contains('color-4')) {
        primaryHue = 152;
    }

    if (color.classList.contains('color-5')) {
        primaryHue = 202;
    }

    color.classList.add('active');
    root.style.setProperty('--primary-color-Hue', primaryHue);
}

//-------------------------BackGround-------------------

function backG1() {
    whitecolorlightness = '100%';
    darkcolorlightness = '17%';
    lightcolorlightness = '95%';

    //add active class
    bg1.classList.add('active');
    //remove active class
    bg2.classList.remove('active');
    bg3.classList.remove('active');
    changeBG();
}
function backG2() {
    whitecolorlightness = '20%';
    darkcolorlightness = '95%';
    lightcolorlightness = '15%';

    //add active class
    bg2.classList.add('active');
    //remove active class
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changeBG();
}
function backG3() {
    whitecolorlightness = '10%';
    darkcolorlightness = '95%';
    lightcolorlightness = '0%';

    //add active class
    bg3.classList.add('active');
    //remove active class
    bg1.classList.remove('active');
    bg2.classList.remove('active');

    changeBG();
}

//--------------------- Aceitar ou recusar ------------------------

function Aceitar() {
    let requests = document.querySelectorAll('.request');
    requests.forEach((rItem) => {
        rItem.addEventListener('click', () => {
            rItem.style.display = 'none';
        });
    });
    solicitaçoesContent = '';
}
function Recusar() {
    let requests = document.querySelectorAll('.request');
    requests.forEach((rItem) => {
        rItem.addEventListener('click', () => {
            rItem.style.display = 'none';
        });
    });
    solicitaçoesContent = '';
}


//------------------------Selecionar menssagens ---------------------------

function selectM() {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
    messageMI.querySelector('.notifications-count').style.display = 'none';
}


//-----------------------Buscar Menssagens ------------------------
function buscarM() {
    let val = messageSearch.value.toLowerCase();
    document.querySelectorAll('.message').forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();

        if (name.indexOf(val) > -1) {
            chat.style.display = 'flex';
            console.log("deu certo");
            console.log(chat.className);
        }
        else {
            chat.style.display = 'none';
            console.log("deu errado");
             console.log(chat.className);
        }

    })
}


// ------------------------ Notification_popup -------------------------

function nPopUp(item) {
    changeActiveItem();
    item.classList.add('active');
    if (item.id != 'notifications') {
        document.querySelector('.notification-popup').
            style.display = 'none';
    }
    else {
        document.querySelector('.notification-popup').
            style.display = 'block';
        document.querySelector('.menu-item .notifications-count').style.display = 'none';
    }
}

//---------------------Exibir foto perfil e explorar---------------------------
function EFP() {
    let myPimg = document.querySelectorAll('.myposts div');

    myPimg.forEach((img) => {
        img.addEventListener('click', () => {
            let nome = img.className;
            document.querySelector('.EFPinfo h3').innerHTML = nome;
            document.querySelector('.EPFfotoPerfil img').setAttribute('src', `images/${nome}.jpg`);
            exibirFotoPerfil.style.display = 'grid';
            EFPfoto.setAttribute('src', img.querySelector('img').getAttribute('src'))
        });
    })

    let fecharEFP = document.querySelector('#fecharEFP');
    fecharEFP.addEventListener('click', () => {
        exibirFotoPerfil.style.display = 'none';
    });
    let like = document.querySelectorAll('.like');
    like.forEach(lk => {
        lk.addEventListener('click', () => {
           if(lk.classList.contains('.liked')){
            lk.classList.remove('.liked');
            lk.innerHTML = `<span class="material-icons">
            favorite_border
            </span>`;
           }
           else{
            lk.classList.add('.liked');
            lk.innerHTML = `<span class="material-icons">
            favorite
            </span>`;
           }
        });
    })
}

function abrirEP(){
    let editarPcontent = `
    <div class="editarPerfil">
       <div class="CPcard">
           <div class="botoes">
               <button class="btn btn-primary fechar" id="fecharEP" onclick="fecharEP()"><span class="material-icons close">
                       close
                   </span>
           </div>
             <div class="editarPmudanças">
                <form>
                       <h4>Escolha uma nova foto de perfil:</h4>
                       <div class="CPimg">
                          <input type="file" name="CPimg">
                         </div>
                     <h4>Mude o seu nome de usuário:</h4>
               <div class="CPcomentario">
                  <input type="text" id="TApubli">
               </div>
               <div>
                   <input type="submit" name="Publicar" value="Salvar" id="btnSubmit" />
               </div>
           </form>
           <div class="mudanças">
                <div class="foto">
                     <img src="images/fotoperfil.jpg">
                  </div>
           </div>  
           </div>    
       </div>
   </div>`;
     conteudo.innerHTML = editarPcontent;
   
}

function fecharEP (){
    conteudo.innerHTML = perfilcontent;
}


//------------------mostrar seguidores e pesoas seguidas-----------------------


function seguindo(){
    
}

function seguidores(){

}