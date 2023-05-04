function playOnclick(){
    globalObjects = {
        btnPlay: document.getElementById("btnPlay"),
        roleta:  document.getElementById("roleta"),
        btnStop: document.getElementById("btnStop")
    }

    globalObjects.timeInitial = new Date();
    globalObjects.btnPlay.style.visibility = "hidden";
    globalObjects.btnStop.style.visibility = "visible";
    globalObjects.roleta.style.animation = "roleta 2s linear infinite";
}

function calculate(){
    let timeFinal = new Date();
    let tempo = Math.abs(timeFinal - globalObjects.timeInitial);
    let box = parseInt(tempo / 250);
    if(box > 7){
        box = parseInt(box % 8);
    }
    console.log(globalObjects.timeInitial, timeFinal, tempo, box, (tempo / 250));
    return box;
}

function stopOnclick(){
    globalObjects.roleta.style["animation-play-state"] = "paused";
    globalObjects.btnStop.style.visibility = "hidden";
    let box = calculate();
    let boxGanhador = document.getElementById("opt".concat(box));
    document.getElementById("msgGanhador-premio").innerHTML = "Parabens, você ganhouu!!!".concat(boxGanhador.innerHTML);
}
