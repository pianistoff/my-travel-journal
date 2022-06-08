import logo from "../img/logo.png";

export default function Header() {
    return (
        <header className="header">
            <img src={logo} alt="logo with globe pictured" className="logo" />
            <h1 className="main-title">my travel journal.</h1>
        </header>
    );
}
