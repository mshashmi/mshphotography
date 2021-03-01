import * as React from 'react';
import '../css/index.css';
import { MonumentList } from '../model';

interface Props {
}

interface State {
    picture: number;
    pictureLarge: number;
    monumentList: MonumentList[];
}

export default class Monuments extends React.Component<Props, State> {
    state: State = {
        picture: 0,
        pictureLarge: 0,
        monumentList: []
    };

    componentDidMount() {
        var monumentList: MonumentList[] =
            [
                {
                    MONUMENT_ID: "1hoCqcZ3ZxDORXV4P8E_dtxfBHjA4lzAj",
                    MONUMENT_NAME: "m_1"
                }, {
                    MONUMENT_ID: "1y8MzmPkcYrzYEinhXxui0DyalPVSXHhF",
                    MONUMENT_NAME: "m_2"
                }, {
                    MONUMENT_ID: "1Ad1OTnK4bPNxwNujVCGM_OMiYOYZ3DRg",
                    MONUMENT_NAME: "m_3"
                }, {
                    MONUMENT_ID: "1QlGWZzmMaJxxJ2GOro2NXn2XscwNb-2a",
                    MONUMENT_NAME: "m_4"
                }, {
                    MONUMENT_ID: "1bP5D43bnS9kaOWYuPEWetccKtnfE98yJ",
                    MONUMENT_NAME: "m_5"
                }, {
                    MONUMENT_ID: "1lZT5qwVolDFWhAgWc-pKz42yO6C9jgRP",
                    MONUMENT_NAME: "m_6"
                }, {
                    MONUMENT_ID: "1V5u1_w9eivarANdNd-IGh33Mx7TT_558",
                    MONUMENT_NAME: "m_7"
                }, {
                    MONUMENT_ID: "1FMFG1RC2iMTJaZ8UAan3sAWErGVrq2on",
                    MONUMENT_NAME: "m_8"
                }, {
                    MONUMENT_ID: "1wWwAFB28qIIKYFcRMmF0tHhrXFiGQ5nJ",
                    MONUMENT_NAME: "m_9"
                }, {
                    MONUMENT_ID: "1rgfQdTq3YZOnANHhcgIbxLxmj0yHyio3",
                    MONUMENT_NAME: "m_10"
                }, {
                    MONUMENT_ID: "1-k2bPCH5JNG7ytY4ZK0UmUe1L74jpQSo",
                    MONUMENT_NAME: "m_11"
                }, {
                    MONUMENT_ID: "1YVtps3A60_RQ45lj-sg5kxcbx958MGti",
                    MONUMENT_NAME: "m_12"
                }, {
                    MONUMENT_ID: "1LaVspBhFyBEHA9_m3EcINI1TF7VkhOQE",
                    MONUMENT_NAME: "m_13"
                }, {
                    MONUMENT_ID: "16q49w58suLeCY36UDrB2uB64qiAdKqVG",
                    MONUMENT_NAME: "m_14"
                }
            ];
        this.setState({ monumentList: monumentList });
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
                {this.state && this.state.monumentList && (
                    <div className="picture-thumbnail">
                        {
                            this.state.monumentList.map((monumentList: MonumentList) => {
                                return (
                                    <input className="thumbnail-pic" type="image" src={`https://drive.google.com/thumbnail?id=${monumentList.MONUMENT_ID}`} alt={monumentList.MONUMENT_NAME}
                                        onClick={() => this.thumbnail(monumentList.MONUMENT_ID)} />
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