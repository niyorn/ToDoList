//---------------------------------------------------Variable------------------------------------------------
var voegTaakTekst = document.querySelector('header input');
var voegTaakButton = document.querySelector('header button');


//----------------------------------------------------Function-----------------------------------------------
//Kijkt of de gebruiker een taak ingegevuld heeft
function voegTaak() {
    var inputTaak = document.querySelector('header input').value;
    if (inputTaak) {
        voegTaakAanLijst(inputTaak); //voeg taak aan lijst
        resetTekst();
    }
}

//Voegt taak aan lijst toe
function voegTaakAanLijst(inputTaak) {

    var lijst = document.querySelector('UL');
    var taak = document.createElement('LI');
    taak.innerText = inputTaak; //voeg de tekst aan toe LI element
    var verwijderButton = document.createElement('BUTTON');
    var verwijderIcoon = document.createElement('I');
    verwijderIcoon.classList.add('fa', 'fa-trash-o', 'fa-2x'); //de icoon wordt geladen via http://fontawesome.io/ daarom de classes

    lijst.insertBefore(taak, lijst.childNodes[0]); //nieuwe taken komen boven aan de lijst
    taak.appendChild(verwijderButton);
    verwijderButton.appendChild(verwijderIcoon);

    verwijderButton.addEventListener('click', verwijderTaak); // verwijder de taak  als de gebruiker op de verwijder  knop klikt
}

//voeg taak aan lijst als de gebruiker op enter drukt
function voegTaakAanLijstEnterPress(e){
  var taak = this.value;
  if(e.key == 'Enter'){
    voegTaakAanLijst(taak);
    resetTekst();
  }
}

function verwijderTaak() {
    var lijst = this.parentNode.parentNode; // de lijst
    var item = this.parentNode; // de item
    item.classList.add('verwijder');

    //verwijder de item pas als de css animatie afgespeeld is
    setTimeout(function() {
      lijst.removeChild(item); //verwijder de item
    }, 400);

}

function resetTekst(){
    document.querySelector('header input').value = ''; //input text wordt weer weggehaald, zodat de gebruiker meteen nieuw taak kan invullen
}



//-------------------------------------------------------Eventlistener-------------------------------------
//Gebruiker klikt op toevoegen
voegTaakButton.addEventListener('click', voegTaak);
//Gebruiker klikt op Enter
voegTaakTekst.addEventListener('keypress', voegTaakAanLijstEnterPress);
