let europeEmissions : number = 4209.3;
let europe2008 : number = 4965.7;
let africaEmissions : number = 1235.5;
let southAfricaEmissions : number = 1261.5;
let northAmericaEmissions : number = 6035.6;
let asiaEmissions : number = 16274.1;
let australiaEmissions : number = 2100.5;

let worldEmissions = europeEmissions + africaEmissions + southAfricaEmissions + northAmericaEmissions + asiaEmissions + australiaEmissions;

let satz1 : string = "Die Emission von Europa ist ";
satz1 += europeEmissions + " CO2.";

let prozent : string = " 4%";

let satz2 : string = " Relativ zur Gesamtemission der Welt verursacht Europe damit";
satz2 += prozent;

let differenzEuropa : number = europeEmissions;
differenzEuropa = europeEmissions - europe2008;

let satz3 : string =" Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um 1,2%. verändert. ";

let satz4 : string ="2018 im Vergleich zu 2008 sind das -400 kg CO2."


window.addEventListener('load',init);

function init(): void {
    (document.querySelector("#europa") as HTMLElement).addEventListener('click',Europa);
    (document.querySelector("#asia") as HTMLElement).addEventListener('click',Asien);
    (document.querySelector("#sa") as HTMLElement).addEventListener('click',SuedAmerika);
    (document.querySelector("#na") as HTMLElement).addEventListener('click',NordAmerika);
    (document.querySelector("#a") as HTMLElement).addEventListener('click',Afrika);
    (document.querySelector("#aus") as HTMLElement).addEventListener('click',Australien);
}

let infos = document.querySelector("#info1") as HTMLElement;

function Europa () {
    console.log("Emissionen aus Europa");
   let Europa = document.querySelector("title") as HTMLElement;
   Europa.innerHTML = "Emissionen in Europa:";
   let en = document.querySelector("h1") as HTMLElement;
   en.innerHTML = "Emissionen in Europa:";
}

function Asien () {
    console.log("Emissionen aus Asien");
   let Asien = document.querySelector("title") as HTMLElement;
   Asien.innerHTML = "Emissionen in Asien:";
   let eu = document.querySelector("h1") as HTMLElement;
   eu.innerHTML = "Emissionen in Asien:";
   infos.innerHTML = "12954.7";
  
}
function SuedAmerika () {
    console.log("Emissionen aus Südamerika");
   let suedamerika = document.querySelector("title") as HTMLElement;
   suedamerika.innerHTML = "Emissionen in Südamerika:";
   let ea = document.querySelector("h1") as HTMLElement;
   ea.innerHTML = "Emissionen in Südamerika:";
}
function NordAmerika () {
    console.log("Emissionen aus Nordamerika");
   let nordamerika = document.querySelector("title") as HTMLElement;
   nordamerika.innerHTML = "Emissionen in Nordamerika:";
   let ee = document.querySelector("h1") as HTMLElement;
   ee.innerHTML = "Emissionen in Nordamerika:";
}
function Afrika () {
    console.log("Emissionen aus Afrika");
   let afrika = document.querySelector("title") as HTMLElement;
   afrika.innerHTML = "Emissionen in Afrika:";
   let ei = document.querySelector("h1") as HTMLElement;
   ei.innerHTML = "Emissionen in Afrika:";
}
function Australien () {
    console.log("Emissionen aus Australien");
   let australien = document.querySelector("title") as HTMLElement;
   australien.innerHTML = "Emissionen in Australien:";
   let ee = document.querySelector("h1") as HTMLElement;
   ee.innerHTML = "Emissionen in Australien:";
}




console.log(satz1 + satz2 + satz3 + satz4);
console.log(africaEmissions, southAfricaEmissions, northAmericaEmissions, asiaEmissions, australiaEmissions)





