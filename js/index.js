// console.log("hello");

// let userInput = parseInt(prompt("Please enter a random number"));
// let tips, text, amount; 

// if( userInput < 20){
//     tips = userInput * 0.1;
// } else if( userInput >= 20 && userInput < 50) {
//     tips = userInput * 0.075;
// }else if(userInput < 0){
//     console("Amount can't be negative");
//     text = 0;
// } else { 
//     tips = userInput * 0.05;
// }

// amount = userInput + tips;

// if( text != 0 ){
//     text = `Amount: ${amount} tips: ${tips} initial amount: ${userInput}`; 
//     console.log(text);
// }

let baldai = ["lempa", "lentynos", "sofa", "stalas"];

baldai.pop();
baldai.shift();
baldai.push("kede");
baldai.unshift('spintele');

baldai.slice(2, 1, "taure", "sakute");

console.log(baldai);