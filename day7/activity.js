let score = parseInt(prompt("Enter The Score : "));
let grade = "";

switch(true){
    case score >= 90: grade = "A"; break;
    case score >= 80: grade = "B"; break;
    case score >= 70: grade = "C"; break;
    case score >= 60: grade = "D"; break;
    default : grade = "F";
}
console.log("Your score is " + score + " and your grade is " + grade + " .");