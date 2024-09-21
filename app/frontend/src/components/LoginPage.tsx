import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Login auth here
        if (username === "user" && password === "pass") {
            navigate("/main"); 
        } else {
            alert("Wrong username or password");
        }
    };

    return(
        <>
        <div> 
            <h1>Login Page</h1>
            <form onSubmit={handleLogin}>
                <input
                    id="usernameInput"
                   type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    id="passwordInput"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
        </>)
}

export default LoginPage;