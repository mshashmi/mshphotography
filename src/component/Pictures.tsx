import * as React from 'react';
import '../css/index.css';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Wildlife from './Wildlife';
import Astrophotography from './Astrophotography';
import Birds from './Birds';
import Landscape from './Landscape';
import Monuments from './Monuments';
import { PictureType } from '../model';

interface Props {
}

interface State {
    picture: number;
    pictureType: PictureType[];
}

export default class Pictures extends React.Component<Props, State> {
    state: State = {
        picture: 0,
        pictureType: []
    };

    componentDidMount() {
        var picture: PictureType[] =
            [
                {
                    TYPE_ID: 1,
                    TYPE_NAME: "Wildlife"
                }, {
                    TYPE_ID: 2,
                    TYPE_NAME: "Birds"
                }, {
                    TYPE_ID: 3,
                    TYPE_NAME: "Nature"
                }, {
                    TYPE_ID: 4,
                    TYPE_NAME: "Architecture"
                }, {
                    TYPE_ID: 5,
                    TYPE_NAME: "Astrophotography"
                }
            ];
        this.setState({ pictureType: picture });
    }

    handleClick = (pictureType: number) => {
        if (pictureType) {
            this.setState({ picture: pictureType })
        }
    }

    render() {
        return (
            <div className="App-main-pictures">
                <div className="left-container-pictures">
                    {this.state && this.state.pictureType && (
                        <div className="picture-type">
                            {
                                this.state.pictureType.map((picture: PictureType) => {
                                    return (
                                        <ListItem button key={picture.TYPE_ID} onClick={() => this.handleClick(picture.TYPE_ID)}>
                                            <ListItemText primary={picture.TYPE_NAME}></ListItemText>
                                        </ListItem>
                                    )
                                })
                            }
                        </div>
                    )}
                </div>
                <div className="right-container-pictures">
                    {this.state && this.state.picture == 1 && <Wildlife />}
                    {this.state && this.state.picture == 2 && <Birds />}
                    {this.state && this.state.picture == 3 && <Landscape />}
                    {this.state && this.state.picture == 4 && <Monuments />}
                    {this.state && this.state.picture == 5 && <Astrophotography />}
                </div>
            </div>
        );
    }
}