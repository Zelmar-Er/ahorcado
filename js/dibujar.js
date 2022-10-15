function dibujarAhorcado(tablero,valor){
    let hoja = tablero.querySelector('canvas')
    let p = hoja.getContext('2d')
    // width: 900 = x
    // height: 400 = y
    // x y x y

    switch(valor){
        case 1:
            // horca 1
            p.fillStyle = '#BA8C63';
            p.fillRect(200,380,600,20);
            break;
        case 2:
            // horca 2
            p.fillStyle = '#BA8C63';
            p.fillRect(400,50,20,550)

            p.fillStyle = '#BA8C63';
            p.fillRect(400,50,250,20)

            p.fillStyle = '#BA8C63';
            p.fillRect(630,70,20,40)
            break;
        case 3:
            // cabeza
            p.strokeStyle = '#6C3082';
            p.lineWidth = 5;
            p.beginPath();
            p.arc(640,140,30,0,5*Math.PI);
            p.stroke();
            break;
        case 4:
            // body
            p.fillStyle = '#6C3082';
            p.fillRect(630,170,20,100);
            break;
        case 5:
            // left hand
            p.moveTo(640,170);
            p.lineTo(540,200,);
            p.stroke();
            break;
        case 6:
            // right hand
            p.moveTo(640,170);
            p.lineTo(740,200,);
            p.stroke();
            break;
        case 7:
            // left foot
            p.moveTo(640,260);
            p.lineTo(540,350,);
            p.stroke();
            break;
        case 8:
            // right foot
            p.moveTo(640,260);
            p.lineTo(740,350,);
            p.stroke();
            break;
        default: console.log('default');
    }
}