import React from 'react';
import usersCss from "./Users.module.css";
import userDefaultImage from "../assets/images/userDefaultImage.png";
import {NavLink} from "react-router-dom";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    //let pagesCount = Math.ceil(50/ 5);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={ props.currentPage === p && usersCss.selectedPage}
                                 onClick={()=> {props.onPageChanged(p)}}>{p} </span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small !=null ? u.photos.small : userDefaultImage} className={usersCss.photo} />
                        </NavLink>
                    </div>
                    <div>
                        { u.followed
                            ? <button onClick={() => {props.unfollow(u.id)}}> Unfollow </button>
                            : <button onClick={() => {props.follow(u.id)}}> Follow </button> }
                    </div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </div>)
            }
        </div>
    );
};

export default Users;
