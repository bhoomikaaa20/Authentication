import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8082/signup", { name, email, password })
            .then((response) => {
                console.log("Sent Successfully", response);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <h1>SignUp Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} /><br />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} /><br />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} /><br /><br />

                <button type="submit">Sign Up</button>
                <p>Already have an Account?</p>
                <Link to="/login">Login</Link>
            </form>
        </div>
    );
}

export default SignUp;
