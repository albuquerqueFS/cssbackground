const inicioView = document.getElementById('inicio');
const sobreView = document.getElementById('sobre-flex');
const contatoView = document.getElementById('foda');

const janela = window.window;

$('#aba-home').click(() => {
    janela.scrollTo({
        top: $('#inicio').offset().top,
        left: 0,
        behavior: 'smooth'
    })
})

$('#aba-sobre').click(() => {
    janela.scrollTo({
        top: $('#sobre-flex').offset().top,
        left: 0,
        behavior: 'smooth'
    })
})

$('#aba-contato').click(() => {
    janela.scrollTo({
        top: $('#foda').offset().top,
        left: 0,
        behavior: 'smooth'
    })
})

$('#c-getdown').click(() => {
    $('#minhas-redes').css('display', 'block');

    janela.scrollTo({
        top: $('#minhas-redes').offset().top,
        left: 0,
        behavior: 'smooth'
    })
}) 