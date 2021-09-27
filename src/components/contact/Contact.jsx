import "./contact.scss";
import { Mail } from "@material-ui/icons";
import Fade from 'react-reveal/Fade';

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="right">
                <div className="container">
                    <Fade top>
                        <h1>CONTACT</h1>
                        <h2>Get In Touch</h2>
                        <span class="subtitle">I'm currently looking for new opportunities,<br /> my inbox is always open. Drop a question or say hi,<br /> I'll get back to you as soon as I can!</span>
                        <div className="mail">
                            <a href="mailto:muslehmayada0@gmail.com">
                                <button class="button"><Mail className="mailIcon" /></button>
                            </a>
                        </div>
                        <footer>Designed & Built by Mayada Musleh</footer>
                    </Fade>
                </div>
            </div>
        </div>
    )
}
