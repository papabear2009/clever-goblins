import React from 'react';
import "./style.css";
import Button from '@material-ui/core/Button';

function ChooseMap(props) {

    return (
        <section className="center-buttons">
            <div className="button-holder">
                <Button id="friends" variant="" size="lg" block onClick={() => props.setMapType("friends")} >Friends</Button>
            </div>
            <div className="button-holder">
                <Button id="random" variant="" size="lg" block onClick={() => props.setMapType("random")} >Random</Button>
            </div>
            <div className="button-holder">
                <Button variant="" id="difficulty" size="lg" block onClick={() => props.setMapType("difficulty")} >Difficulty</Button>
            </div>
            <div className="button-holder">
                <Button variant="" id="previous" size="lg" block onClick={() => props.setMapType("previous")} >Previous</Button>
            </div>
        </section>
    )
}
export default ChooseMap;