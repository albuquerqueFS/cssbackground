const header = document.getElementById('header');
const headerUlLi = document.querySelector('#header ul li');
const headerUlList = document.querySelectorAll('#header ul li');
const logo = document.getElementById('logo');

const firstScreen = window.innerHeight;
const secondScreen = window.innerHeight + document.getElementById('sobre-flex').height;

const contato = document.getElementById('foda');
const foda = document.getElementById('foda');

const minhasredes = document.getElementById('minhas-redes');
const contatocontainer = document.getElementById('contato-containerB');
var clicked = false;

window.onresize = () => {
    if (clicked) {
        contato.scrollTo({
            top: 0,
            left: contatocontainer.offsetLeft,
            behavior: 'smooth'
        })
    }
}

window.onscroll = () => {


    if (window.pageYOffset > 160) {
        header.style.background = 'rgba(0, 0, 0, 0.20)';
        header.style.height = '5rem';

        logo.style.fontSize = '1.5rem';
        logo.style.padding = '1rem 1rem';

        // headerUlLi.style.fontSize = '1rem';
        headerUlList[0].style.fontSize = '1rem';
        headerUlList[1].style.fontSize = '1rem';
        headerUlList[2].style.fontSize = '1rem';
    } else {
        header.style.background = 'none';
        header.style.height = '7rem';

        logo.style.fontSize = '2rem';
        logo.style.padding = '1rem 1rem';

        // headerUlLi.style.fontSize = '1.2rem';
        headerUlList[0].style.fontSize = '1.2rem';
        headerUlList[1].style.fontSize = '1.2rem';
        headerUlList[2].style.fontSize = '1.2rem';
    }

    if (window.pageYOffset < firstScreen) {
        headerUlList[0].className = 'aba-selected';
        headerUlList[1].classList.remove('aba-selected');
        headerUlList[2].classList.remove('aba-selected');

    } else if (window.pageYOffset > $('#sobre-flex').offset().top &&
        window.pageYOffset < $('#foda').offset().top - 20) {

        headerUlList[0].classList.remove('aba-selected');
        headerUlList[1].className = 'aba-selected';
        headerUlList[2].classList.remove('aba-selected');

    } else if (window.pageYOffset > $('#foda').offset().top - 20) {

        headerUlList[1].classList.remove('aba-selected');
        headerUlList[0].classList.remove('aba-selected');
        headerUlList[2].className = 'aba-selected';
        contato.style.backgroundColor = 'white';

        $('#orcament-see').click(() => {
            clicked = true;
            // contato.scrollLeft = contatocontainer.offsetLeft
            contato.scrollTo({
                top: 0,
                left: contatocontainer.offsetLeft,
                behavior: 'smooth'
            })
        })
    }

    // if ($('#minhas-redes').css('display', 'block')) {
    //     if (window.pageYOffset > $('#minhas-redes').offset().top - 20) {
    //         header.style.color = 'white';
    //         header.style.background = 'none'

    //         logo.style.color = 'black';
    //         headerUlList[2].style.color = 'black';
    //     } else {
    //         header.style.color = 'black';
    //         logo.style.color = 'black'
    //         headerUlList[2].style.color = 'black';
    //     }
    // }
}