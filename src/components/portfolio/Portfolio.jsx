import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    gamePortfolio,
} from "../../data";
import Fade from 'react-reveal/Fade';

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "featured",
            title: "All Projects",
        },
        {
            id: "web",
            title: "Web",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
        {
            id: "game",
            title: "Games",
        },
    ];

    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "game":
                setData(gamePortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }
    }, [selected]);

    return (
        <div className="portfolio" id="portfolio">
            <Fade top>
                <div className="header">
                    <h1>PORTFOLIO</h1>
                </div>
                <ul>
                    {list.map((item) => (
                        <PortfolioList
                            title={item.title}
                            active={selected === item.id}
                            setSelected={setSelected}
                            id={item.id}
                        />
                    ))}
                </ul>

                <div className="container">
                    {data.map((d) => (
                        <>
                            <div className="item">
                                <img
                                    src={d.img}
                                    alt="" />
                                <h3>{d.title}
                                    <a href={d.preview} className="link" target="_blank">Preview</a>
                                    <a href={d.link} className="link" target="_blank">Code</a>
                                </h3>
                            </div>
                        </>
                    ))}
                </div>
            </Fade>
        </div>
    );
}
