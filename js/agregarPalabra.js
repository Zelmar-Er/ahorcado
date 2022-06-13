function agregarPalabra(){
    let input = document.querySelector('#input');

    addRemoveClass(iniciaJuego,'invisible');
    addRemoveClass(agregaPalabra,'invisible');
    addRemoveClass(guardaEmpieza,'invisible');
    addRemoveClass(cancel,'invisible');
    addRemoveClass(input,'invisible');

    cambiarFlex();

}

function addRemoveClass(item,clase){
    item = item.classList.toggle(clase);
}

function cambiarFlex(){
    let clase = iniciaJuego.classList.value;
    let section = document.querySelector('#seccion-principal');
    let regExp = new RegExp('invisible')

    // console.log(regExp.test(btnIniciaJuego))

    if(regExp.test(clase)){
        section.classList.replace('seccion-column','seccion-row')
    }else{
        section.classList.replace('seccion-row','seccion-column')
    }
}

