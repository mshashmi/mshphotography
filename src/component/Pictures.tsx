import * as React from 'react';
import '../css/index.css';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

interface Props {
}

interface State {
    picture: number;
}

export default class Pictures extends React.Component<Props, State> {
    state: State = {
        picture: 0
    };

    handleClick = (picture: string) => {
        if (picture == "Animals") {
            this.setState({ picture: 1 })
        }
        if (picture == "Birds") {
            this.setState({ picture: 2 })
        }
        if (picture == "Landscape") {
            this.setState({ picture: 3 })
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
                {this.state && this.state.picture &&
                    <div className="right-container">Pictures are loading.{this.state.picture}</div>}
            </div>
        );
    }
}