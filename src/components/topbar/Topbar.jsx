import "./topbar.scss";
import { Twitter, GitHub, LinkedIn } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">*</a>
                    <div className="itemContainer">
                        <a href="https://twitter.com/MayadaMusleh" target="blank"><Twitter className="icon twitter" /></a>
                    </div>
                    <div className="itemContainer">
                        <a href="https://github.com/MayadaMusleh30" target="blank"><GitHub className="icon github" /></a>
                    </div>
                    <div className="itemContainer">
                        <a href="https://www.linkedin.com/in/mayada-musleh-6190b5221/" target="blank"><LinkedIn className="icon linkedin" /></a>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>

        </div>
    )
}
