"use strict";
function makeSandwich(...items) {
    console.log(`Making a sandwich with the following items: ${items.join(', ')}`);
}
// Example usage:
makeSandwich("turkey", "bacon", "lettuce", "tomato", "mayo");
makeSandwich("peanut butter", "jelly");
makeSandwich("ham", "cheese");
