import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

const StudentList = () => {
    const [students, setStudents] = useState([]);
    const SERVER_PORT = xxxx //to be consistent with Utils.js
    const COLLECTION ="COLLECTION_NAME" //to be consistent with your MongoDB collection
    useEffect(() => {
        axios.get(`http://localhost:${SERVER_PORT}/${COLLECTION}`)
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the students!", error);
            });
    }, []);

    return (
        <div>
            <h1>"XXX_Your_Customized_List"</h1>
            <h2>"XXX Student Count XXX"</h2>
            <button onClick={ "XXX A function to show/hide XXX "}> "XXX show/hide text XXX"</button>
            <ul>
                {students.map(student => (
                    <li key={student._id} className="left-align">{student.name} - {student.gpa} </li>
                ))}
            </ul>
        </div>
    );
}

export default StudentList;

