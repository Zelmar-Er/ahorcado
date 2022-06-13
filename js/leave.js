function abandonar(){
    let tablero = document.querySelector('canvas');
    let newGame = document.querySelector('#new-game');
    let desistir = document.querySelector('#leave');
    let espacioLetras = document.querySelector('#spacio-letras');

    addRemoveClass(tablero,'tablero');
    addRemoveClass(iniciaJuego,'invisible');
    addRemoveClass(agregaPalabra,'invisible');
    addRemoveClass(newGame,'invisible');
    addRemoveClass(desistir,'invisible');
    addRemoveClass(letrasIncorrectas,'invisible');
    cambiarFlex();

    letrasIncorrectas.innerHTML = '';
    espacioLetras.innerHTML = '';
}