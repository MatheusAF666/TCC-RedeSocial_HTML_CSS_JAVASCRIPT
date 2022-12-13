
const messageContente = ` <div class="messages">
<div class="heading">
    <h4>Mensagens</h4> <span class="material-icons">
        edit
    </span>
</div>
<!--=====================search-bar=====================-->
<div class="BarraDePesquisa">
    <span class="material-icons">
        search
    </span>
    <input type="search" placeholder="procurar mensagens" id="message-search">
</div>
<!--====================messages-category====================-->
<div class="category">
    <h6 class="Pmessages active" onclick="MenssagensP()">Principais Menssagens</h6>

    <h6 class="message-requests" onclick="SolicitaçoesM()">Novas Solicitaçoes(2)</h6>
</div>
<!--=====================message=====================-->
<div class="messageModal">
    <div class="message">
        <div class="fotoPerfil">
            <img src="images/fotoperfil4.jpg">
        </div>
        <div class="message-body">
            <h5>Matilda Confeiteira</h5>
            <p class="text-muted">Que isso meu fiu calma</p>
        </div>
        </div>
        <div class="message">
        <div class="fotoPerfil">
            <img src="images/fotoperfil4.jpg">
            <div class="active"></div>
        </div>
        <div class="message-body">
            <h5>Hola</h5>
            <p class="text-muted">Que isso meu fiu calma</p>
        </div>
        </div>
        <div class="message">
        <div class="fotoPerfil">
            <img src="images/fotoperfil4.jpg">
        </div>
        <div class="message-body">
            <h5>Matilda Confeiteira</h5>
            <p class="text-bold">Que isso meu fiu calma</p>
        </div>
        </div>
        <div class="message">
        <div class="fotoPerfil">
            <img src="images/fotoperfil4.jpg">
            <div class="active"></div>
        </div>
        <div class="message-body">
            <h5>Matilda Confeiteira</h5>
            <p class="text-muted">Que isso meu fiu calma</p>
        </div>
        </div>
        <div class="message">
        <div class="fotoPerfil">
            <img src="images/fotoperfil4.jpg">
            <div class="active"></div>
        </div>
        <div class="message-body">
            <h5>Matilda Confeiteira</h5>
            <p class="text-bold">Que isso meu fiu calma</p>
        </div>
        </div>
</div>
<!--=====================messages-final=====================-->

<!--=====================friends-request=====================-->

</div>`;
const messageModal = document.querySelector('.right');
messageModal.innerHTML = messageContente;


let solicitaçoesContent =  ` <div class="messages">
<div class="heading">
    <h4>Mensagens</h4> <span class="material-icons">
        edit
    </span>
</div>
<!--=====================search-bar=====================-->
<div class="BarraDePesquisa">
    <span class="material-icons">
        search
    </span>
    <input type="search" placeholder="procurar mensagens" id="message-search">
</div>
<!--====================messages-category====================-->
<div class="category">
    <h6 class="Pmessages" onclick="MenssagensP()">Principais Menssagens</h6>

    <h6 class="message-requests active" onclick="SolicitaçoesM()">Novas Solicitaçoes(2)</h6>
</div>
<!--=====================message=====================-->
<div class="messageModal">
    <div class="friend-request">
        <h4>Solicitaçoes</h4>
        <div class="request" id = "1">
            <div class="info">
                <div class="fotoPerfil">
                    <img src="images/fotoperfil3.jpg">
                </div>
                <div>
                    <h5>Menino Miseravi</h5>
                    <p class="text-muted">3 amigos em comum</p>
        
        
                </div>
            </div>
            <div class="action">
                <button class="btn btn-primary" onclick="Aceitar()">
                    Aceitar
                </button>
                <button class="btn btn-recusar" onclick="Recusar()">
                    Recusar
                </button>
        
            </div>
        </div>
        <div class="request" id = "2">
            <div class="info">
                <div class="fotoPerfil">
                    <img src="images/fotoperfil3.jpg">
                </div>
                <div>
                    <h5>Menino Miseravi</h5>
                    <p class="text-muted">3 amigos em comum</p>
        
        
                </div>
            </div>
            <div class="action">
                <button class="btn btn-primary" onclick="Aceitar()">
                    Aceitar
                </button>
                <button class="btn btn-recusar" onclick="Recusar()">
                    Recusar
                </button>
        
            </div>
        </div>
        <div class="request" id = "3">
            <div class="info">
                <div class="fotoPerfil">
                    <img src="images/fotoperfil3.jpg">
                </div>
                <div>
                    <h5>Menino Miseravi</h5>
                    <p class="text-muted">3 amigos em comum</p>
        
        
                </div>
            </div>
            <div class="action">
                <button class="btn btn-primary" onclick="Aceitar()">
                    Aceitar
                </button>
                <button class="btn btn-recusar" onclick="Recusar()">
                    Recusar
                </button>
        
            </div>
        </div>
        </div>
</div>
<!--=====================messages-final=====================-->

<!--=====================friends-request=====================-->

</div>`;



// variaveis das menssagens
const messageMI = document.querySelector('#messagens-notifications');
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');
const pMessages = document.querySelector('.Pmessages');
const solicitaçoes = document.querySelector('.message-requests')


// troca entre Principais e solicitçoes

function MenssagensP(){
    messageModal.innerHTML = messageContente;
    
}

function SolicitaçoesM(){
    messageModal.innerHTML = solicitaçoesContent;
}






// seleciona a parte das menssagens
messageMI.addEventListener('click', (e) => {
    selectM();
});

// searchbar

var  searchMessage = () => {
   buscarM();
}

messageSearch.addEventListener('keyup', searchMessage);



