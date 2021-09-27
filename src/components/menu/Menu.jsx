import "./menu.scss";
import { Twitter, GitHub, LinkedIn } from "@material-ui/icons"

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#about">About</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="https://twitter.com/MayadaMusleh" target="blank"><Twitter className="icon twitter" /></a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="https://github.com/MayadaMusleh30" target="blank"><GitHub className="icon github" /></a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="https://www.linkedin.com/in/mayada-musleh-6190b5221/" target="blank"><LinkedIn className="icon linkedin" /></a>
                </li>
            </ul>
        </div>
    )
}
