function guardarPalabra(){
    let input = document.querySelector('#input');
    let palabra = input.value;
    // console.log(input)
    // console.log(input.length)
    if(palabra.length > 0){
        palabras.push(palabra.toUpperCase());
        input.value = '';

        addRemoveClass(input,'invisible');
        
        iniciarJuego();
        addRemoveClass(guardaEmpieza,'invisible');
        addRemoveClass(cancel,'invisible');
        addRemoveClass(agregaPalabra,'invisible');
        addRemoveClass(iniciaJuego,'invisible');
        // addRemoveClass(letrasIncorrectas,'invisible');
        // sortearPalabra();
        // crearTablero();
    }else{
        mostrarMensaje('Ingrese una palabra','red');
    }
}