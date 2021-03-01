import * as React from 'react';
import '../css/index.css';
import { WildlifeList } from '../model';

interface Props {
}

interface State {
    picture: number;
    pictureLarge: number;
    wildlifeList: WildlifeList[];
}

export default class Wildlife extends React.Component<Props, State> {
    state: State = {
        picture: 0,
        pictureLarge: 0,
        wildlifeList: []
    };

    componentDidMount() {
        var wildlifeList: WildlifeList[] =
            [
                {
                    WILDLIFE_ID: "1OgSELi8Ut9fAZR3oJg_EtPeXhffalwNZ",
                    WILDLIFE_NAME: "a_1"
                }, {
                    WILDLIFE_ID: "1m4z0UihF7WeaN5OYh7u4QxUOPQLyth1Z",
                    WILDLIFE_NAME: "a_2"
                }, {
                    WILDLIFE_ID: "1vbODzbZHajpjIoFoYJ1Yk25vjUXcyOew",
                    WILDLIFE_NAME: "a_3"
                }, {
                    WILDLIFE_ID: "1jrYcT7louZBN-zzWoTaUuBHx-mbmRG_b",
                    WILDLIFE_NAME: "a_4"
                }, {
                    WILDLIFE_ID: "12mf7ampw9lmW5BhG7BRw7dlV8jt6B6iE",
                    WILDLIFE_NAME: "a_5"
                }, {
                    WILDLIFE_ID: "1ZeTJOigWV4h4D8mqaIyYCA0__GMU1i0V",
                    WILDLIFE_NAME: "a_6"
                }, {
                    WILDLIFE_ID: "1kTVqE8QaRkhoRi_s2WwPUEOwMHp71rNB",
                    WILDLIFE_NAME: "a_7"
                }, {
                    WILDLIFE_ID: "1YnOikyTfAYl9IxR1OiDOLPNg2CeFH9gn",
                    WILDLIFE_NAME: "a_8"
                }, {
                    WILDLIFE_ID: "1oNiyiklr1Wl_ehHswb-xLkPkKzE0-BWx",
                    WILDLIFE_NAME: "a_9"
                }, {
                    WILDLIFE_ID: "15gs9uUfLrTYRyskFIbxXg4JsTntoDBUu",
                    WILDLIFE_NAME: "a_10"
                }, {
                    WILDLIFE_ID: "15o_k3f0ForbDSYs7Yii7Ct_lgKomvA02",
                    WILDLIFE_NAME: "a_11"
                }, {
                    WILDLIFE_ID: "1VCcYD95vYeoJd412QmZEBom7ZrvlJyJO",
                    WILDLIFE_NAME: "a_12"
                }, {
                    WILDLIFE_ID: "1fgZUjyAGSbti7j-moOvfnS_M4mVlOrOV",
                    WILDLIFE_NAME: "a_13"
                }, {
                    WILDLIFE_ID: "1MMfLfX_FERfPicbC_q1MNclSwRdgGhcl",
                    WILDLIFE_NAME: "a_14"
                }
            ];
        this.setState({ wildlifeList: wildlifeList });
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
                {this.state && this.state.wildlifeList && (
                    <div className="picture-thumbnail">
                        {
                            this.state.wildlifeList.map((wildlife: WildlifeList) => {
                                return (
                                    <input className="thumbnail-pic" type="image" src={`https://drive.google.com/thumbnail?id=${wildlife.WILDLIFE_ID}`} alt={wildlife.WILDLIFE_NAME}
                                        onClick={() => this.thumbnail(wildlife.WILDLIFE_ID)} />
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