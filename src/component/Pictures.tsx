import * as React from 'react';
import '../css/index.css';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

interface Props {
}

interface State {
    picture: number;
    pictureLarge: number;
}

export default class Pictures extends React.Component<Props, State> {
    state: State = {
        picture: 0,
        pictureLarge: 0
    };

    handleClick = (picture: string) => {
        if (picture == "Animals") {
            this.setState({ picture: 1, pictureLarge: 0 })
        }
        if (picture == "Birds") {
            this.setState({ picture: 2, pictureLarge: 0 })
        }
        if (picture == "Landscape") {
            this.setState({ picture: 3, pictureLarge: 0 })
        }
    }

    thumbnail = (id: string) => {
        if (id) {
            this.setState({ picture: 0, pictureLarge: 1 });
        }
    }

    render() {
        return (
            <div className="App-main-pictures">
                <div className="left-container">
                    <ListItem button key="Animals" onClick={() => this.handleClick("Animals")}>
                        <ListItemText primary="Animals"></ListItemText>
                    </ListItem>
                    <ListItem button key="Birds" onClick={() => this.handleClick("Birds")}>
                        <ListItemText primary="Birds"></ListItemText>
                    </ListItem>
                    <ListItem button key="Landscape" onClick={() => this.handleClick("Landscape")}>
                        <ListItemText primary="Landscape"></ListItemText>
                    </ListItem>
                </div>
                {this.state && this.state.picture ?
                    <div className="right-container">Pictures are loading.
                        <div className="profile-pic" >
                            <input type="image" src="https://drive.google.com/thumbnail?id=1Aj6w1B70kn3pqEIY7I_lLqfUEDwGCpfZ"
                                onClick={() => this.thumbnail("1Aj6w1B70kn3pqEIY7I_lLqfUEDwGCpfZ")} />
                        </div>
                    </div>
                    : ""
                }
                {this.state && this.state.pictureLarge ?
                    <div>
                        <img width="75%" src="https://drive.google.com/uc?export=view&id=1Aj6w1B70kn3pqEIY7I_lLqfUEDwGCpfZ" alt="Profile Pic" />
                    </div>
                    : ""
                }
            </div>
        );
    }
}