import * as React from 'react';
import '../css/index.css';

interface Props {
}

interface State {
}

export default class Main extends React.Component<Props, State> {
    state: State = {
    };
    render() {
        return (
            <div className="App-main">

                <div className="left-container-main">
                    <div className="about">
                        <div className="about-name">
                            Sajid Hashmi
                    </div>
                        <div className="camera-pic">
                            <img width="35%" src="https://drive.google.com/uc?export=view&id=1x6PkzmtC4cc39TOQKEvqhlZmrHOYdMe7" alt="Camera Equipment" />
                        </div>
                        <div className="about-info">
                            I am a Software Developer at Bechtel Corporation. Currently I am also pursuing M. Tech in Software Engineering from BITS Pilani.
                            Photography is my hobby and I am more into wildlife and bird photography.
                            It all started way back in 1965 when my grandfather got a camera imported for himself from Japan.
                            I still have that camera along with that tripod. I like exploring new places and more likely like to shoot birds and wildlife.
                            No place is boring for me if I had a good night's sleep and an empty memory card with me.
                            There are always two people in a photograph: the photographer and the viewer. I choosed to become the photographer.
                            Since I couldn't tell story in words, I need to carry my camera.
                            And once photography entered my blood, it became a disease for me which I couldn't recover from.
                            When someone ask me which photograph is my favourite, I reply the one I'm going to take take next.
                    </div>
                    </div>
                </div>
                <div className="right-container-main">
                    {/* <div className="profile-pic"> */}
                    <img width="95%" src="https://drive.google.com/uc?export=view&id=1Aj6w1B70kn3pqEIY7I_lLqfUEDwGCpfZ" alt="Profile Pic" />
                    {/* </div> */}
                </div>
            </div>
        );
    }
}