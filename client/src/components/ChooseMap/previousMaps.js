import React from 'react';
import "./style.css";
import Button from '@material-ui/core/Button';

function PreviousMap(props) {

    return (
        <section className="center-buttons">
            <div className="button-holder">
                {props.dungeonList.map((item, index) => (

                    <div>
                        <Button className="button-holder" color="success" id={item.id}
                            onClick={() => {
                                props.getMapById(item.id);
                            }}
                        >{item.title}</Button>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default PreviousMap;