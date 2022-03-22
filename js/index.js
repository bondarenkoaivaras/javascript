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

//     for(let num of numArray){T
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


// Uzduotis parasyti funkcija kuri surusiuos skaicius esancius masyve nuo didziausio iki maziausio
const randomNumbers = [1, 22, 543, 2, 6, 12, 55, 86, 6, 9, 12, 31, 51, 92, 3]
// isvesti nauja masyva i console

randomNumbers.sort((a , b) => a - b).reverse();
console.log(randomNumbers);

function getMidSymbol(text){

    let midIndex = parseInt(text.length / 2);

    if(text.length % 2 === 0){
        return `${text[midIndex -1]}${text[midIndex]}`;
    }
    
    return text[midIndex];
}

const septyniuKartotinis = function(num) {
    if(num % 7 === 0){
        console.log("Taip");
    }else{
        console.log("Ne");
    }
}

septyniuKartotinis(7);

const knygosApieProgramavima = [
    {
      title: "The Pragmatic Programmer",
      author: 'David Thomas',
      goodReadsRating: 4.33,
      numberOfRatings: 18579
    },
    {
      title: "Clean Code",
      author: 'Robert C. Martin',
      goodReadsRating: 4.39,
      numberOfRatings: 18094
    },
    {
      title: "The Clean Coder",
      author: 'Robert C. Martin',
      goodReadsRating: 4.28,
      numberOfRatings: 7459
    },
    {
      title: "The Effective Engineer",
      author: 'Edmond Lau',
      goodReadsRating: 4.28,
      numberOfRatings: 1401
    },
    {
      title: "Eloquent JavaScript",
      author: 'Marijn Haverbeke',
      goodReadsRating: 4.15,
      numberOfRatings: 2680
    }
  ]

  knygosApieProgramavima.forEach(printObject);


  function printObject(obj){
      console.log(`Title: ${obj.title}
                  Author: ${obj.title}
                  Good ratings: ${obj.goodReadsRating}
                  numberOfRatings: ${obj.numberOfRatings}
                  `);
  }

  const bookRatings = knygosApieProgramavima.map(function(x){
    return x.goodReadsRating;
  });

  console.log(bookRatings);

  const bestBookRatings = knygosApieProgramavima.filter(book => {
      if(book.goodReadsRating > 4.2){
          return book.goodReadsRating;
      }
    })

    console.log(bestBookRatings);

  

let firstArr = [1, 2, 3, 4, 5];
let secondArr = [6, 7, 8, 9, 10];

let combined = firstArr.concat(secondArr);

console.log(combined);



const firstArrayAnimals = ["dog", "cat", "parrot"];
const secondArrayAnimals = ["lizard", "rat", "cat"];

const darbai = ['paimti darbus is masyvo', 'parasyti funkcija', 
'funckija turi skurti DOM elementus', 
'tie elementai turi buti sudeti i tevini ul konteineri'];

const container = document.querySelector(".container");
console.log(container)

const addToParent = (jobs) => {

    const parent = document.querySelector(".container");
    
    jobs.forEach(element => {
        let childContainer = document.createElement("div");
       childContainer.className = "job_card";

        childContainer.innerHTML = `
            <h2>${element.title}</h2>
            <p> ${element.description}</p>
            <p> ${element.salary}</p>
        `;

        parent.appendChild(childContainer);
    })
    
}

addToParent([
    {
        title: "programuotojas",
        description: "Lorem ipsum dolor sit amet.",
        salary: "10000000000000"
    },
    {
        title: "programuotojas2",
        description: "Lorem ipsum dolor sit amet.",
        salary: "10000000000000"
    },
    {
        title: "programuotojas3",
        description: "Lorem ipsum dolor sit amet.",
        salary: "10000000000000"
    }
])
