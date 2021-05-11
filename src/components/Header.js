import Button from "./Button"
import { useLocation } from "react-router-dom"

const Header = ({ title, onClicked, formDisplay }) => {
    const location = useLocation();

    return (
        <header className="header">
            <h3>{title}</h3>
            {location.pathname === "/" && (
                <Button color={`${formDisplay ? "red" : "green"}`} text={`${formDisplay ? "Close" : "Add Task"}`} onClick={onClicked}/>
            )}
        </header>
    )
}

export default Header;
