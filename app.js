let listaNumeroSorteados = [];
let numeroSecreto = 0;
let intentos =  0;
let NumeroMaximo = 10;

function asignarTextosElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento); //Se usa document para unir JAVASCRIPT con HTML
    elementoHTML.innerHTML = texto; // Las variables no se ponen comillas 
    return;
}


function verificarintento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    console.log(numeroDeUsuario === numeroSecreto);
    if (numeroDeUsuario===numeroSecreto){
        asignarTextosElemento('p',`Acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextosElemento('p','El numero secreto es menor');
        } else{
            asignarTextosElemento('p','El número secreto es menor')
        }    
        intentos++; 
        limpiarcaja();       
    }
    return;
}

function limpiarcaja(){
    document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto(){
    let numeroGenerado =  Math.floor(Math.random()*NumeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    // SI el número generado está incluido en la lista 

    if (listaNumeroSorteados.length == NumeroMaximo){
        asignarTextosElemento('p','Ya se sortearon todos los números posibles');

    }else{


        if (listaNumeroSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto(); //Uso de la recursivida, se está llamando a si misma para generar u nuevo numero
        }else{
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
} 
}

function condicionesIniciales(){
    asignarTextosElemento('h1','Juego del número secreto');
    asignarTextosElemento('p',`Indica un número del 1 al ${NumeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar la caja
    limpiarcaja();
    //Indicar mensaje de intervalos de número 
    //Generar el número aleatorio
    //Inicializar el número de intentos 
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');//Cambiar un atributo por otro --->SetAttribute 

}

condicionesIniciales();