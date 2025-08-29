import logo from "../assets/images/logo.png";

const Logo = ({ width = 150, height = 150 }) => {
    return (
        <img src={logo} width={width} height={height} alt="logo" />
    )
}

export default Logo