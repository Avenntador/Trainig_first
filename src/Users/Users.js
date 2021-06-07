import usersCss from "./Users.module.css"
import React from "react";
import axios from "axios";
import userDefaultImage from "../../src/assets/images/userDefaultImage.png"


class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }


    render() {
        return(
            <div>
                {
                    this.props.users.map(u => <div key={u.id}>
                        <div>
                            <img src={u.photos.small !=null ? u.photos.small : userDefaultImage} className={usersCss.photo} />
                        </div>
                        <div>
                            { u.followed
                                ? <button onClick={() => {this.props.unfollow(u.id)}}> Unfollow </button>
                                : <button onClick={() => {this.props.follow(u.id)}}> Follow </button> }
                        </div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </div>)
                }
            </div>
        )
    }
}

export default Users