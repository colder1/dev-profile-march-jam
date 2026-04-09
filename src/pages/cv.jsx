import { Link } from "react-router";

const Aboutme = () =>{
    return(
        <>
            <h1 className="main-text">About me</h1>
            <p className="links">
                <Link to="/"> Go back</Link>
            </p>
        </>
    );
};

export default Aboutme;