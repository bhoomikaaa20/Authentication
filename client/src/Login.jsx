import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8082/login", { email, password })
            .then((result) => {
                if (result.data === "Success") {
                    navigate('/home');
                } else {
                    setError(result.data.message || "Login failed");
                }
            })
            .catch(err => {
                console.log(err);
                setError("An error occurred");
            });
    };

    return (
        <div>
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /><br />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /><br /><br />

                <button type="submit">Login</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <p>Don't have an Account?</p>
                <Link to="/signup">Signup</Link><br />
            </form>
        </div>
    );
}

export default Login;
