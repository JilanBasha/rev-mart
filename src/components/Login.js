import React from 'react';

// 2 types of react components
// class based components
// function based components
    // traditional function
    // arrow function

export default function Login() {
    const [formData, setFormData] = React.useState({
        user: "",
        pwd: ""
    });

    return (
        <div style={{backgroundColor: "yellow"}}>
            <h1>Hello</h1>
            {"dfja;dfkja"}
            <input type="text" name="user" value={formData.user} />
            <input type="password" name="pwd" value={formData.pwd} />
        </div>
    )
}