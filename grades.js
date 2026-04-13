//grades

const prompt = require("prompt-sync")({ sigin: true})

function getValidScore(message){
	let score;
	while)(true){
		score = parseFloat(prompt(message));
        if (score >= 0 && score <= 100) return score;
        console.log("Invalid input. Score must be between 0 and 100.");
        }
	}
	
let currentAverage = getValidScore ("Enter your current average: ");

function getLetterGrade(score) {
	if (score >= 90) return "A";
	if (score >= 80) return "B";
	if (score >= 70) return "C";
	if (score >= 60) return "D";
	return "F";
}
	
let currentLetter = getLetterGrade(currentAverage)
console.log("\nEnter hypothetical final exam scores (type -1 to stop):");
while (true) {
    let finalExam = parseFloat(prompt("Final exam score: "));
    if (finalExam === -1) break;
    if (finalExam < 0 || finalExam > 100) {
        console.log("Invalid input. Score must be between 0 and 100.");
        continue;
    }	

    let finalAverage = (currentAverage * 0.75) + (finalExam * 0.25);
    let finalLetter = getLetterGrade(finalAverage);

    // Determine change
    let status;
    if (finalLetter > currentLetter) {
        status = "Improved";
    } else if (finalLetter < currentLetter) {
        status = "Declined";
    } else {
        status = "Stayed the same";
    }

    console.log("\n--- Result ---");
    console.log(`Final Exam Score: ${finalExam}`);
    console.log(`Final Course Average: ${finalAverage.toFixed(2)}`);
    console.log(`Letter Grade: ${finalLetter}`);
    console.log(`Status: ${status}`);
}