import React from "react";


const FriendsTopic = (props) => {
    return (
        <div>
            <img src={props.imgURL}/>
            {props.name}
        </div>


    )
}

export default FriendsTopic