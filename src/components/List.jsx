import { useState } from "react";
import "../ListGroup.css";

const List = ({list, title}) => {
  const[currentIndex, setCurrentIndex] = useState(-1);

  return (
    <>
        <h1>List of {title}</h1>
        <ul className='ul'>
            {list.map((item, index) => (
                <li key={item} 
                className={index === currentIndex ? 'active': null}
                onClick={() => setCurrentIndex(index)}
                >{item}</li>
            ))}
        </ul>
    </>
  )
}

export default List;