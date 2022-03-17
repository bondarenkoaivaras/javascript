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

// let baldai = ["lempa", "lentynos", "sofa", "stalas"];

// baldai.pop();
// baldai.shift();
// baldai.push("kede");
// baldai.unshift('spintele');

// baldai.slice(2, 1, "taure", "sakute");

// console.log(baldai);

// const saldytuas = {
//     morkos: 3,

// }

// const skaiciai = [0, 5, 29, 23, 4, 5, 2, 5, 24, 89, 6, 5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16];
// const biggerThan8 = [];
// for(let i = 0; i < skaiciai.length; i ++){
//     if(skaiciai[i] > 8 ) biggerThan8.push(skaiciai[i]);
// }

// const activities = [
//     ['Work', 9],
//     ['Eat', 1],
//     ['Commute', 2],
//     ['Play Game', 1],
//     ['Sleep', 7]
//   ];

// for(let i = 0; i < activities.length; i ++){
//     for(let j = 0; j < activities[i].length; j ++){
//         console.log(activities[i][j]);
//     }
// }

// // functions 

// function atiduotiDidesni(x, y){
//     if( x > y ){
//         return x;
//     }else if( x < y) {
//         return y;
//     }else{
//         return x; 
//     }
// }

// atiduotiDidesni(4, 5);

// console.log(atiduotiDidesni(4, 5));

// function getDay(x){
//     let days = [
//         "Pirmadienis",
//         "Antradienis",
//         "Trečiadienis",
//         "Ketvirtadienis",
//         "Penktadienis", 
//         "Šestadienis",
//         "Sekmadienis"
//     ];

//     if(x > 0 && x < 8){
//         console.log(`Šiandien yra: ${days[x -1]}`);
//     }else{
//         console.log("Input invalid, please enter number from 1 to 7");
//     }
// }

// let day = parseInt(prompt("Enter number from 1 to 7 to get a day"));

// getDay(day);

// const sudetiVisusSkaicius = [12, 4, 16, 3, 8, 9, 'hi', 12, 2, 1, 5, 3, 9, 55, 292, 13, undefined]

// function getSum(numArray){
//     let sum = 0;

//     for(let num of numArray){
//         if(!isNaN(num)){
//             sum += num;
//         }
//     }

//     return sum;
// }
// let sum = getSum(sudetiVisusSkaicius);

// console.log(sum);

// function reverseNum(num){
//     let reverseValue = num.toString().split('');
//     reverseValue = reverseValue.reverse().toString();
//     return reverseValue.reverse().toString().replace(",", "");
// }

// let num = 111112;

// console.log(reverseNum(num));
function printArray(arr){
    for(let i = 0; i < arr.length; i++){
       console.log(arr[i]);
    }

    console.log("------------------------");
}

function kartoriniaiSkaiciai(x, y){
    const arrayX = [], arrayY = [], arrayXY = [];

    for(let i = 0; i < 101; i++){
        if(i % 3 === 0){
            arrayX.push(i);
        }
         if(i % 5 === 0){
            arrayY.push(i);
        }
         if(i % 5 === 0 && i % 3 === 0){
            arrayXY.push(i);
        }
    }

    console.log("Array that can be devided by 3")
    printArray(arrayX);
    console.log("Array that can be devided by 5")
    printArray(arrayY);
    console.log("Array that can be devided by 3 and 5")
    printArray(arrayXY);
}
kartoriniaiSkaiciai();