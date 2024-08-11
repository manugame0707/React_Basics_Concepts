import { useState } from "react";

export default function Form() {
    // let [fullName, setFullName] = useState("Manoj");
    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: ""
    });
    let handleInputChange = (event) => {
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value };
        });
    };
    // let handleNameChange = (event) => {
    //     setFullName(setFullName(event.target.value));
    // };
    let handleSubmit = (event) => {
        console.log(formData);
        event.preventDefault();
        setFormData({
            fullName: "",
            username: "",
            password: ""
        });
    };
    return (
        <form onSubmit={handleSubmit} >
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" placeholder="Enter full name" value={formData.fullName} onChange={handleInputChange} name="fullName" />
            <br /><br /><br />
            <label htmlFor="username">User Name</label>
            <input type="text" id="username" placeholder="Enter user name" value={formData.username} onChange={handleInputChange} name="username" />
            <br /><br /><br />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter password" value={formData.password} onChange={handleInputChange} name="password" />
            <button>Sumit Form</button>
        </form>
    );
}