function iniciarJuego(){
    let newGame = document.querySelector('#new-game');
    let desistir = document.querySelector('#leave');
    
    newGame.addEventListener('click',sortearPalabra);
   
    addRemoveClass(newGame,'invisible')
    addRemoveClass(iniciaJuego,'invisible')
    addRemoveClass(agregaPalabra,'invisible')
    addRemoveClass(desistir,'invisible')
    addRemoveClass(letrasIncorrectas,'invisible');

    sortearPalabra();

    crearTablero();
}

function sortearPalabra(){
    let incorrectas = document.querySelector('#letras-incorrectas');
    incorrectas.innerHTML = '';
    incorrectasArr = [];
    
    let i = Math.round(Math.random()*palabras.length);;
    
    if(i > palabras.length-1 || i < 0){
        sortearPalabra();
    }else{
        // console.log(i)
        separarLetras(palabras[i])
    }
}

function separarLetras(palabra){

    if(typeof(palabra) === 'undefined'){
        console.log('error al separar');
        separarLetras(palabra = palabras[sortearPalabra()])
    }else{
        mostrarEspaciosPantalla(palabra.split(''))
        // console.log('La palabra es '+palabra)
    }
}

function mostrarEspaciosPantalla(letras){
    let espacioLetras = document.querySelector('#spacio-letras');
    
    if(espacioLetras.childNodes.length > 0){
        espacioLetras.innerHTML = '';
        // console.log(espacioLetras.childNodes.length)
    }
    letras.forEach((letra)=>{
        
        let fragment = document.createDocumentFragment();
        let div = document.createElement('div');
        let p = document.createElement('p');
            p.textContent = letra;

        addRemoveClass(p,'invisible');
        div.appendChild(p);
        fragment.appendChild(div);
        espacioLetras.appendChild(fragment);
    })
}