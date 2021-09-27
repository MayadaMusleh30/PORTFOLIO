import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import Fade from 'react-reveal/Fade';

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["DEVELOPER", "DESIGNER"],
        });
    }, []);

    return (
        <div className="intro" id="intro">
            <Fade>
                <div className="back">
                    <div className="container">
                        <div className="wrapper">
                            <h2>Hi there, I'm</h2>
                            <h1>MAYADA MUSLEH</h1>
                            <h3>
                                <span className="cursorText" ref={textRef}></span>
                            </h3>
                        </div>
                        <a href="#about">
                            <div className="icon-scroll"></div>
                        </a>
                    </div>
                </div>
            </Fade>
        </div>
    );
}
