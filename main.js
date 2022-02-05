var key = document.querySelectorAll('#calculator p');
var decimal = false;
var breakable = false;
var operator = ['/','x','-','+'];
var maxChara = 15;

for(var i = 0; i < key.length; i++) {
    key[i].onclick = function() {

        var screen = document.getElementById("screen");
        var screenValue = screen.innerHTML;
        var buttonValue = this.innerHTML;

        // remise a 0 de l'écran
        if (buttonValue == 'reset') {
            screen.innerHTML = "";
            decimal = false;
        } 

        // calcul de l'opération
        else if (buttonValue == '=') {
            var calcul;
            var screenLength = screenValue.length

            //Si le dernier caractère est un opérateur on le supprime
            if(operator.includes(screenValue.substr(screenLength-1,screenLength-1)) == true ) {
                calcul = screenValue.substr(0,screenLength-1);
            } else {
                calcul = screen.innerHTML;
            }

            screen.innerHTML = Math.round(eval(calcul.replace(/x/g, '*'))*1000) / 1000;
            breakable = true
        }

        // Suppression du dernier caractère
        else if (buttonValue == 'del') {
            var screenLength = screenValue.length
            screen.innerHTML = screenValue.substr(0,screenLength-1);
        }

        // ajout des caractères
        else {

            //On ne peut pas mettre plus de 15 caractere sur l'écran
            if (screenValue.length < maxChara) {
                // si un calcul vient d'être fait et que le premier nouveau caractère est un chiffre
                // on supprime le résultat du dernier calcul
                if (buttonValue >= 0 & buttonValue <= 9) {
                    if (breakable == true) {
                        screen.innerHTML = "";
                        decimal = false;
                        breakable = false;
                    }
                }
                else {

                    if (screenValue == "" & buttonValue == "/" | screenValue == "" & buttonValue =="x") {
                        buttonValue = "";
                    }

                    else {

                        if (operator.includes(screenValue.substr(screenValue.length-1,screenValue.length-1)) == true) {
                            buttonValue = "";
                        }
                    }

                    breakable = false;
                    lastValue = buttonValue;
                }

                screen.innerHTML += buttonValue;
            }

        }
    }
}

var theme = 1;

window.onload = function() {
    if(localStorage.getItem("themeCalculApp") != null) {
        theme = localStorage.getItem("themeCalculApp") 
        if (theme > 1) {
            theme = theme - 1;
            changeTheme();
        } else {
            theme = 3;
            changeTheme();
        }
    }
}


var root = document.documentElement;

function changeTheme() {
    var selector = document.getElementById("selector");
    var header = document.getElementById("headerContainer");
    var screen = document.getElementById("screenContainer");
    var equal = document.getElementById("equal");

    if (theme == 1) {
        selector.style.justifyContent = "center";

        root.style.setProperty('--main-bg-color', 'hsl(0, 0%, 90%)');
        root.style.setProperty('--toggle-bg-color', 'hsl(0, 5%, 81%)');
        root.style.setProperty('--screen-bg-color', 'hsl(0, 0%, 93%)');

        root.style.setProperty('--primary-key-bg', 'hsl(45, 7%, 89%)');
        root.style.setProperty('--primary-key-shadow', 'hsl(35, 11%, 61%)');

        root.style.setProperty('--second-key-bg', 'hsl(185, 42%, 37%)');
        root.style.setProperty('--second-key-shadow', 'hsl(185, 58%, 25%)');

        root.style.setProperty('--third-key-bg', 'hsl(25, 98%, 40%)');
        root.style.setProperty('--third-key-shadow', 'hsl(25, 99%, 27%)');

        root.style.setProperty('--text-color', 'hsl(60, 10%, 19%)');

        header.style.color = 'hsl(60, 10%, 19%)';
        screen.style.color = 'hsl(60, 10%, 19%)';

        theme = 2;
        localStorage.setItem('themeCalculApp', 2);
    }

    else if(theme == 2) {
        selector.style.justifyContent = "flex-end";

        root.style.setProperty('--main-bg-color', 'hsl(268, 75%, 9%)');
        root.style.setProperty('--toggle-bg-color', 'hsl(268, 71%, 12%)');
        root.style.setProperty('--screen-bg-color', 'hsl(268, 71%, 12%)');

        root.style.setProperty('--primary-key-bg', 'hsl(268, 47%, 21%)');
        root.style.setProperty('--primary-key-shadow', 'hsl(290, 70%, 36%)');

        root.style.setProperty('--second-key-bg', 'hsl(281, 89%, 26%)');
        root.style.setProperty('--second-key-shadow', 'hsl(285, 91%, 52%)');

        root.style.setProperty('--third-key-bg', 'hsl(176, 100%, 44%)');
        root.style.setProperty('--third-key-shadow', 'hsl(177, 92%, 70%)');

        root.style.setProperty('--text-color', 'hsl(52, 100%, 62%)');

        header.style.color = 'hsl(52, 100%, 62%)';
        screen.style.color = 'hsl(52, 100%, 62%)';

        equal.style.color = 'hsl(198, 20%, 13%)';

        theme = 3;
        localStorage.setItem('themeCalculApp', 3);
    }

    else {
        selector.style.justifyContent = "flex-start";

        root.style.setProperty('--main-bg-color', 'hsl(222, 26%, 31%)');
        root.style.setProperty('--toggle-bg-color', 'hsl(223, 31%, 20%)');
        root.style.setProperty('--screen-bg-color', 'hsl(224, 36%, 15%)');

        root.style.setProperty('--primary-key-bg', 'hsl(30, 25%, 89%)');
        root.style.setProperty('--primary-key-shadow', 'hsl(28, 16%, 65%)');

        root.style.setProperty('--second-key-bg', 'hsl(225, 21%, 49%)');
        root.style.setProperty('--second-key-shadow', 'hsl(224, 28%, 35%)');

        root.style.setProperty('--third-key-bg', 'hsl(6, 63%, 50%)');
        root.style.setProperty('--third-key-shadow', 'hsl(6, 70%, 34%)');

        root.style.setProperty('--text-color', 'hsl(221, 14%, 31%)');

        header.style.color = 'white';
        screen.style.color = 'white';

        equal.style.color = 'white';

        theme = 1;
        localStorage.setItem('themeCalculApp', 1);
    }
}