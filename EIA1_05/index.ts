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

let keineLustZuRechnen : string = " please fill out the gap.";

let satz2 : string = " Relativ zur Gesamtemission der Welt verursacht Europe damit";
satz2 += keineLustZuRechnen;

let differenzEuropa : number = europeEmissions;
differenzEuropa = europeEmissions - europe2008;

let satz3 : string =" Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um ca. ";
satz3 += Math.round(differenzEuropa) + " kg CO2 verändert";



console.log(satz1 + satz2 + satz3);





