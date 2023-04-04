import React from "react";
import { GithubLogo } from "./components/GithubLogo";
import { LinkedInLogo } from "./components/LinkedInLogo";
import { PortfolioLogo } from "./components/PortfolioLogo";
import "./index.scss";

const Footer = (props) => {
    const logoSize = "30"
    return (
        <footer>
            <ul>
                <li>
                    <a href="https://github.com/bryanstgarcia" target="_blank" rel="noopener noreferrer">
                        <GithubLogo  width={logoSize} height={logoSize}/>
                    </a>
                </li>
                <li>
                    <a href="https://" target="_blank" rel="noopener noreferrer">
                        <LinkedInLogo width={logoSize} height={logoSize}/>
                    </a>
                </li>
                <li>
                    <a href="https://bryanstgarcia.com" target="_blank" rel="noopener noreferrer">
                        <PortfolioLogo  width={logoSize} height={logoSize}/>
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
