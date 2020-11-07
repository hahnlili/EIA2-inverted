namespace cocktailbar{
    window.addEventListener("load", handleLoad); //Seite geladen

    function handleLoad(_event:Event):void{
        console.log("start");

    cocktailbar.generateContent(cocktailbar. data);

        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form"); //nach div element suchen
        form.addEventListener("change",handleChange); //listener installieren
        let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#size"); //nach div element suchen
        slider.addEventListener("input", displaySize);
    }
    function handleChange(_event:Event):void{
    //     // console.log(_event);
    //     // let displayOrder
    //     // let drink : HTMLSelectElement = <HTMLSelectElement>document.querySelector("select");
    //     // console.log(drink.value);

    //     let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
    //     console.log(inputs);


        let order : HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
        order.innerHTML = "";

        let formData : FormData = new FormData(document.forms[0]);
        console.log(formData);

        for (let entry of formData){
            // console.log(entry);
            let item : HTMLInputElement = <HTMLInputElement>document.querySelector("[value = '" + entry[1] + "']");
            // console.log(item);
            let price: number = Number(item.getAttribute("price"));
            // console.log(price);

            order.innerHTML += item.name + " €" + price +"</br>"; 
        }

    }
    function displaySize(_event:Event):void{
        let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress"); // progress wurde als Element gefunden
        let size: string = (<HTMLInputElement>_event.target).value; //size wurde als target gesetzt
        progress.value = parseFloat(size);
    }
}
