import * as React from 'react';
import '../css/index.css';
import profile_pic from '../images/Sajid_Pic.jpg';

interface Props {
}

interface State {
}

export default class Main extends React.Component<Props, State> {
    state: State = {
        count: 0
    };
    render() {
        return (
            <div className="App-main">
                <div className="profile-pic">
                    <img src={profile_pic} alt="Profile Pic" />
                </div>
                <div className="about">
                    <div className="about-name">
                        Sajid Hashmi
                    </div>
                    <div className="about-info">
                        I am a Software Developer at Bechtel Corporation. Currently I am also pursuing M. Tech in Software Engineering from BITS Pilani.
                        Photography is my hobby.
                    </div>
                </div>
            </div>
        );
    }
}