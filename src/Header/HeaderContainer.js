import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUser, setAuthUserData, setAuthUserProfile} from "../Redux/auth-reducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
       this.props.setAuthUser();
    }

    render() {
        return <Header {...this.props} /*user={this.props.userProf}*/ />
    }
}


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
     /*   userProf: state.auth.userProf*/
    }
}


export default  connect(mapStateToProps, {setAuthUserData, setAuthUser/*,setAuthUserProfile*/})(HeaderContainer);

