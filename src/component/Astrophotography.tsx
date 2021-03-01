import * as React from 'react';
import '../css/index.css';
import { AstronomyList } from '../model';

interface Props {
}

interface State {
    picture: number;
    pictureLarge: number;
    astronomyList: AstronomyList[];
}

export default class Astrophotography extends React.Component<Props, State> {
    state: State = {
        picture: 0,
        pictureLarge: 0,
        astronomyList: []
    };

    componentDidMount() {
        var astronomyList: AstronomyList[] =
            [
                {
                    ASTRONOMY_ID: "11DWbojQAB26V40zDMJO4aWv9wXmH3Qb5",
                    ASTRONOMY_NAME: "n_1"
                }, {
                    ASTRONOMY_ID: "1EOUsAEQ5uy9iobWK5mPO1mzgRWyz_7PA",
                    ASTRONOMY_NAME: "n_2"
                }, {
                    ASTRONOMY_ID: "11i1OpMSfojblI26VeOHobfhp39_MH3TW",
                    ASTRONOMY_NAME: "n_3"
                }, {
                    ASTRONOMY_ID: "1NY_wjDgxfRjE_jYo0m86YDftTtjoFZUV",
                    ASTRONOMY_NAME: "n_4"
                }
            ];
        this.setState({ astronomyList: astronomyList });
    }

    handleClick = (picture: string) => {

    }

    thumbnail = (id: string) => {
        if (id) {
            this.setState({ picture: 0, pictureLarge: 1 });
        }
    }

    render() {
        return (
            <div className="right-inner">
                {this.state && this.state.astronomyList && (
                    <div className="picture-thumbnail">
                        {
                            this.state.astronomyList.map((astronomyList: AstronomyList) => {
                                return (
                                    <input className="thumbnail-pic" type="image" src={`https://drive.google.com/thumbnail?id=${astronomyList.ASTRONOMY_ID}`} alt={astronomyList.ASTRONOMY_NAME}
                                        onClick={() => this.thumbnail(astronomyList.ASTRONOMY_ID)} />
                                )
                            })
                        }
                    </div>
                )}
                {/* {this.state && this.state.pictureLarge ?
                    <div>
                        <img width="75%" src="https://drive.google.com/uc?export=view&id=1Aj6w1B70kn3pqEIY7I_lLqfUEDwGCpfZ" alt="Profile Pic" />
                    </div>
                    : ""
                } */}
            </div>
        );
    }
}