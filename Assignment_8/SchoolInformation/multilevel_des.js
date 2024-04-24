const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
      math: { teachers: 5, students: 150 },
      science: { teachers: 4, students: 120 },
      history: { teachers: 3, students: 100 },
      english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
      {
        name: "Alice",
        className: "Grade 5",
        scores: { math: 95, science: 88, history: 85, english: 92 },
      },
      {
        name: "Bob",
        className: "Grade 4",
        scores: { math: 80, science: 78, history: 92, english: 85 },
      },
      {
        name: "Charlie",
        className: "Grade 5",
        scores: { math: 88, science: 90, history: 78, english: 88 },
      },
      {
        name: "Diana",
        className: "Grade 4",
        scores: { math: 92, science: 85, history: 88, english: 90 },
      },
    ],
  };

// ........................countCalculation................
  function countCalculation(school){
    // console.log(school);
    let output = {}
  const {departments:{math:{teachers:mathTeachersCount, students:mathStudentsCount},history:{teachers:historyTeachersCount, students:historyStudentsCount}}} = school
output.mathTeachersCount = mathTeachersCount    
output.historyTeachersCount = historyTeachersCount
output.mathStudentsCount = mathStudentsCount
output.historyStudentsCount = historyStudentsCount
return output 


  }
  let py = countCalculation(school)
  console.log(py);
  // ...................................findtop student.....................
  function findTopStudent(school, courseName){
    let topstudent = null
    let highestscore = -1

    for(const{name,className, scores} of school.students){
      const score = scores[courseName]
      if(score>highestscore){
        topstudent = {name, className, scores}
        highestscore = score
      }
      return topstudent;
    }
    
  }
  console.log(findTopStudent(school, 'math'));

  // ................addNewDept.....................................


  function addNewDept(school, newDepartment){
  output  = {...school}
  
  console.log(output);
  output.departments.art = newDepartment

  return output
  }
  
 console.log( addNewDept(school, { teachers: 2, students: 50 }));

//  ..............................highestStudentCountDepartment....................

function highestStudentCountDepartment(school){
 let higheststudent = -1
 let departmentname = ''
  for (const department in school.departments) {
    const { students } = school.departments[department];
    if (students > higheststudent) {
      higheststudent = students;
      departmentname = department; 
    }
  }

  return departmentname;
}

console.log(highestStudentCountDepartment(school));

// .....................................
function generateGreeting(name, language=" Hello "){
  const greetings = {
    'English': `Hello, ${name}!`,
    'Spanish': `¡Hola, ${name}!`,
    'French': `Bonjour, ${name}!`
};
return  greetings[language]

}

console.log(generateGreeting('alice '));
console.log(generateGreeting('Bob ', 'Spanish'));