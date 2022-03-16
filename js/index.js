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

const saldytuas = {
    morkos: 3,

}

const skaiciai = [0, 5, 29, 23, 4, 5, 2, 5, 24, 89, 6, 5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16];
const biggerThan8 = [];
for(let i = 0; i < skaiciai.length; i ++){
    if(skaiciai[i] > 8 ) biggerThan8.push(skaiciai[i]);
}

const activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
  ];

for(let i = 0; i < activities.length; i ++){
    for(let j = 0; j < activities[i].length; j ++){
        console.log(activities[i][j]);
    }
}
