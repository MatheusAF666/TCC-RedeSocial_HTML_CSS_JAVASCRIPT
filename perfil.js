
const conteudo = document.querySelector('.middle');
const perfil = document.querySelector('.left .Perfil');
const perfilMI = document.querySelector('#perfilMI');

const criarPublic = document.querySelector('.criar-public');
const fecharCP = document.querySelector('#fecharCP');

const exibirFotoPerfil = document.querySelector('.exibirFotoPerfil');
const EFPfoto = document.querySelector('.EFPfoto img');




let nomePerfil = 'Matilda';

const perfilcontent = `<div class="perfilContent"> 
<div class="header">
    <div class="foto">
        <img src="images/fotoperfil.jpg">
    </div>
    <div class="description">
        <div class="nick">
            <h2>@Matilda</h2>
            <button class="btn btn-primary" id="editarP" onclick="abrirEP()">
                editar perfil
            </button>
        </div>
        <div class="details">
            <div class="publicaçoes detail">23 publicaçoes</div>
            <div class="seguindo detail" onclick="seguindo()">5544 seguindo</div>
            <div class="seguidores detail" onclick="seguidores()">11234 seguidores</div>
        </div>
        <div class="name">
            <h4>Matheus Alves</h4>
        </div>
    </div>
</div>

<div class="category">
    <h6 class="publicaçoes active" onclick="MudarPaginaPublicaçoes()">publicaçoes</h6>

    <h6 class="events" onclick="MudarPaginaEventos()">eventos</h6>

    <h6 class="bookmarkers" onclick = "MudarPaginaBookmarkers()">bookmarkers</h6>
</div>
<div class="public">
<div class="more" onclick="addPublic()"><span class="material-icons">
add
</span></div>
    <div class="myposts">
        <div class="matilda" ><img src="images/fotoperfil.jpg"></div>
        <div class="matilda" ><img src="images/fotoperfil.jpg"></div>
        <div class="matilda" ><img src="images/fotoperfil.jpg"></div>
        <div class="matilda" ><img src="images/fotoperfil.jpg"></div>
        <div class="matilda" ><img src="images/fotoperfil.jpg"></div>
        <div class="matilda" ><img src="images/fotoperfil.jpg"></div>
        <div class="matilda" ><img src="images/fotoperfil.jpg"></div>
        <div class="matilda" ><img src="images/fotoperfil.jpg"></div>
        <div class="matilda" ><img src="images/fotoperfil.jpg"></div>
        <div class="matilda" ><img src="images/fotoperfil.jpg"></div>
        <div class="matilda" ><img src="images/fotoperfil.jpg"></div>
        <div class="matilda" ><img src="images/fotoperfil.jpg"></div>
        <div class="matilda" ><img src="images/fotoperfil.jpg"></div>
        <div class="matilda" ><img src="images/fotoperfil.jpg"></div>
        <div class="matilda" ><img src="images/fotoperfil.jpg"></div>
        <div class="matilda" ><img src="images/fotoperfil.jpg"></div>
        
      
    </div>
</div>
<div class="eventos"></div>
<div class="bookmarkers"></div>
</div>`;
const eventos = `<div class="perfilContent">
<div class="header">
    <div class="foto">
        <img src="images/fotoperfil.jpg">
    </div>
    <div class="description">
        <div class="nick">
            <h2>@Matilda</h2>
            <button class="btn btn-primary">
                editar perfil
            </button>
        </div>
        <div class="details">
        <div class="publicaçoes detail">23 publicaçoes</div>
        <div class="seguindo detail" onclick="seguindo()">5544 seguindo</div>
        <div class="seguidores detail" onclick="seguidores()">11234 seguidores</div>
    </div>
        <div class="name">
            <h4>Matheus Alves</h4>
        </div>
    </div>
</div>

<div class="category">
    <h6 class="publicaçoes" onclick="MudarPaginaPublicaçoes()">publicaçoes</h6>

    <h6 class="events active" onclick="MudarPaginaEventos()">eventos</h6>

    <h6 class="bookmarkers"  onclick = "MudarPaginaBookmarkers()">bookmarkers</h6>
</div>
<div class="public">
<div class="more" onclick = "addEvents()"><span class="material-icons">
add
</span></div>
    <div class="myposts myEvents">
    <div class="myPimg">
<p>Nome do Evento</p>
<img src="images/fotoperfil.jpg">

</div>
<div class="myPimg">
<p>Nome do Evento</p>
<img src="images/fotoperfil.jpg">

</div>
<div class="myPimg">
<p>Nome do Evento</p>
<img src="images/fotoperfil.jpg">
</div>
<div class="myPimg">
<p>Nome do Evento</p>
<img src="images/fotoperfil.jpg">

</div>
<div class="myPimg">
<p>Nome do Evento</p>
<img src="images/fotoperfil.jpg">

</div>
<div class="myPimg">
<p>Nome do Evento</p>
<img src="images/fotoperfil.jpg">
</div>
<div class="myPimg">
<p>Nome do Evento</p>
<img src="images/fotoperfil.jpg">

</div>
<div class="myPimg">
<p>Nome do Evento</p>
<img src="images/fotoperfil.jpg">

</div>
<div class="myPimg">
<p>Nome do Evento</p>
<img src="images/fotoperfil.jpg">
</div>
    </div>
</div>
<div class="eventos">


<div class="bookmarkers"></div>
</div>`;

const bookmarkers = `<div class="perfilContent">
<div class="header">
    <div class="foto">
        <img src="images/fotoperfil.jpg">
    </div>
    <div class="description">
        <div class="nick">
            <h2>@Matilda</h2>
            <button class="btn btn-primary">
                editar perfil
            </button>
        </div>
        <div class="details">
            <div class="publicaçoes detail">23 publicaçoes</div>
            <div class="seguindo detail" onclick="seguindo()">5544 seguindo</div>
            <div class="seguidores detail" onclick="seguidores()">11234 seguidores</div>
        </div>
        <div class="name">
            <h4>Matheus Alves</h4>
        </div>
    </div>
</div>

<div class="category">
    <h6 class="publicaçoes" onclick="MudarPaginaPublicaçoes()">publicaçoes</h6>

    <h6 class="events" onclick="MudarPaginaEventos()">eventos</h6>

    <h6 class="bookmarkers active">bookmarkers</h6>
</div>
<div class="public">

<div class="myposts">
<div class="matilda" ><img src="images/fotoperfil.jpg"></div>
<div class="matilda" ><img src="images/fotoperfil.jpg"></div>
<div class="matilda" ><img src="images/fotoperfil.jpg"></div>
<div class="matilda" ><img src="images/fotoperfil.jpg"></div>
<div class="matilda" ><img src="images/fotoperfil.jpg"></div>
<div class="matilda" ><img src="images/fotoperfil.jpg"></div>
<div class="matilda" ><img src="images/fotoperfil.jpg"></div>
<div class="matilda" ><img src="images/fotoperfil.jpg"></div>
<div class="matilda" ><img src="images/fotoperfil.jpg"></div>
<div class="matilda" ><img src="images/fotoperfil.jpg"></div>
<div class="matilda" ><img src="images/fotoperfil.jpg"></div>
<div class="matilda" ><img src="images/fotoperfil.jpg"></div>
<div class="matilda" ><img src="images/fotoperfil.jpg"></div>
<div class="matilda" ><img src="images/fotoperfil.jpg"></div>
<div class="matilda" ><img src="images/fotoperfil.jpg"></div>
<div class="matilda" ><img src="images/fotoperfil.jpg"></div>




</div>
</div>
<div class="eventos"></div>
<div class="bookmarkers"></div>
</div>`;


perfil.addEventListener('click', () => {
    conteudo.innerHTML = perfilcontent;
    EFP();
});
perfilMI.addEventListener('click', () => {
    conteudo.innerHTML = perfilcontent;
    EFP();
});

function MudarPaginaEventos() {
    conteudo.innerHTML = eventos;
    EFP();
}
function MudarPaginaPublicaçoes(){
    conteudo.innerHTML = perfilcontent;
    EFP();
}

function MudarPaginaBookmarkers(){
    conteudo.innerHTML = bookmarkers;
    EFP();
}

function addEvents(){
    CEcard.style.display = 'grid';
}
function addPublic(){
    criarPublic.style.display = 'grid';
}

fecharCP.addEventListener('click',()=>{
    criarPublic.style.display = 'none';
});



