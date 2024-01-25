import { useState } from "react";
import "../ListGroup.css";

const ListGroup = () => {
  // State Management or Conditional Rendering
  const[currentIndex, setCurrentIndex] = useState(0);
  const students = ['Daniel', 'David', 'Blessing', 'Nancy', 'Prince'];

  return (
   <>
      <h1>Student List</h1>
      <ul className='ul'>
          {students.map((student, index) => (
              <li key={student} className={index === currentIndex ? "active" : null}  
              onClick={() => setCurrentIndex(index)}>
                {student}
                </li>
          ))}
      </ul>
   </>
  )
}

export default ListGroup;