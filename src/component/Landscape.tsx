import * as React from 'react';
import '../css/index.css';
import { LandscapeList } from '../model';

interface Props {
}

interface State {
    picture: number;
    pictureLarge: number;
    landscapeList: LandscapeList[];
}

export default class Landscape extends React.Component<Props, State> {
    state: State = {
        picture: 0,
        pictureLarge: 0,
        landscapeList: []
    };

    componentDidMount() {
        var landscapeList: LandscapeList[] =
            [
                {
                    LANDSCAPE_ID: "181wq7XGEoIoC81MCKNZIt3TivF-m4cuz",
                    LANDSCAPE_NAME: "l_1"
                }, {
                    LANDSCAPE_ID: "1V_EJ5HJVZw8nbOzR3r1lS_kpgJZ4TUcQ",
                    LANDSCAPE_NAME: "l_2"
                }, {
                    LANDSCAPE_ID: "1LEPQe7FdKmM5466QG7sNlZuEfv8crymz",
                    LANDSCAPE_NAME: "l_3"
                }, {
                    LANDSCAPE_ID: "1hHBFLTnwWHRi6XtvgkUGmzAGOQAJHw-C",
                    LANDSCAPE_NAME: "l_4"
                }, {
                    LANDSCAPE_ID: "10-uU7UlWU7SdfdvsFq7SFoQtCipmJ3J0",
                    LANDSCAPE_NAME: "l_5"
                }, {
                    LANDSCAPE_ID: "1SlYHqH5PH9Sb6F-LNjdRtoSqV43RUqY_",
                    LANDSCAPE_NAME: "l_6"
                }, {
                    LANDSCAPE_ID: "1MiA1iMcWoADTZVsQK0xDtYpZZkR76HJx",
                    LANDSCAPE_NAME: "l_7"
                }, {
                    LANDSCAPE_ID: "1BJxcXL-w_ASnStLgwt1SudYrp7LJwrM1",
                    LANDSCAPE_NAME: "l_8"
                }, {
                    LANDSCAPE_ID: "1pLSILiU_u_Nzco7WcytnPeBsnDEK1Bs1",
                    LANDSCAPE_NAME: "l_9"
                }, {
                    LANDSCAPE_ID: "1RsWW2gUT619I5YM3lQMQMP-P6EV_ZjJY",
                    LANDSCAPE_NAME: "l_10"
                }, {
                    LANDSCAPE_ID: "1qHoKiNNYUM95S2NTjIkPtgObjJDEul1t",
                    LANDSCAPE_NAME: "l_11"
                }, {
                    LANDSCAPE_ID: "1_wK9lIPT7YOhEYCnazuq-Dt2KDqcNm6Y",
                    LANDSCAPE_NAME: "l_12"
                }, {
                    LANDSCAPE_ID: "1fIAcodeeNB79UtWG4jApzIqku49ekG-D",
                    LANDSCAPE_NAME: "l_13"
                }, {
                    LANDSCAPE_ID: "1mxJK3bY_StJFx6xLSOiNMWsaBWsEtTwg",
                    LANDSCAPE_NAME: "l_14"
                }, {
                    LANDSCAPE_ID: "1BNH5J9C5nMS4V59kNcSlYg_R2IRo_bls",
                    LANDSCAPE_NAME: "l_15"
                }, {
                    LANDSCAPE_ID: "1GPybrSREbn4lIc8cEE06XRldiZ3NSXTg",
                    LANDSCAPE_NAME: "l_16"
                }, {
                    LANDSCAPE_ID: "1h3MT2TufcCp58VhV_uN124MYkLF0ruUh",
                    LANDSCAPE_NAME: "l_17"
                }, {
                    LANDSCAPE_ID: "1rwfpzR5o_McdtctWggv8lYWrYJTl4PMM",
                    LANDSCAPE_NAME: "l_18"
                }, {
                    LANDSCAPE_ID: "17dmqveKlo8pdNtWXZuTiM1gWl7v0yB_6",
                    LANDSCAPE_NAME: "l_19"
                }, {
                    LANDSCAPE_ID: "10YgBpvgwaylPipMfEf2ktgHZALFSRsV7",
                    LANDSCAPE_NAME: "l_20"
                }
            ];
        this.setState({ landscapeList: landscapeList });
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
                {this.state && this.state.landscapeList && (
                    <div className="picture-thumbnail">
                        {
                            this.state.landscapeList.map((landscapeList: LandscapeList) => {
                                return (
                                    <input className="thumbnail-pic" type="image" src={`https://drive.google.com/thumbnail?id=${landscapeList.LANDSCAPE_ID}`} alt={landscapeList.LANDSCAPE_NAME}
                                        onClick={() => this.thumbnail(landscapeList.LANDSCAPE_ID)} />
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