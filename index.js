// SPA

const posts = `<div class="stories">
    <div class="story">
        <div class="fotoPerfil">
            <img src="images/fotoperfil.jpg">
        </div>
        <p class="name">Seu story</p>
    </div>
    <div class="story">
        <div class="fotoPerfil">
            <img src="images/fotoperfil2.jpg">
        </div>
        <p class="name">Alberto Alves</p>
    </div>
    <div class="story">
        <div class="fotoPerfil">
            <img src="images/fotoperfil3.jpg">
        </div>
        <p class="name">Menino Miseravi</p>
    </div>
    <div class="story">
        <div class="fotoPerfil">
            <img src="images/fotoperfil4.jpg">
        </div>
        <p class="name">Matilda confeiteira</p>
    </div>
    <div class="story">
        <div class="fotoPerfil">
            <img src="images/fotoperfil4.jpg">
        </div>
        <p class="name">Matilda confeiteira</p>
    </div>
   
</div>

<form class="create-post">
    <div class="fotoPerfil">
        <img src="images/fotoperfil.jpg">
    </div>
    <input type="text" placeholder="Comente sobre eventos" id="create-post">
    <input type="submit" value="Post" class="btn btn-primary">
</form>

<div class="feeds">
   
    <div class="feed">
        <div class="head">
            <div class="user">
                <div class="fotoPerfil">
                    <img src="images/fotoperfil4.jpg">
                </div>
                <div class="info">
                    <h3>Matilda Confeiteira</h3>
                    <small>Brasil, 10 minutos atrás</small>
                </div>
            </div>
            <div>
                <span class="edit">
                    <span class="material-icons">
                        more_horiz
                    </span>
                </span>
            </div>
        </div>
        <div class="fotofeed">
            <img src="images/post1MC.jpg">
        </div>
        <div class="action-buttons">
            <div class="interaction-buttons">
                <span>
                    <span class="material-icons">
                        favorite_border
                    </span>
                </span>
                <span>
                    <span class="material-icons">
                        comment
                    </span>
                </span>
                <span>
                    <span class="material-icons">
                        share
                    </span>
                </span>
            </div>
            <div class="bookmark">
                <span>
                    <span class="material-icons">
                        bookmark
                    </span>
                </span>
            </div>
        </div>
        <div class="likedby">
            <span><img src="images/fotoperfil2.jpg"></span>
            <span><img src="images/fotoperfil3.jpg"></span>
            <span><img src="images/fotoperfil.jpg"></span>
            <p>Curtido por <b>Menino Miseravi</b> e <b>Outros 200</b></p>
        </div>
        <div class="caption">
            <p><b>Alberto Alves comentou:</b> que isso meu fio calma. <span class="hash-tag">
                    #CAVALO</span></p>
        </div>
        <div class="comments text-muted">
            Ver todos os 263 comentários
        </div>
    </div>
    <div class="feed">
        <div class="head">
            <div class="user">
                <div class="fotoPerfil">
                    <img src="images/fotoperfil4.jpg">
                </div>
                <div class="info">
                    <h3>Matilda Confeiteira</h3>
                    <small>Brasil, 10 minutos atrás</small>
                </div>
            </div>
            <div>
                <span class="edit">
                    <span class="material-icons">
                        more_horiz
                    </span>
                </span>
            </div>
        </div>
        <div class="fotofeed">
            <img src="images/post1MC.jpg">
        </div>
        <div class="action-buttons">
            <div class="interaction-buttons">
                <span>
                    <span class="material-icons">
                        favorite_border
                    </span>
                </span>
                <span>
                    <span class="material-icons">
                        comment
                    </span>
                </span>
                <span>
                    <span class="material-icons">
                        share
                    </span>
                </span>
            </div>
            <div class="bookmark">
                <span>
                    <span class="material-icons">
                        bookmark
                    </span>
                </span>
            </div>
        </div>
        <div class="likedby">
            <span><img src="images/fotoperfil2.jpg"></span>
            <span><img src="images/fotoperfil3.jpg"></span>
            <span><img src="images/fotoperfil.jpg"></span>
            <p>Curtido por <b>Menino Miseravi</b> e <b>Outros 200</b></p>
        </div>
        <div class="caption">
            <p><b>Alberto Alves comentou:</b> que isso meu fio calma. <span class="hash-tag">
                    #CAVALO</span></p>
        </div>
        <div class="comments text-muted">
            Ver todos os 263 comentários
        </div>
    </div>
    <div class="feed">
        <div class="head">
            <div class="user">
                <div class="fotoPerfil">
                    <img src="images/fotoperfil4.jpg">
                </div>
                <div class="info">
                    <h3>Matilda Confeiteira</h3>
                    <small>Brasil, 10 minutos atrás</small>
                </div>
            </div>
            <div>
                <span class="edit">
                    <span class="material-icons">
                        more_horiz
                    </span>
                </span>
            </div>
        </div>
        <div class="fotofeed">
            <img src="images/post1MC.jpg">
        </div>
        <div class="action-buttons">
            <div class="interaction-buttons">
                <span>
                    <span class="material-icons">
                        favorite_border
                    </span>
                </span>
                <span>
                    <span class="material-icons">
                        comment
                    </span>
                </span>
                <span>
                    <span class="material-icons">
                        share
                    </span>
                </span>
            </div>
            <div class="bookmark">
                <span>
                    <span class="material-icons">
                        bookmark
                    </span>
                </span>
            </div>
        </div>
        <div class="likedby">
            <span><img src="images/fotoperfil2.jpg"></span>
            <span><img src="images/fotoperfil3.jpg"></span>
            <span><img src="images/fotoperfil.jpg"></span>
            <p>Curtido por <b>Menino Miseravi</b> e <b>Outros 200</b></p>
        </div>
        <div class="caption">
            <p><b>Alberto Alves comentou:</b> que isso meu fio calma. <span class="hash-tag">
                    #CAVALO</span></p>
        </div>
        <div class="comments text-muted">
            Ver todos os 263 comentários
        </div>
    </div>
    <div class="feed">
        <div class="head">
            <div class="user">
                <div class="fotoPerfil">
                    <img src="images/fotoperfil4.jpg">
                </div>
                <div class="info">
                    <h3>Matilda Confeiteira</h3>
                    <small>Brasil, 10 minutos atrás</small>
                </div>
            </div>
            <div>
                <span class="edit">
                    <span class="material-icons">
                        more_horiz
                    </span>
                </span>
            </div>
        </div>
        <div class="fotofeed">
            <img src="images/post1MC.jpg">
        </div>
        <div class="action-buttons">
            <div class="interaction-buttons">
                <span>
                    <span class="material-icons">
                        favorite_border
                    </span>
                </span>
                <span>
                    <span class="material-icons">
                        comment
                    </span>
                </span>
                <span>
                    <span class="material-icons">
                        share
                    </span>
                </span>
            </div>
            <div class="bookmark">
                <span>
                    <span class="material-icons">
                        bookmark
                    </span>
                </span>
            </div>
        </div>
        <div class="likedby">
            <span><img src="images/fotoperfil2.jpg"></span>
            <span><img src="images/fotoperfil3.jpg"></span>
            <span><img src="images/fotoperfil.jpg"></span>
            <p>Curtido por <b>Menino Miseravi</b> e <b>Outros 200</b></p>
        </div>
        <div class="caption">
            <p><b>Alberto Alves comentou:</b> que isso meu fio calma. <span class="hash-tag">
                    #CAVALO</span></p>
        </div>
        <div class="comments text-muted">
            Ver todos os 263 comentários
        </div>
    </div>
    <div class="feed">
        <div class="head">
            <div class="user">
                <div class="fotoPerfil">
                    <img src="images/fotoperfil4.jpg">
                </div>
                <div class="info">
                    <h3>Matilda Confeiteira</h3>
                    <small>Brasil, 10 minutos atrás</small>
                </div>
            </div>
            <div>
                <span class="edit">
                    <span class="material-icons">
                        more_horiz
                    </span>
                </span>
            </div>
        </div>
        <div class="fotofeed">
            <img src="images/post1MC.jpg">
        </div>
        <div class="action-buttons">
            <div class="interaction-buttons">
                <span>
                    <span class="material-icons">
                        favorite_border
                    </span>
                </span>
                <span>
                    <span class="material-icons">
                        comment
                    </span>
                </span>
                <span>
                    <span class="material-icons">
                        share
                    </span>
                </span>
            </div>
            <div class="bookmark">
                <span>
                    <span class="material-icons">
                        bookmark
                    </span>
                </span>
            </div>
        </div>
        <div class="likedby">
            <span><img src="images/fotoperfil2.jpg"></span>
            <span><img src="images/fotoperfil3.jpg"></span>
            <span><img src="images/fotoperfil.jpg"></span>
            <p>Curtido por <b>Menino Miseravi</b> e <b>Outros 200</b></p>
        </div>
        <div class="caption">
            <p><b>Alberto Alves comentou:</b> que isso meu fio calma. <span class="hash-tag">
                    #CAVALO</span></p>
        </div>
        <div class="comments text-muted">
            Ver todos os 263 comentários
        </div>
    </div>
    <div class="feed">
        <div class="head">
            <div class="user">
                <div class="fotoPerfil">
                    <img src="images/fotoperfil4.jpg">
                </div>
                <div class="info">
                    <h3>Matilda Confeiteira</h3>
                    <small>Brasil, 10 minutos atrás</small>
                </div>
            </div>
            <div>
                <span class="edit">
                    <span class="material-icons">
                        more_horiz
                    </span>
                </span>
            </div>
        </div>
        <div class="fotofeed">
            <img src="images/post1MC.jpg">
        </div>
        <div class="action-buttons">
            <div class="interaction-buttons">
                <span>
                    <span class="material-icons">
                        favorite_border
                    </span>
                </span>
                <span>
                    <span class="material-icons">
                        comment
                    </span>
                </span>
                <span>
                    <span class="material-icons">
                        share
                    </span>
                </span>
            </div>
            <div class="bookmark">
                <span>
                    <span class="material-icons">
                        bookmark
                    </span>
                </span>
            </div>
        </div>
        <div class="likedby">
            <span><img src="images/fotoperfil2.jpg"></span>
            <span><img src="images/fotoperfil3.jpg"></span>
            <span><img src="images/fotoperfil.jpg"></span>
            <p>Curtido por <b>Menino Miseravi</b> e <b>Outros 200</b></p>
        </div>
        <div class="caption">
            <p><b>Alberto Alves comentou:</b> que isso meu fio calma. <span class="hash-tag">
                    #CAVALO</span></p>
        </div>
        <div class="comments text-muted">
            Ver todos os 263 comentários
        </div>
    </div>

</div>

` ;
conteudo.innerHTML = posts;

const y = document.querySelector('.stories');
console.log(y);
const xx = document.querySelectorAll('.story');
console.log(xx);
const menuItems = document.querySelectorAll('.menu-item');
// header - nav
const nav = document.querySelector('nav');
// Main - Container
const container = document.querySelector('main .Container');

