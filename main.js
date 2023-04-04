var win = 0;
var draw = 0;
var lose = 0;


function geprandom() {
    var rnd = Math.random();
    if (rnd <= 1 / 3) {
        document.getElementById("ellen").innerHTML = "KŐ";
        return "ko";
    }
    else if (rnd > 2 / 3) {
        document.getElementById("ellen").innerHTML = "PAPÍR";
        return "papir";
    }
    document.getElementById("ellen").innerHTML = "OLLÓ";
    return "ollo";
}

function kor(jatekose) {
    let ellenfel = geprandom();
    if (jatekose.id == ellenfel) {
        document.getElementById("result").innerHTML = "Döntetlen!";
        draw += 1; document.getElementById("scoreDraw").innerHTML = "Döntetlen: " + draw;
    }
    else if (jatekose.id == "ko") {
        if (ellenfel == "papir") {
            document.getElementById("result").innerHTML = "Vesztettél!";
            lose += 1; document.getElementById("scoreForCmp").innerHTML = "Gép: " + lose;
        }
        else {
            document.getElementById("result").innerHTML = "Győztél! :)";
            win += 1; document.getElementById("scoreForYou").innerHTML = "Játékos: " + win;
        }
    }
    else if (jatekose.id == "papir") {
        if (ellenfel == "ko") {
            document.getElementById("result").innerHTML = "Győztél! :)";
            win += 1; document.getElementById("scoreForYou").innerHTML = "Játékos: " + win;
        }

        else {
            document.getElementById("result").innerHTML = "Vesztettél!";
            lose += 1; document.getElementById("scoreForCmp").innerHTML = "Gép: " + lose;
        }
    }
    else if (jatekose.id == "ollo") {
        if (ellenfel == "papir") {
            document.getElementById("result").innerHTML = "Győztél! :)";
            win += 1; document.getElementById("scoreForYou").innerHTML = "Játékos: " + win;
        }
        else {
            document.getElementById("result").innerHTML = "Vesztettél!";
            lose += 1; document.getElementById("scoreForCmp").innerHTML = "Gép: " + lose;
        }
    }
}