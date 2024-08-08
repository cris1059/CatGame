document.addEventListener("DOMContentLoaded", listen);

let dificultades = document.getElementById('dificulted');
dificultades.style.display = 'none';
let dificultad = '';

function listen() {
    const body = document.querySelector('body');
    body.addEventListener('click', clicks);
}

let tablero = [-1, -1, -1,
                -1, -1, -1,
                -1, -1, -1];
let first = true;

function clicks(event) {

    if(event.target && event.target.classList.contains('cuadro1')) marcadraw(1, dificultad);
    if(event.target && event.target.classList.contains('cuadro2')) marcadraw(2, dificultad);
    if(event.target && event.target.classList.contains('cuadro3')) marcadraw(3, dificultad);
    if(event.target && event.target.classList.contains('cuadro4')) marcadraw(4, dificultad);
    if(event.target && event.target.classList.contains('cuadro5')) marcadraw(5, dificultad);
    if(event.target && event.target.classList.contains('cuadro6')) marcadraw(6, dificultad);
    if(event.target && event.target.classList.contains('cuadro7')) marcadraw(7, dificultad);
    if(event.target && event.target.classList.contains('cuadro8')) marcadraw(8, dificultad);
    if(event.target && event.target.classList.contains('cuadro9')) marcadraw(9, dificultad);
    if(event.target && event.target.id == 'play') dificultades.style.display = 'block';
    if(event.target && event.target.id == 'easy') menu('easy');
    if(event.target && event.target.id == 'medium') menu('medium');
    if(event.target && event.target.id == 'hard') menu('hard');
}

function menu(modo) {
    
    document.querySelectorAll('.marca').forEach(function(label) {label.textContent = '';});
    document.querySelector('.titulo').textContent = 'GATO';
    document.getElementById('menu').style.display = 'none';
    dificultad = modo;
}

function marcadraw(casilla, dificultad){
    let cas = document.getElementById(casilla);
    if(tablero[casilla-1] == -1){
        cas.textContent = 'x';
        tablero[casilla - 1] = 1;
        if(ganador("Jugador 1")) dificultad = '';
        tablas()
        if(dificultad == 'easy') setTimeout(()=>{
            bot__easy();
        }, 800);
        else if (dificultad == 'medium') setTimeout(()=>{
            bot__medium();
        }, 800);
        else if (dificultad == 'hard') setTimeout(()=>{
            bot__hard();
        }, 800); 
    }
}

function bot__easy() {
    let encuentra = true;
    while (encuentra) {
        let casale = Math.floor(Math.random() * (10));
        if (tablero[casale] == -1) {
            let cas = document.getElementById(casale+1);
            cas.textContent = 'o';
            tablero[casale] = 0;
            ganador("Bot Facil");
            break;
        }
    }
}

function bot__medium() {
    console.log(first);
    let encuentra = true;
    while (encuentra){
        let casale = Math.floor(Math.random() * (10));
        if(tablero[casale] == -1){
            if((((casale+1) >= 0 &&  (casale+1) <= 8) && (tablero[casale+1] == 0)) ||
                (((casale-3) >= 0 && (casale-3) <= 8) && (tablero[casale-3] == 0)) ||
                (((casale-1) >= 0 && (casale-1) <= 8) && (tablero[casale-1] == 0)) ||
                (((casale+3) >= 0 && (casale+3) <= 8) && (tablero[casale+3] == 0)) ||
                (((casale-2) >= 0 && (casale-2) <= 8) && (tablero[casale-2] == 0)) ||
                (((casale-4) >= 0 && (casale-4) <= 8) && (tablero[casale-4] == 0)) ||
                (((casale+4) >= 0 && (casale+4) <= 8) && (tablero[casale+4] == 0))){
                let cas = document.getElementById(casale+1);
                cas.textContent = 'o';
                tablero[casale] = 0;
                ganador("Bot Medio");
                break;
                }
            else {
                let cas = document.getElementById(casale+1);
                cas.textContent = 'o';
                tablero[casale] = 0;
                ganador("Bot Medio");
                first = false;
                break;
            }
        }
    }
}

function bot__hard(){
    console.log(first);
    let encuentra = true;
    while (encuentra){
        let casale = Math.floor(Math.random() * (10));
        if(tablero[casale] == -1){
            if((((casale+1) >= 0 &&  (casale+1) <= 8) && (tablero[casale+1] == 0)) ||
                (((casale-3) >= 0 && (casale-3) <= 8) && (tablero[casale-3] == 0)) ||
                (((casale-1) >= 0 && (casale-1) <= 8) && (tablero[casale-1] == 0)) ||
                (((casale+3) >= 0 && (casale+3) <= 8) && (tablero[casale+3] == 0)) ||
                (((casale-2) >= 0 && (casale-2) <= 8) && (tablero[casale-2] == 0)) ||
                (((casale-4) >= 0 && (casale-4) <= 8) && (tablero[casale-4] == 0)) ||
                (((casale+4) >= 0 && (casale+4) <= 8) && (tablero[casale+4] == 0))){
                let cas = document.getElementById(casale+1);
                cas.textContent = 'o';
                tablero[casale] = 0;
                ganador("Bot Dificil");
                break;
                }
            else if(first) {
                let cas = document.getElementById(casale+1);
                cas.textContent = 'o';
                tablero[casale] = 0;
                ganador("Bot Dificil");
                first = false;
                break;
            }
        }
    }
    
}




function ganador(player) {
    if(tablero[0] == tablero[1] && tablero[1] == tablero[2] && tablero[0] != -1) return win(player);
    if(tablero[3] == tablero[4] && tablero[4] == tablero[5] && tablero[3] != -1) return win(player);
    if(tablero[6] == tablero[7] && tablero[7] == tablero[8] && tablero[6] != -1) return win(player);
    if(tablero[0] == tablero[3] && tablero[3] == tablero[6] && tablero[0] != -1) return win(player);
    if(tablero[1] == tablero[4] && tablero[4] == tablero[7] && tablero[1] != -1) return win(player);
    if(tablero[2] == tablero[5] && tablero[5] == tablero[8] && tablero[2] != -1) return win(player);
    if(tablero[0] == tablero[4] && tablero[4] == tablero[8] && tablero[0] != -1) return win(player);
    if(tablero[2] == tablero[4] && tablero[4] == tablero[6] && tablero[2] != -1) return win(player);
}

function win(player) {
    alert("Ganador: "+player);
    window.location.href = "index.html";

    return true}

    function tablas() {
        let cont = 0;
        for (let i = 0; i < tablero.length; i++) {
            if(tablero[i] != -1) cont++;
        }
        if (cont == tablero.length) {    
        alert('Nadie Gano. TABLAS!!');
        window.location.href = "index.html";
        return true
        } else{
            return false;
        }
    }