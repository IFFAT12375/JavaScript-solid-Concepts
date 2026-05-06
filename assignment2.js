//Dolphins Scores
// let dolphinScore1 = 96;
// let  dolphinScore2 = 108;
// let dolphinScore3 = 89;

//Koalas Score
// let koalasScore1 = 88;
// let  koalasScore2 = 91;
// let koalasScore3 = 110;

//calculate sum & avg for Dolphin's
// let totalSumDolphin = dolphinScore1+dolphinScore2+dolphinScore3;
let averageDolphin =  (96 + 108 + 89) /3;
// console.log("Dolphins avg score: ", averageDolphin);

//calculate sum & avg for Koalas's
// let totalSumKoalas = koalasScore1+koalasScore2+koalasScore3;
let averageKoalas = (88 + 91 + 110)/3;
let minScore = 100;

// console.log("Koalas avg score: ", averageKoalas);
console.log(`Dolphins: ${averageDolphin.toFixed(2)}, Koalas: ${averageKoalas.toFixed(2)}`);


let winnerKoalas = averageKoalas > averageDolphin;


if((averageDolphin > averageKoalas) && (averageDolphin >= minScore)){
   // Condition 1: Dolphins win only if higher AND they hit 100+
    console.log("🏆 Dolphins win the trophy!");
} else if(winnerKoalas && (averageKoalas >= minScore)){
 // Condition 2: Koalas win only if higher AND they hit 100+
    console.log("🏆 Koalas win the trophy!");
} else if((averageDolphin === averageKoalas) && (averageDolphin >= minScore) && (averageKoalas >= minScore)){
 // Condition 3: Both have same score AND both are 100+
    console.log("🤝 It's a draw!");
} else {
    // Condition 4: No one hits 100, or it's a draw below 100
    console.log("❌ No one wins the trophy because the score is too low.");
}