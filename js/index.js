var juego = [];    
var turno = false,a,b;

desactive();

function inicar() {

    actived();

    document.getElementById("jugar").disabled = true;

    a=prompt("Name of player X");
    b=prompt("Name of player O");

    if (a == null || a == ""){
        alert("Faltan datos, se reiniciara la pagina, vuelva a intentarlo");
        reloader();
    }else{
        if (b == null || b == ""){
            alert("Faltan datos, se reiniciara la pagina, vuelva a intentarlo");
            reloader();
        }else{
            confirm (a + " VS " + b);
        }
    }
    document.getElementById("jugadorx").innerHTML = "Jugador X: " + a;
    document.getElementById("jugadory").innerHTML = "Jugador O: " + b;
    
    if (turno == false) {
        document.getElementById("turno").innerHTML ="Turno: " + a;
    }
}
function reloader() {
    location.reload();
}
function jugar(jkl){

    
    
    if (turno == false){
        document.getElementById(jkl).value = "X";
        juego[jkl]="X";
        if (turno == false) {
            document.getElementById("turno").innerHTML ="Turno: " + b;
        }
        turno = true;
        validar("X"); 
        document.getElementById(jkl).disabled = true;
    }
    else{ 
        document.getElementById(jkl).value = "O";
        juego[jkl]="O";
        if (turno == true) {
            document.getElementById("turno").innerHTML ="Turno: " + a;
        }
        turno = false;
        validar("O"); 
        document.getElementById(jkl).disabled = true; 
    }
}

function validar(letra){

    mostrar ="Ganador: ";
            
    if(juego[1] == letra && juego[2] == letra && juego[3] == letra){
        if (letra == "X") {
            document.getElementById("gana").innerHTML = mostrar + a;
            desactive();
            document.getElementById("turno").innerHTML ="Turno: ";
        } else {
            document.getElementById("gana").innerHTML = mostrar + b;
            desactive();
            document.getElementById("turno").innerHTML ="Turno: ";
        }   
    }else{
        if (juego[4] == letra && juego[5] == letra && juego[6] == letra) {
            if (letra == "X") {
                document.getElementById("gana").innerHTML = mostrar + a;
                desactive();
                document.getElementById("turno").innerHTML ="Turno: ";
            } else {
                document.getElementById("gana").innerHTML = mostrar + b;
                desactive();
                document.getElementById("turno").innerHTML ="Turno: ";
            }     
        }else{
            if (juego[7] == letra && juego[8] == letra && juego[9] == letra) {
                if (letra == "X") {
                    document.getElementById("gana").innerHTML = mostrar + a;
                    desactive();
                    document.getElementById("turno").innerHTML ="Turno: ";
                } else {
                    document.getElementById("gana").innerHTML = mostrar + b;
                    desactive();
                    document.getElementById("turno").innerHTML ="Turno: ";
                }     
            }else{
                if (juego[1] == letra && juego[4] == letra && juego[7] == letra) {
                    if (letra == "X") {
                        document.getElementById("gana").innerHTML = mostrar + a;
                        desactive();
                        document.getElementById("turno").innerHTML ="Turno: ";
                    } else {
                        document.getElementById("gana").innerHTML = mostrar + b;
                        desactive();
                        document.getElementById("turno").innerHTML ="Turno: ";
                    }      
                }else{
                    if (juego[2] == letra && juego[5] == letra && juego[8] == letra) {
                        if (letra == "X") {
                            document.getElementById("gana").innerHTML = mostrar + a;
                            desactive();
                            document.getElementById("turno").innerHTML ="Turno: ";
                        } else {
                            document.getElementById("gana").innerHTML = mostrar + b;
                            desactive();
                            document.getElementById("turno").innerHTML ="Turno: ";
                        }      
                    }else{
                        if (juego[3] == letra && juego[6] == letra && juego[9] == letra) {
                            if (letra == "X") {
                                document.getElementById("gana").innerHTML = mostrar + a;
                                desactive();
                                document.getElementById("turno").innerHTML ="Turno: ";
                            } else {
                                document.getElementById("gana").innerHTML = mostrar + b;
                                desactive();
                                document.getElementById("turno").innerHTML ="Turno: ";
                            }      
                        }else{
                            if (juego[1] == letra && juego[5] == letra && juego[9] == letra) {
                                if (letra == "X") {
                                    document.getElementById("gana").innerHTML = mostrar + a;
                                    desactive();
                                    document.getElementById("turno").innerHTML ="Turno: ";
                                } else {
                                    document.getElementById("gana").innerHTML = mostrar + b;
                                    desactive();
                                    document.getElementById("turno").innerHTML ="Turno: ";
                                }      
                            }else{
                                if (juego[7] == letra && juego[5] == letra && juego[3] == letra) {
                                    if (letra == "X") {
                                        document.getElementById("gana").innerHTML = mostrar + a;
                                        desactive();
                                        document.getElementById("turno").innerHTML ="Turno: ";
                                    } else {
                                        document.getElementById("gana").innerHTML = mostrar + b;
                                        desactive();
                                        document.getElementById("turno").innerHTML ="Turno: ";
                                    }  
                                }else{
                                    /* if (juego[1] == "X"||"O" && juego[2] == "X"||"O" && juego[3] == "X"||"O" && juego[4] == "X"||"O" && juego[5] == "X"||"O" && juego[6] == "X"||"O" && juego[7] == "X"||"O" && juego[8] == "X"||"O" && juego[9] == "X"||"O"){
                                        document.getElementById("gana").innerHTML = "------EMPATE!------";
                                        document.getElementById("turno").innerHTML ="Turno: ";
                                    } */
                                }     
                            }
                        }
                    }
                }
            }
        }
    }
}
function desactive() {
    document.getElementById("1").disabled = true;
    document.getElementById("2").disabled = true;
    document.getElementById("3").disabled = true;
    document.getElementById("4").disabled = true;
    document.getElementById("5").disabled = true;
    document.getElementById("6").disabled = true;
    document.getElementById("7").disabled = true;
    document.getElementById("8").disabled = true;
    document.getElementById("9").disabled = true;   
}
function actived() {
    document.getElementById("1").disabled = false;
    document.getElementById("2").disabled = false;
    document.getElementById("3").disabled = false;
    document.getElementById("4").disabled = false;
    document.getElementById("5").disabled = false;
    document.getElementById("6").disabled = false;
    document.getElementById("7").disabled = false;
    document.getElementById("8").disabled = false;
    document.getElementById("9").disabled = false;
}
