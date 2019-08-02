// 1. Create an article tag in your HTML with the id of "studentReport"
// 2. Create 3 objects that represents some of your teammates as NSS students
//    - Name
//    - Cohort
//    - Current exercise being worked on (edited)
// 3. Add a toString() method to your object that creates a
//    string representation and returns it. Use the following
//    format:
//        "Name is in cohort and is working on the X exercise"
// 4. Write a function that inputs a student object and returns the
//    string representation
// 5. Put all object into an array stored in the variable students
// 6. Use the map() method to generate a new array that only contains
//    the string representations of each student
// 7. Use the forEach() method to iterate the new array and render
//    each string representation into the "studentReport" HTML element

const student1 = {
  toString() {
    return `${this.Name} is in cohort:${this.Cohort} and is working on the ${
      this.CurrentExercise
    } exercise. <br>`;
  },
  Name: "Brian",
  Cohort: 34,
  CurrentExercise: "Lighting"
};
const student2 = {
  toString() {
    return `${this.Name} is in cohort:${this.Cohort} and is working on the ${
      this.CurrentExercise
    } exercise. <br>`;
  },
  Name: "Humberto",
  Cohort: 34,
  CurrentExercise: "Daily Journal"
};
const student3 = {
  toString() {
    return `${this.Name} is in cohort:${this.Cohort} and is working on the ${
      this.CurrentExercise
    } exercise. <br> `;
  },
  Name: "William",
  Cohort: 34,
  CurrentExercise: "World Domination"
};

console.log(student1.toString());
console.log(student2.toString());
console.log(student3.toString());

const StudentStringRep = studentObj => studentObj.toString();

const students = [student1, student2, student3];

const studentArray = students.map(StudentStringRep);
console.log(studentArray);

const domInsert = document.querySelector(".studentReport");
studentArray.forEach(arrayRep => {
  domInsert.innerHTML += arrayRep;
});
