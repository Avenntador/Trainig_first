import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile, setUserProfileAC} from "../Redux/profileReducer";
import {withRouter} from "react-router-dom";



class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 2;
        this.props.setUserProfile(userId);
    }

    render() {
        return(
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
        profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfileAC, setUserProfile})(WithUrlDataContainerComponent);
