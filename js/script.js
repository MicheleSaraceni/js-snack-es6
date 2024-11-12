"use strict";
console.clear();

/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. 
*/

//Creo un array di oggetti bici 
const bikes = [
    { name: "Bicicletta da Corsa",weight: 8 },
    { name: "Mountain Bike",weight: 13 },
    { name: "Bicicletta Ibrida",weight: 12 },
    { name: "Bicicletta Pieghevole", weight: 11 },
    { name: "E-bike", weight: 20 }
]

//Faccio un ciclo sull'array e salvo in una var la bici piu leggera
let lightbike = bikes[0];
for (let i = 1; i < bikes.length; i++){
    if (bikes[i].peso < lightbike.peso){
        lightbike = bikes[i];
    }
}

//stampo la bici piu leggera
console.log("La bici più leggera è " + lightbike.name + " e pesa " + lightbike.weight + "kg.");

/*
Snack2
Creare un array di oggetti di squadre di calcio.
 Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

//Creo un array di oggetti bici squadre di calcio 
let squadre = [
    { nome: 'Juventus', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Inter', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Milan', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Roma', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Napoli', puntiFatti: 0, falliSubiti: 0 }
  ];
  
//Creo un ciclo e inserisco numeri random con la mia funzione per puntiFatti e per falliSubiti
for (let i = 0; i < squadre.length; i++){
    squadre[i].puntiFatti = random(0, 30);
    squadre[i].falliSubiti = random(0, 10);
}

//creo un nuovo array di oggetti con all'interno solamente nome e falli subiti e stampo in console
let fallitotali = [];
for (let i = 0; i < squadre.length; i++) {
    let { nome, falliSubiti } = squadre[i];
    fallitotali.push({ nome, falliSubiti });
    console.log("La squadra " + fallitotali[i].nome + " ha subito " + fallitotali[i].falliSubiti + " falli.");
}

/* 
Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
*/