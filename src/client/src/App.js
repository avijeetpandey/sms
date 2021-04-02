import React, {useEffect, useState} from "react";

const App = () => {
    const [data, setData] = useState();
    useEffect(() => {
        fetch("/students").then(res => res.json().then(students => setData(students)));
    }, [])

    return data ? data.map(student => {
        const {studentId, name, email, gender} = student;
        return <div key={studentId}>
            <p> Student Id is : {studentId}</p>
            <p>Name is : {name}</p>
            <p>Email is : {email}</p>
            <p>Gender is : {gender}</p>
            <br/>
        </div>
    }) : <p>Loading</p>
}

export default App;