import React from 'react';
import "./style.css";
import Button from '@material-ui/core/Button';

function friendsMaps(props) {
    // Display a list of friends
    return (
        <section className="center-buttons">
            <div className="button-holder">
                {props.friendsList.map((item, index) => (

                    <div className="button-list">
                        <Button color="success" id={item.friend_id}
                            onClick={() => {
                                props.getMapByFriend_id(item.friend_id);
                            }}
                        >{item.friend_name}</Button>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default friendsMaps;