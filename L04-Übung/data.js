"use strict";
var cocktailbar;
(function (cocktailbar) {
    cocktailbar.data = {
        drink: [
            { name: "Mojito", price: 15.00 },
            { name: "Caipi", price: 18.00 },
            { name: "Cuba Libre", price: 12.00 },
            { name: "EIA2 Spezial", price: 22.00 }
        ],
        extras: [
            { name: "Ice", price: 2.00 },
            { name: "Straw", price: 0.50 },
            { name: "Lemon", price: 0.20 }
        ],
        glass: [
            { name: "Slim", price: 4.00 },
            { name: "Wide", price: 5.00 },
            { name: "Papercup", price: 2.00 }
        ]
    };
})(cocktailbar || (cocktailbar = {}));
//# sourceMappingURL=data.js.map