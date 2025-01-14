function poloha(){
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    
    if(x>50 || y>50 || y<0 || x<0){
        document.getElementById("vysledek").innerHTML = "Leží mimo čtverec"
        document.getElementById("vysledek").style.color = "red"
    } else if (x == 50 || y == 50 || y == 0 || x == 0){
        document.getElementById("vysledek").innerHTML = "Leží na hranici"
            document.getElementById("vysledek").style.color = "orange"
    } else if (0 < x && x < 50 && 0 < y && y < 50) {
        document.getElementById("vysledek").innerHTML = "Leží uvnitř čtverce"
        document.getElementById("vysledek").style.color = "green"
    } else {
        document.getElementById("vysledek").innerHTML = "Leží mimo čtverec"
        document.getElementById("vysledek").style.color = "red"
    }
}
