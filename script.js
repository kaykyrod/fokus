const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBT = document.querySelector('.app__card-button--curto');
const longoBT = document.querySelector('.app__card-button--longo');
const iniciarBT = document.querySelector('.app__card-primary-button');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
// const timer = document.querySelector('#timer');


// const tempFoco = 1500;
// const tempDescansoCurto = 300;
// const tempDescansoLongo = 900;


focoBt.addEventListener('click', () => {
    alterarContexto('foco');
})

curtoBT.addEventListener('click', () => {
    alterarContexto('descanso-curto');
})

longoBT.addEventListener('click', () => {
    alterarContexto('descanso-longo');
})

function alterarContexto(contexto) {
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `/imagens/${contexto}.png`);
    switch (contexto) {
        case 'foco':
            titulo.innerHTML = 
            `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;

        case 'descanso-curto':
            titulo.innerHTML = 
            `Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>`
            break;

        case 'descanso-longo':
            titulo.innerHTML = 
            `Hora de voltar à superfície. <strong class="app__title-strong">Faça uma pausa longa.</strong>`    
            break;

        default:
            break;
    }
}