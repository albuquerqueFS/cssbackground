let contadorClass = 1;
let index = 1;

window.show = function (increase) {

    let mainContainer = document.getElementById('home');
    let liEls = document.querySelectorAll('#galeria-container li');

    if (contadorClass > 3) {
        contadorClass = 1;
    } else if (contadorClass < 0) {
        contadorClass = 1;
    }

    switch (contadorClass) {
        case 1: mainContainer.style.background = ''
            break;
        case 2: mainContainer.style.background = ''
            break;
        case 3: mainContainer.style.background = ''
            break;
    }

    if (index == 2) {
        index = 0;
    } else {
        index = index + increase;
    }

    mainContainer.className = `anim${contadorClass}`;
    contadorClass = contadorClass + increase;

    index = Math.min(Math.max(index, 0), liEls.length - 1);
    liEls[index].scrollIntoView({ behavior: 'smooth' });

    window.scrollTo(mainContainer.offsetLeft, mainContainer.offsetTop)
}