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
        case 1: mainContainer.style.background = 'linear-gradient(90deg, rgba(193,200,224,1) 0%, rgba(83,199,141,1) 100%)'
            break;
        case 2: mainContainer.style.background = 'linear-gradient(90deg, rgba(170,154,216,1) 0%, rgba(224,193,202,1) 100%)'
            break;
        case 3: mainContainer.style.background = 'linear-gradient(90deg, rgba(224,193,202,1) 0%, rgba(199,83,97,1) 100%)'
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

    window.scrollTo(0, 0)
}