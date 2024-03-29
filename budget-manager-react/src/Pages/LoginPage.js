import "../Styles/SigninPage.css"
import { useState, useEffect } from 'react';
import Recover from '../Components/Recover';
import Register from "../Components/Register";
import Signin from "../Components/Signin";
import NewPassword from "../Components/NewPassword";
import { useLocation, Link } from 'react-router-dom';

const SigninPage = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const location = useLocation();
    const { pathname } = location;

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    // useEffect(() => {
    //     console.log("use effect ran");
    // }, []);

    return (
        <div className="body-login">
            <div className="center-login">
                <div className="card-login">
                    <div className="user-links">
                        <span>
                            <Link to="/login">Sign In</Link>
                            <a>/</a>
                            <Link to="/register">Sign up</Link>
                        </span>
                    </div>
                    {pathname == "/register" ? <Register /> : pathname == "/recover" ? <Recover /> : pathname.startsWith("/resetPassword/") ? <NewPassword /> : <Signin />}
                </div>
            </div>
        </div>
    );
}

export default SigninPage;