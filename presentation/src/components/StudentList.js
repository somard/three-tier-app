import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

const StudentList = () => {
    
    const [students, setStudents] = useState([]);
    const [headCount, setHeadCount] = useState(0); 
    let [visible, setVisible] = useState(false)
    const SERVER_PORT = 9999; //to be consistent with Utils.js
    const COLLECTION ="students"; //to be consistent with your MongoDB collection
    useEffect(() => {   
        axios.get(`http://localhost:${SERVER_PORT}/${COLLECTION}`)
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the students!", error);
            });
    }, []);

    useEffect(() => {
        debugger
        setHeadCount(students.length); 
    }, [students]);
    
    let buttonText = "Hide";
    let display = "block";
    if(!visible) {
        display = "none";
        buttonText = "show"
    }
    return (
        <div>
            <h2>SK Student List</h2> 
            <button style={{ fontSize: "18px" }} onClick={()=>setVisible(!visible)}>{buttonText}</button>
            <div style = {{display:display}}>
                <p> Total: {headCount}</p>
                <ul >
                    {students.map(student => (
                        <li key={student._id} className="left-align">{student.name} - {student.gpa} </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default StudentList;



