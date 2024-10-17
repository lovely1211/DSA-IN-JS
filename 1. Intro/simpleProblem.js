const allStudents = ["Anny", "Bob", "John", "Jane", "Charlie"];

const getStudent = (allStudents, studentName) => {
    for (let i = 0;  i < allStudents.length; i++){
        if(allStudents[i] === studentName){
            console.log(`found ${studentName}`);
        }
    }
}

getStudent(allStudents, "John"); 

getStudent(allStudents, "Jane"); 

