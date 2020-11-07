"use strict";
var cocktailbar;
(function (cocktailbar) {
    window.addEventListener("load", handleLoad); //Seite geladen
    function handleLoad(_event) {
        console.log("start");
        cocktailbar.generateContent(cocktailbar.data);
        let form = document.querySelector("div#form"); //nach div element suchen
        form.addEventListener("change", handleChange); //listener installieren
        let slider = document.querySelector("input#size"); //nach div element suchen
        slider.addEventListener("input", displaySize);
    }
    function handleChange(_event) {
        //     // console.log(_event);
        //     // let displayOrder
        //     // let drink : HTMLSelectElement = <HTMLSelectElement>document.querySelector("select");
        //     // console.log(drink.value);
        //     let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        //     console.log(inputs);
        let order = document.querySelector("div#order");
        order.innerHTML = "";
        let formData = new FormData(document.forms[0]);
        console.log(formData);
        for (let entry of formData) {
            // console.log(entry);
            let item = document.querySelector("[value = '" + entry[1] + "']");
            // console.log(item);
            let price = Number(item.getAttribute("price"));
            // console.log(price);
            order.innerHTML += item.name + " €" + price + "</br>";
        }
    }
    function displaySize(_event) {
        let progress = document.querySelector("progress"); // progress wurde als Element gefunden
        let size = _event.target.value; //size wurde als target gesetzt
        progress.value = parseFloat(size);
    }
})(cocktailbar || (cocktailbar = {}));
//# sourceMappingURL=index.js.map