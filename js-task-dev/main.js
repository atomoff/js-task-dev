const prompt = require("prompt-sync")();
// Task -1

// function reGister() {
//     let name = prompt("Enter your Name...");
//     let surname = prompt("Enter your SuName...");
//     let mail = prompt("Enter your Email...");
//     console.log(`${mail}-${surname} ${name}`);

//     return (`${mail}-${surname} ${name}`)
// }

// reGister();

//---------------------------------------------


//Task - 2
// function cosT() {
//     let km = prompt("Enter Distance...");
//     km = parseFloat(km)
//     let cost = 5 + (km*0.25)
//     console.log(cost);

//     return (cost);
// }

// cosT();
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
//         Name : "Tomato",
//         Price: 2.35,
//         Quantity: 3,
//         Promotion : false
//     }
// ]

// function disCounter(pros) {
//     pros.forEach(pro => {
//         if(pro.Quantity >= 5){
//             let x = pro.Price * 0.9;
//             pro.Price = x;

//         }
//         if (pro.Promotion == true) {
//             let y = pro.Price * 0.85;
//             pro.Price = y;
//         }
//     });
//     console.log(pros);

    
// }
// disCounter(pros)