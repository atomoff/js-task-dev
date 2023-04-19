// Task -1

// function Register() {
//     const prompt = require("prompt-sync")();
//     let name = prompt("Enter your Name...");
//     let surname = prompt("Enter your SuName...");
//     let mail = prompt("Enter your Email...");
//     console.log(`${mail}-${surname} ${name}`);

//     return (`${mail}-${surname} ${name}`)
// }

// Register();

//---------------------------------------------


//Task - 2
// function Cost() {
//     const prompt = require("prompt-sync")();
//     let km = prompt("Enter Distance...");
//     km = parseFloat(km)
//     let cost = 5 + (km*0.25)
//     console.log(cost);

//     return (cost);
// }

// Cost();
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

// function Discounter(pros) {
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
// Discounter(pros)