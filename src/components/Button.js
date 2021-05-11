import PropTypes from 'prop-types'


const Button = ({ color, text, onClick }) => {
    


    return (
        <button className="btn" style={{ backgroundColor: color }} onClick={onClick}>{ text }</button>
    )
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
}

Button.defaultProps = {
    color: "black",
    text: "Button"
}


export default Button;
