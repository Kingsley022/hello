import React from 'react'
import {useParams, useLocation} from "react-router-dom"

const StudentDetail = () => {
    const params = useParams();
    const location = useLocation();

    console.log(location);

  return (
    <>
        <div>Student Detail</div>
        <h1>Hello {params.id}</h1>
    </>
  )
}

export default StudentDetail;