import { NavLink } from "react-router";

const Login = () => {
    return (
        <div>
            <h2>Login</h2>
                <NavLink to="/registration" className="btn">Registration</NavLink>

        </div>
    );
};

export default Login;