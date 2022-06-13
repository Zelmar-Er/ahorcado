// BTN
const iniciaJuego = document.querySelector('#inicia-juego');
const agregaPalabra = document.querySelector('#agrega-palabra');
const guardaEmpieza = document.querySelector('#guarda-empieza');
const cancel = document.querySelector('#cancel');
const leave = document.querySelector('#leave');
const letrasIncorrectas = document.querySelector('#letras-incorrectas');

const palabras = ['ALURA','BARBERIA'];

iniciaJuego.addEventListener('click',()=>{
    iniciarJuego();
    cambiarFlex();
});

agregaPalabra.addEventListener('click',()=>{
    agregarPalabra();
});

guardaEmpieza.addEventListener('click',()=>{
    guardarPalabra();
})

cancel.addEventListener('click',()=>{
    let input = document.querySelector('#input');
    addRemoveClass(input,'invisible');
    addRemoveClass(guardaEmpieza,'invisible');
    addRemoveClass(cancel,'invisible');
    addRemoveClass(iniciaJuego,'invisible');
    addRemoveClass(agregaPalabra,'invisible');
    cambiarFlex();
})

leave.addEventListener('click',()=>{
    let canvas = document.querySelector('canvas');
    abandonar();
    tablero.removeChild(canvas);
    // console.log(tablero.children)
})