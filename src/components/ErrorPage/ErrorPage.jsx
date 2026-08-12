import { Link } from "react-router";

const ErrorPage = () => {
    return (
        <div>
            <h2>Opps!!!</h2>
            <Link to ='/'>Go Back</Link>
        </div>
    );
};

export default ErrorPage;