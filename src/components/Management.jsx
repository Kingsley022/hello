import React, { useState } from 'react'

const Management = () => {

    const student = {
        name: "John",
        age: 15,
        address : {
            city: "Enugu",
            zipCode: 231
        }
    }

    const[student1, setStudent1] = useState(student)


    const handleUpdate = () => {
    const newStudent = {...student, address:{...student.address, city: "Owerri"}}
    setStudent1(newStudent)
    }

    console.log(student1);

  return (
    <div>
        <button onClick={handleUpdate}>Click Me</button>
    </div>
  )
}

export default Management