import React, { useState } from 'react'

const Management = () => {

  const[student, setStudent] = useState({
      name: "John",
      age: 15,
      address : {
          city: "Enugu",
          zipCode: 231,
          hostelNo: 1
      }
  })

  const handleUpdate = () =>{
    const newStudent = {...student, address:{...student.address, hostelNo: 33}}
    setStudent(newStudent);
  }

  const[students, setStudents] = useState(["John", "Smith", "David", "Preciuos"]);

  // Adds item to an array
  const addNewStudent = () =>{
    const newStudent = [...students, 'Daniel'];
    setStudents(newStudent)
  }

  // Removing an Item
  const handleRemove = (selectedStudent) =>{
    const updatedStudents = students.filter((student) => student !== selectedStudent);
    setStudents(updatedStudents);
  }

  // Upadting a student 
  const handleStudentUpadte = (selectedStudent) => {
    const upadatedStudent = students.map(student => {
      if(student === selectedStudent){
        return student = "John"
      }else{
        return student
      }     
    });

    setStudents(upadatedStudent)
  }


  return (
    <div>
        <button onClick={handleUpdate}>Click Me</button>
        <p>{student.name}</p>
        <p>{student.age}</p>
        <p>{student.address.city}</p>
        <p>{student.address.zipCode}</p>
        <p>{student.address.hostelNo}</p>

        <ul>
          {students.map((student, index) => (
              <>
                <li key={index}>{student}</li>
                <button onClick={()=> handleRemove(student)}>Remove</button>
                <button onClick={() => handleStudentUpadte(student)}>Update</button>
              </>
          ))}
        </ul>

        <button onClick={addNewStudent}>New Student</button>
    </div>
  )
}

export default Management;