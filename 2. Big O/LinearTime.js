//  ----------------------O(n)----------------------

// const groceries = ["Milk", "Egg", "Flour", "Gainsboro", "Seeds", "Fruits", "Wheat"];

// const searchForItems = (item) => {
//     for (let i= 0; i < groceries.length; i++) {
//         if(groceries[i] === item){
//             console.log(`Found ${item}`);
//         }
//     }
// }

// searchForItems("Gainsboro"); // Output: Found Gainsboro


//  ----------------------O(2n)----------------------

const groceries = ["Milk", "Egg", "Flour", "Gainsboro", "Seeds", "Fruits", "Wheat"];

const searchForItems = (item) => {
    for (let i= 0; i < groceries.length; i++) {
        if(groceries[i] === item){
            console.log(`Found ${item}`);
        }
    }
    // -------O(n)-----------

    for(let j=0; j<groceries.length; j++){
        if(groceries[j] === item){
            console.log(`Found ${item} again`);
        }
    }
    // -------O(n)-----------
}

searchForItems("Gainsboro"); // Output: Found Gainsboro and Found Gainsboro again

// O(n) + O(n) = O(2n)
// O(2n) In this 2 is constant just drop the constant so it become O(n)