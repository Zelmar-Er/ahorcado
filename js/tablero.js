
const tablero = document.querySelector('#canvas-tablero');


let palabra = document.querySelector('#spacio-letras').childNodes;
let incorrectasArr = [];
let points = 0;
let letras = [];

    // tablero.width = 900;
    // tablero.height = 400;

function crearTablero(){
    if(tablero.children.length == 0){
        let fragment = document.createDocumentFragment();
        let canvas = document.createElement('canvas');

        canvas.width = 900;
        canvas.height = 400;
        canvas.style.backgroundColor = '#fff';

        fragment.appendChild(canvas);
        tablero.appendChild(fragment);
    }

    // let palabra = document.querySelector('#spacio-letras').childNodes;
    // console.log(letras.length)
    while(!letras.length == 0){
        letras.pop();
    }
    
    if(tablero.classList.length == 0){
        addRemoveClass(tablero,'tablero');
    }

    palabra.forEach((letra)=>{
        let p = letra.querySelector('p');
            letras.push(p.innerText)
    })
    
    addEventListener('keypress',(e)=>{
        let tecla = e;
        let regExp = new RegExp('Key');
        // console.log('La letra es ' + tecla.key)
        // console.log( 'Y el codigo es '+tecla.code)

        /*
            CAPSLOCK
            https://www.javascripttutorial.net/dom/events/detect-caps-lock-is-on/#:~:text=The%20getModifierState()%20method%20returns,the%20caps%20lock%20is%20on.
        */
        if(!e.getModifierState('CapsLock')){
            mostrarMensaje('Las mayusculas estan desactivadas','red')
            // console.log(e.getModifierState('CapsLock'))
        }
        if(regExp.test(tecla.code)){
            let valor = tecla.key;
            comparar(valor,letras)
        }
        
    })
}

function comparar(valor,letras){
    let incorrectas = document.querySelector('#letras-incorrectas');
    let fragment = document.createDocumentFragment();
    let incorrecta = document.createElement('p');
    let regExp = new RegExp(valor,'g');
    if(regExp.test(letras)){
        // let palabra = document.querySelector('#spacio-letras').childNodes;
        palabra.forEach((letra)=>{
            let p = letra.querySelector('p');
            let toWin = palabra.length;
            if(p.innerText === valor){
                if(p.classList.length > 0){
                    addRemoveClass(p,'invisible');
                    points ++;
                    if(points === toWin){
                        mostrarMensaje('Ganaste','green')
                        points = 0;
                        setTimeout(()=>{
                            resetearDibujo()
                            sortearPalabra();
                            crearTablero();
                        },3000)
                    }
                }
            }
        })
    }else{
        let incorrectasRegExp = new RegExp(valor,'g');
        if(!incorrectasRegExp.test(incorrectasArr)){
            incorrecta.textContent = valor;
            fragment.appendChild(incorrecta);
            incorrectas.appendChild(fragment);
            incorrectasArr.push(valor);
            // console.log(incorrectasArr);
            if(incorrectasArr.length === 8){
                mostrarMensaje('Perdiste','red');
                setTimeout(()=>{
                    points = 0;
                    resetearDibujo()
                    sortearPalabra();
                    crearTablero();
                    incorrectasArr = [];
                },2000);
            }
            dibujarAhorcado(tablero,incorrectasArr.length);
        }
    }
}

function mostrarMensaje(texto,colorFuente = '#000'){
    let mensaje = document.querySelector('.input-error');
    addRemoveClass(mensaje,'invisible');
    mensaje.style.color = colorFuente;
    mensaje.textContent = texto;
    setTimeout(()=>{
        addRemoveClass(mensaje,'invisible');
        mensaje.textContent = '';
    },2000)
}

function resetearDibujo(){
    let hoja = document.querySelector('canvas');
    let p = hoja.getContext('2d');
        p.clearRect(0, 0,1000,600);
}