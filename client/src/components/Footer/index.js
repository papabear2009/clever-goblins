
import React from "react";
import "./style.css";
import Music from "./Music.js";
import { Link } from "react-router-dom";

function Footer() {
    
    return (
        <div className="phantom">
            <div className="footer">
                <div><Link to="/credits" className="footer-credits-link">About</Link>{' '}</div>
                <div>Clever Goblin &copy; Dev: Brian Cox
                </div>
                <Music className="music-button"/>
            </div>
            
        </div>
    );
}

export default Footer;