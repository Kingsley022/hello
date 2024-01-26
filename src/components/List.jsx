import React from 'react'
import "../ListGroup.css";

const List = ({list, title}) => {
  return (
    <>
      <h1>List of {title}</h1>

      <ul className='ul'>
        {list.map((item, index) =>(
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default List;