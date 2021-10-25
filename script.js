//je crée mes variables globles à utiliser dans mon programme
//ci-dessous le variables de memoire  sur écran

const ecranElt = document.querySelector("#ecran");

//je crée la variable qui stocke la valeur precédente
let oldNumber = 0;

//variable qui stocke le nombre qui est affiché
let currentNumber = "";

//stockage de l'opération qui calcul 
let operation = null;



//on écoute les clicks sur les touches
window.onload = () =>{
    // On écoute les clics sur les touches
    let touchs = document.querySelectorAll("span");

    for(let touch of touchs){
        touch.addEventListener("click", setTouchs);
    }
}

function setTouchs(){
    let touch = this.innerText;

    //on vérifie si on a cliqué sur une touche nombre ou point(.)
    if(parseFloat(touch) >= 0  || touch === "."){
         //on met à jour la valeur d'affichage screenElt et on affiche sur l'écaran
         
        currentNumber = (currentNumber === "") ? touch.toString() : currentNumber + touch.toString();
        ecranElt.innerText = currentNumber;
    }else{
        switch(touch){
            //touche d'initialisation
            case "C" : 
            oldNumber = 0;
            currentNumber = "";
            operation = null
            ecranElt.innerText = 0;
            break;

            //calculs
            case "+" : 
            case "-" :
            case "*" : 
            case "/" :
            //on calcule le resultat de l'étape précédente
                oldNumber = (oldNumber === 0) ? parseFloat(currentNumber) : 
                calcResult(oldNumber, parseFloat(currentNumber), operation);

                //je mets à jour l'écran
                ecranElt.innerText = oldNumber;

                // on stocke mémorise l'opération
                operation = touch;

                //on réinitialise
                currentNumber = "";
                break;

                //on affiche le resultat
            case "=" : 
                 //on calcule le resultat de l'étape précédente
                oldNumber = (oldNumber === 0) ? parseFloat(currentNumber) : 
                calcResult(oldNumber, parseFloat(currentNumber), operation);

                //je mets à jour l'écran
                ecranElt.innerText = oldNumber;

                // on stocke le resultat
                currentNumber = oldNumber;

                //on réinitialise
                oldNumber = 0;
                break;


                
               
        }
       
    }     
       
}

function calcResult(nb1, nb2, operation){
    nb1 = parseFloat(nb1);
    nb2 = parseFloat(nb2);
    if(operation === "+") return nb1 + nb2;
    if(operation === "-") return nb1 - nb2;
    if(operation === "*") return nb1 * nb2;
    if(operation === "/") return nb1 / nb2;
}

   
