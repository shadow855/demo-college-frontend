import React from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const loggedin = (e) => {
        e.preventDefault(); // Prevent the form from submitting

        // Get the values of the email and password inputs
        const email = document.getElementById('floatingInput').value;
        const password = document.getElementById('floatingPassword').value;

        if (email === "hello" && password === "hi") {
            console.log("hui");
            navigate('/adminpage');
        }
    }
    return (
        <>
            <div className="container my-5">
                <form>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary" onClick={loggedin}>Login</button>
                    <br />
                </form>
            </div>

        </>
    )
}

export default Login