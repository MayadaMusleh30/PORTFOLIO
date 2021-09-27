import React from 'react';
import "./about.scss";
import { Code, Palette } from "@material-ui/icons";
import Fade from 'react-reveal/Fade';

export default function About() {
    return (
        <div className="about" id="about">
            <Fade top>
                <div className="heading">
                    <h2 className="title">
                        &#128075;<br /> HELLO, NICE TO MEET YOU!
                    </h2>
                </div>
                <div className="content">
                    <div className="right">
                        <div className="container">
                            <div className="header">
                                {/* ABOUT DESCRIPTION */}
                                <h1>About Me</h1>
                                <p>My name is Mayada, a self-taught web developer & designer based in NYC.
                                    <br /><br />I mainly specialize in HTML, CSS, & JavaScript to create responsive & functional pages, apps, & games.
                                    <br /><br />My experience in freelance graphic design also helps me to visualize
                                    beautiful, consistent, modern websites with clean design & sharp attention to detail.
                                    <br /><br />My interest in web development first started when I tried editing custom MySpace & Tumblr themes back in middle school all throughout college.
                                    I originally went to school and graduated with a degree in software programming, however I later decided to study web development on my own.
                                    <br /><br /><br />Check out my <a href="#portfolio"><span className="portlink">portfolio</span></a> to see some of my independent projects!
                                    <br /><br />Have a question? <a href="#contact"><span className="portlink">Contact me</span>.</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="left">
                        <div className="container">
                            <div className="header">
                                <div className="developer">
                                    {/* SKILL 1 */}
                                    <Code className="codeIcon" />
                                    <h2>Front-End Web Developer</h2>
                                    <div className="list">
                                        <div className="data">
                                            <div className="title">
                                                <h3>HTML</h3>
                                                <span className="number">90%</span>
                                            </div>
                                            <div className="bar">
                                                <span className="percentage skill_html"></span>
                                            </div>
                                        </div>
                                        <div className="data">
                                            <div className="title">
                                                <h3>CSS (BootStrap, Sass)</h3>
                                                <span className="number">85%</span>
                                            </div>
                                            <div className="bar">
                                                <span className="percentage skill_css"></span>
                                            </div>
                                        </div>
                                        <div className="data">
                                            <div className="title">
                                                <h3>JavaScript (React, jQuery, jQuery Mobile)</h3>
                                                <span className="number">60%</span>
                                            </div>
                                            <div className="bar">
                                                <span className="percentage skill_js"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="designer">
                                    {/* SKILL 2 */}
                                    <Palette className="paletteIcon" />
                                    <h2>Web Designer</h2>
                                    <div className="list">
                                        <div className="data">
                                            <div className="title">
                                                <h3>UI/UX</h3>
                                                <span className="number">90%</span>
                                            </div>
                                            <div className="bar">
                                                <span className="percentage skill_ui"></span>
                                            </div>
                                        </div>
                                        <div className="data">
                                            <div className="title">
                                                <h3>Graphic Design</h3>
                                                <span className="number">90%</span>
                                            </div>
                                            <div className="bar">
                                                <span className="percentage skill_graphic"></span>
                                            </div>
                                        </div>
                                        <div className="data">
                                            <div className="title">
                                                <h3>Design Software (Photoshop, Figma)</h3>
                                                <span className="number">85%</span>
                                            </div>
                                            <div className="bar">
                                                <span className="percentage skill_design"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )
}
