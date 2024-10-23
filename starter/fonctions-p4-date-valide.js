/*
FONCTIONS - PRÉPA 4 : Date valide - version 2
Écrire un programme JS qui teste si une date entrée par l'utilisateur est une date valide ou pas
- Déclarez deux fonctions :
  - isBissextile retourne true ou false selon que l'année est bissextile ou pas
  - isValid retourne true ou false selon que la date est valide ou pas
- Utilisez isBissextile dans isValid pour gérer le cas du mois de février
- Utilisez isValid pour décider si votre date est valide
  avant d'afficher votre message dans la console
*/
const day = parseInt(prompt("Donne-moi un jour en chiffres"));
const month = parseInt(prompt("Donne moi un mois en chiffres"));
const year = parseInt(prompt("Donne-moi une année"));
let maxDays = 31;
// Fonction pour vérifier si une année est bissextile
function isValid(day,month,year) {
    isBissextile(day,month,year);
    if (month === 1 || month === 4 || month === 6 || month === 9 || month === 11) {
        maxDays = 30;
    }
    if (day && month && year){
        if (day > 0 && month>0 && year>0){
            if (day <=maxDays && month<=12){
                console.log(`Super, le ${day}/${month}/${year} est une date valide`);
            } else{
                console.log(`La date ${day}/${month}/${year} n'est pas une date valide`);
            }
        }
    } else {
        console.log("Entrez un nombre !!!");
    }
}
function isBissextile(day,month,year) {
    if (month === 2) {
        maxDays = 28;
        if ((year % 4 === 0 && year % 100 === 0) || year % 400 === 0) {
            maxDays = 29;
        }
    }
}
isValid(day,month,year);


//Condition si c'est bissextile

//condition pour si c'est 30


// Fonction pour vérifier si une date est valide


// Demander à l'utilisateur de saisir une date


// Utilisation de la fonction isValid pour vérifier la date

