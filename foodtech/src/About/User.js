import { useState } from "react";

const User = ({name, location}) => {
    const [count] = useState(0); 
    const [count2] = useState(2); 

    return (
        <div className="user-card">
            <h3>Name: {name}</h3>
            <h3>Location: {location}</h3>
            <h4>Count: {count}</h4>
            <h4>Count 2: {count2}</h4>
        </div>
    )
}

export default User;