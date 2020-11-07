"use strict";
var cocktailbar;
(function (cocktailbar) {
    function generateContent(_data) {
        console.log(_data);
        for (let category in _data) {
            // console.log(category);
            let items = _data[category];
            let group = null;
            switch (category) {
                case "drink":
                    group = createSelect(items, category);
                    break;
                case "glass":
                    group = createSingle(items);
                    break;
                case "extras":
                    group = createMultible(items, category);
                    break;
                default:
                    break;
            }
            let fieldset = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);
        }
    }
    cocktailbar.generateContent = generateContent;
    function createSelect(_items, _category) {
        let group = document.createElement("div");
        let select = document.createElement("select");
        group.appendChild(select);
        for (let item of _items) {
            let option = document.createElement("option");
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
    function createSingle(_items) {
        return null;
    }
    function createMultible(_items, _category) {
        let group = document.createElement("div");
        for (let item of _items) {
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", item.price.toFixed(2));
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;
            let label = document.createElement("label"); //label=gehört zu checkbox=größere schaltfläche
            label.textContent = item.name;
            label.htmlFor = item.name;
            group.appendChild(checkbox);
            group.appendChild(label);
        }
        return group;
    }
})(cocktailbar || (cocktailbar = {}));
//# sourceMappingURL=GenerateContent.js.map