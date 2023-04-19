const prompt = require("prompt-sync")();
// Task -1

// function register() {
//     let name = prompt("Enter your Name...");
//     let surname = prompt("Enter your SuName...");
//     let mail = prompt("Enter your Email...");
//     console.log(`${mail}-${surname} ${name}`);

//     return (`${mail}-${surname} ${name}`)
// }

// register();

//---------------------------------------------


//Task - 2
// function cost() {
//     let km = prompt("Enter Distance...");
//     km = parseFloat(km)
//     let cost = 5 + (km*0.25)
//     console.log(cost);

//     return (cost);
// }

// cost();
//-------------------------------------------------

//Task-3

// const pros = [
//     {
//         Name : "Tomato",
//         Price: 2.35,
//         Quantity: 5,
//         Promotion : false
//     },
//     {
//         Name : "Onion",
//         Price: 2,
//         Quantity: 4,
//         Promotion : true
//     },
//     {
//         Name : "Apple",
//         Price: 1.7,
//         Quantity: 3,
//         Promotion : false
//     },
//     {
//         Name : "Potato",
//         Price: 3,
//         Quantity: 5,
//         Promotion : true
//     }
// ]

// function disCounter(pro) {
//     let x = pro.Price;
//         if(pro.Quantity >= 5){
//             x = pro.Price * 0.9;

//         }
//         if (pro.Promotion == true) {
//             x = pro.Price * 0.85;
//         }
//         return (x)

    
// }

// pros.forEach(pro => {
//     pro.Price = disCounter(pro);
// });
// console.log(pros);