import { Link, useLocation } from "react-router-dom"

const Footer = () => {
    const location = useLocation();

    

    return (
        <footer style={footerStyle}>
            <p>Copyright &copy; 2021</p>
            {!(location.pathname === "/About") ? (<Link to="/About">About</Link>) : (<Link to="/">Go Back</Link>) }
        </footer>
    )
}

const footerStyle = {
    padding: "20px 0",
    color: "White", 
    backgroundColor: "black",
    borderRadius: "5px"
}

export default Footer
