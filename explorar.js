const explorar = document.querySelector("#explorar");
const explorarContent = `<div class="myposts explorar-content">
<div class="Matilda_Confeiteira"><img src="images/fotoperfil4.jpg"></div>
<div class="Joao"><img src="images/fotoperfil3.jpg"></div>
<div class="Matheus"><img src="images/fotoperfil.jpg"></div>
<div class="Matilda_Confeiteira"><img src="images/fotoperfil4.jpg"></div>
<div class="Joao"><img src="images/fotoperfil3.jpg"></div>
<div class="Matheus"><img src="images/fotoperfil.jpg"></div>
<div class="Matilda_Confeiteira"><img src="images/fotoperfil4.jpg"></div>
<div class="Joao"><img src="images/fotoperfil3.jpg"></div>
<div class="Matheus"><img src="images/fotoperfil.jpg"></div>
<div class="Matilda_Confeiteira"><img src="images/fotoperfil4.jpg"></div>
<div class="Joao"><img src="images/fotoperfil3.jpg"></div>
<div class="Matheus"><img src="images/fotoperfil.jpg"></div>
<div class="Matilda_Confeiteira"><img src="images/fotoperfil4.jpg"></div>
<div class="Joao"><img src="images/fotoperfil3.jpg"></div>
<div class="Matheus"><img src="images/fotoperfil.jpg"></div>
<div class="Matilda_Confeiteira"><img src="images/fotoperfil4.jpg"></div>
<div class="Joao"><img src="images/fotoperfil3.jpg"></div>
<div class="Matheus"><img src="images/fotoperfil.jpg"></div>
 </div>`;

explorar.addEventListener("click", () => {
    conteudo.innerHTML = explorarContent;
    EFP();
} );


