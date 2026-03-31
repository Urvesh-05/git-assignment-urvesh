// 1: Student Report System
// Calculate average marks for each student
// Add a new property average using map()
// Assign result:
// • Avg ≥ 75 → "Distinction"
// • Avg ≥ 50 → "Pass"
// • Else → "Fail"



let students = [
    { name: "Urvesh", marks: [80, 70, 90] },
    { name: "Pooja", marks: [50, 40, 60] },
    { name: "Axar", marks: [30, 35, 40] }
]

let result = students.map(student => {
    let total = students.marks.reduce((sum, m) => sum + m, 0);
    let avg = total / student.marks.length;
     let grade = avg >= 75 ? "Distinction" : avg >= 50 ? "Pass" : "Fail";

    return {
        ...student,
        average: avg,
        result: grade
    };
});

console.log(result);

