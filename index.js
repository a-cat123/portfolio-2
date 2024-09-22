//Student Grades Analysis
// 1. Create an array that holds 8 grades (integers between 0 and 100) representing the scores of different students
let grades = [95, 80, 55, 77, 40, 89, 90, 60]
// 2. Log out how many grades there are
let numberOfGrades = grades.length
console.log(`There are ${numberOfGrades} grades in the class`)

// 3. Classify each grade into one of the following categories
grades.forEach((grade) => {
    let category = ""
    if (grade >= 90) {
        category = "A";
    } else if (grade >= 80 && grade < 90) {
        category = "B";
    } else if (grade >= 70 && grade < 80) {
        category = "C";
    } else if (grade >= 60 && grade < 70) {
        category = "D";
    } else {
        category = "F";
    }
    console.log(`With a score of ${grade}, your grade is ${category}`)
})
// 4. Evaluate overall class performance
/* 4.1. To find the average of the grades, we first have to find the sum of all grades.
We do that with a for...each loop, where we loop through grades, and sum them up with +=
 */
let gradeSum = 0;
grades.forEach((grade) => {
    gradeSum += grade;
});
/* 4.2 Now that we have the sum of the grades, it's possible to figure out the average.
We do that by dividing the sum by the number of grades.
 */
let averageGrade = gradeSum/grades.length
//Now that we have the average grade, it's possible to evaluate the class performance with an if-statement.

let classPerfomance = ""
if (averageGrade >= 90) {
    performance = "Excellent"
} else if (averageGrade >= 80 && averageGrade < 90) {
    performance = "Good"
} else if (averageGrade >= 70 && averageGrade < 80) {
    performance = "Satisfactory"
} else if (averageGrade < 70) {
    performance = "Needs improvement"
}
//Now we can log the performance to the console.
console.log(`Overall Class Performance: ${performance}`)

// 5. Determine the highest, lowest and average grade in the array
/* To determine these, we can make use of the Math.max and Math.min functions, and use the variable
averageGrade, that we defined earlier.
 */
let highestGrade = Math.max(...grades)
let lowestGrade = Math.min(...grades)
console.log(`Highest grade: ${highestGrade}`)
console.log(`Lowest grade: ${lowestGrade}`)
console.log(`Average grade: ${averageGrade}`)

// 6. Output the highest, lowest, average and all grades with their corresponding categories.

//Outputting the highest grade + its category
let highestGradeCategory = ""
if (highestGrade >= 90) {
    highestGradeCategory = "A";
} else if (highestGrade >= 80 && highestGrade < 90) {
    highestGradeCategory = "B";
} else if (highestGrade >= 70 && highestGrade < 80) {
    highestGradeCategory = "C";
} else if (highestGrade >= 60 && highestGrade < 70) {
    highestGradeCategory = "D";
} else {
    highestGradeCategory = "F";
}
console.log(`Highest grade: ${highestGrade}, Category: ${highestGradeCategory}`);

//Outputting the lowest grade + its category
let lowestGradeCategory = ""
if (lowestGrade >= 90) {
    lowestGradeCategory = "A";
} else if (lowestGrade >= 80 && lowestGrade < 90) {
    lowestGradeCategory = "B";
} else if (lowestGrade >= 70 && lowestGrade < 80) {
    lowestGradeCategory = "C";
} else if (lowestGrade >= 60 && lowestGrade < 70) {
    lowestGradeCategory = "D";
} else {
    lowestGradeCategory = "F";
}
console.log(`Lowest grade: ${lowestGrade}, Category: ${lowestGradeCategory}`);

//Outputting the average grade + its category
let averageGradeCategory = ""
if (averageGrade >= 90) {
    averageGradeCategory = "A"
} else if (averageGrade >= 80 && averageGrade < 90) {
    averageGradeCategory = "B";
} else if (averageGrade >= 70 && averageGrade < 80) {
    averageGradeCategory = "C";
} else if (averageGrade >= 60 && averageGrade < 70) {
    averageGradeCategory = "D";
} else {
    averageGradeCategory = "F";
}
console.log(`Average grade: ${averageGrade}, Category: ${averageGradeCategory}`);

//Outputting all grades + their categories
grades.forEach((grade) => {
    let category = ""
    if (grade >= 90) {
        category = "A";
    } else if (grade >= 80 && grade < 90) {
        category = "B";
    } else if (grade >= 70 && grade < 80) {
        category = "C";
    } else if (grade >= 60 && grade < 70) {
        category = "D";
    } else {
        category = "F";
    }
    console.log(`Grade: ${grade}, Category: ${category}`)
})

//Treasure Hunter

// 1. Log out how many moves there are in the island.

const island = ['-', 'T', 'T', '-', '-']

let numberOfMoves = island.length;
console.log(`There are ${numberOfMoves} moves on the island`)

//For each move log a message
for (let i = 0; i < island.length; i++) {
    if (island[i] === "T") {
        console.log(`Treasure found at move ${i + 1} :)`)
    } else {
        console.log(`No treasure found :(`)
    }
}
//Log out how many treasures there are in the island
let amountOfTreasures = 0
for (let i = 0; i < island.length; i++) {
    if (island[i] === "T") {
        amountOfTreasures++
    }
}
console.log(`There are ${amountOfTreasures} treasures on the island`)

//Startup name generator

// Array 1: First part of the startup name
const firstWords = ["Tech", "Inno", "Smart", "Blue", "Next", "Bright", "Quantum", "Rapid", "Future", "Digital"];

// Array 2: Second part of the startup name
const secondWords = ["Vision", "Solutions", "Systems", "Works", "Dynamics", "Hub", "Network", "Innovations", "Labs", "Path"];

function startUpName() {
    const firstWord = firstWords[Math.floor(Math.random() * firstWords.length)];
    const secondWord = secondWords[Math.floor(Math.random() * secondWords.length)];
    return firstWord + " " + secondWord
}

console.log(startUpName())