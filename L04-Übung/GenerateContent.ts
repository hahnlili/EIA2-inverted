namespace cocktailbar{
    export function generateContent(_data:Data) {
        console.log(_data);

        for (let category in _data){
            // console.log(category);
            let items: Item[]= _data[category];

            let group: HTMLElement | null = null

            switch (category) {
                case "drink": 
                    group = createSelect(items, category);
                    break;
                case "glass": 
                    group  = createSingle(items);
                    break;
                case "extras": 
                    group = createMultible(items, category);
                    break;
                default:
                    break;
            }

                    
                let fieldset: HTMLFieldSetElement |  null  = document.querySelector("fieldset#"+ category);
                if (fieldset && group)
                        fieldset.appendChild(group);
            }
        }

        function createSelect(_items:Item[], _category : string):HTMLElement | null{
            let group: HTMLDivElement = document.createElement("div");
            let select: HTMLSelectElement = document.createElement("select");
            group.appendChild(select);
            for (let item of _items){
                let option : HTMLOptionElement = document.createElement("option");
                select.appendChild(option);
                option.textContent = item.name;
            
                
                // select.value = item.name;
                // select.setAttribute("price", item.price.toFixed(2));
                // select.name = _category;
                // select.id = item.name;
                
                // group.appendChild(select);

            }
            return group;
        }
        function createSingle(_items:Item[]):HTMLElement| null{
            return null;
        }
        function createMultible(_items:Item[], _category : string):HTMLElement| null{
            let group: HTMLDivElement = document.createElement("div");  
            for (let item of _items){
                let checkbox : HTMLInputElement = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.setAttribute("price", item.price.toFixed(2));
                checkbox.value = item.name;
                checkbox.name = _category;
                checkbox.id = item.name;
                
                let label: HTMLLabelElement = document.createElement("label");//label=gehört zu checkbox=größere schaltfläche
                label.textContent = item.name;
                label.htmlFor = item.name;

                group.appendChild(checkbox);
                group.appendChild(label);
            }
            return group;
        }
        

    }
