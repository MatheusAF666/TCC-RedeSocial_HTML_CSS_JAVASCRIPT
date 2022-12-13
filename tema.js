const theme = document.querySelector('#theme');
const themeModel = document.querySelector('.tema');
const fechar = document.querySelector('#fecharTema');
const FontSize = document.querySelectorAll('.choose-size  span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color  span');
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');

const openThemeModel = () => {
    themeModel.style.display = 'grid';
}

const closeThemeModel = () => {
    themeModel.style.display = 'none';
}

theme.addEventListener('click', openThemeModel);

fechar.addEventListener('click', closeThemeModel);

//Fonts 



// remover ou adicionar class active

const removeSizeSelector = () => {
    FontSize.forEach(size => {
        size.classList.remove('active');
    })
}
FontSize.forEach(size => {

    size.addEventListener('click', () => {
        fontSize(size);
    })
})

// change primary color

// remove active class 
const changeActiveclass = () => {
    colorPalette.forEach(colorA => {
        colorA.classList.remove('active');
    })
}

colorPalette.forEach(color => {
    color.addEventListener('click', () => {

      paletaDeCores(color);
    })
})

// choose background


let whitecolorlightness;
let darkcolorlightness;
let lightcolorlightness;

const changeBG = () => {
    root.style.setProperty('--white-color-lightness', whitecolorlightness);
    root.style.setProperty('--dark-color-lightness', darkcolorlightness);
    root.style.setProperty('--light-color-lightness', lightcolorlightness);
}

bg1.addEventListener('click', () => {
    backG1();
});


bg2.addEventListener('click', () => {
    backG2();
});

bg3.addEventListener('click', () => {
    backG3();
})

