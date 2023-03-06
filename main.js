'use strict';

function creaElementi(number){
    for (let i=0;i<5;i++)   {
        number.push(Math.floor(Math.random() * 10) + 1);
        let div=document.createElement("div");
        let h1=document.createElement("h1");
        h1.innerText=number[i];
        div.append(h1);
        container.append(div);
    }
}

function sparisci(number){
    container.innerHTML="";
    let score=0;
    for (let i=0;i<5;i++){
        let tmp=Number(prompt("inserisci il numero: "+i+1));
        if (tmp===number[i]){
             container.innerHTML+=`<div><h1 class="green">${number[i]}</h1><h2>${i+1}</h2></div>`;
             score++;
             console.log(`è stato indovinati il numero: ${number[i]} il tuo punteggio è: ${score}`);
        }
        else container.innerHTML+=`<div><h1 class="red">${number[i]}</h1><h2>${i+1}</h2></div>`;
    } 

    console.log(`Hai indovinato: ${score} numeri`);
    score=0;
}

const container=document.getElementById("numeri");
let number=[];
creaElementi(number);
setTimeout(function(){
    sparisci(number);
},5000);
