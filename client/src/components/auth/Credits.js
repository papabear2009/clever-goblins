import React, { Component } from "react";
import "./style.css";
import AuthContext from "../../utils/AuthContext";
import { Redirect } from "react-router-dom";
import DDlogo2lines from "../../assets/DDlogo2lines.png";
import Container from '@material-ui/core/Container';
import Navbar from "../Navbar";
import Footer from "../Footer";

class Credits extends Component {
    render() {
    return (
        <div className="container white-text">
            
            { // check whether user is authenticated         
                AuthContext.isAuthenticated === false &&
                <Redirect to='/login' />
            }
            <Container img src={DDlogo2lines} alt="DungeonDash" fluid />
            <Navbar />
            <div className="credits-wrapper">
            <div className="container credits-container">
            <p className="credits-text">
                Full Stack Developer: Brian Cox
                <br></br>
                <a href="https://github.com/papabear2009" target="#_blank">GitHub</a>
            </p>
            </div>
            <Footer />
            </div>
          
        </div>
    )
        }
}

export default Credits;
Credits.contextType = AuthContext;