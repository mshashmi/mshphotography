import * as React from 'react';
import '../css/index.css';
import { BirdList } from '../model';

interface Props {
}

interface State {
    picture: number;
    pictureLarge: number;
    birdList: BirdList[];
}

export default class Birds extends React.Component<Props, State> {
    state: State = {
        picture: 0,
        pictureLarge: 0,
        birdList: []
    };

    componentDidMount() {
        var birdList: BirdList[] =
            [
                {
                    BIRD_ID: "19GnSlDkS5S7OOL8ZPpERElSEIrg_AIMm",
                    BIRD_NAME: "a_1"
                }, {
                    BIRD_ID: "198oPv1eSmnGNcA2ckBaXgSpTeN8W8hTE",
                    BIRD_NAME: "a_2"
                }, {
                    BIRD_ID: "1aN6r4NGo1hY1R5fCjZL5m7PoOtvWQv39",
                    BIRD_NAME: "a_3"
                }, {
                    BIRD_ID: "16d2dx3BdJNZdYr3TXwTWtH36ItWnQw6J",
                    BIRD_NAME: "a_4"
                }, {
                    BIRD_ID: "1KC3LmL9PV2RSsZGzYor5qQwqg-Om9DIw",
                    BIRD_NAME: "a_5"
                }, {
                    BIRD_ID: "1YVT3pCVADJu9Xf2IBfMomqGcdxUuiOO2",
                    BIRD_NAME: "a_6"
                }, {
                    BIRD_ID: "1sy9RjtcZzTv-kHzAF-rovQZXzS6-t66-",
                    BIRD_NAME: "a_7"
                }, {
                    BIRD_ID: "14KUW5zHGHcGO02J1pK43GjMYw-nFDX5o",
                    BIRD_NAME: "a_8"
                }, {
                    BIRD_ID: "1rq22H3iOAs01SxKhChWPVMyVfbB5LOBS",
                    BIRD_NAME: "a_9"
                }, {
                    BIRD_ID: "1dLJMwbdiQ0V3yOdK9OWGoakTJGuHOix_",
                    BIRD_NAME: "a_10"
                }, {
                    BIRD_ID: "1_YJj0h8yWX9MnKtdIf7ZqLgsPeXikAdd",
                    BIRD_NAME: "a_11"
                }, {
                    BIRD_ID: "1MW8CBitaWeAiYcc8_QE3QEY2nMaczqbv",
                    BIRD_NAME: "a_12"
                }, {
                    BIRD_ID: "10Gi2C5cI8RW-JrME7BXYR5SJMF4hR76Z",
                    BIRD_NAME: "a_13"
                }, {
                    BIRD_ID: "1IS2K1PUgctFD62u4LDTqlZz6tJ17KbJw",
                    BIRD_NAME: "a_14"
                }, {
                    BIRD_ID: "1wNyz-w2a4gs2_aA-KzR6Xt-JNGQtdydS",
                    BIRD_NAME: "a_15"
                }, {
                    BIRD_ID: "1ogKSB6A6NW4wUxFXtXnTMWlpca2Vz8OK",
                    BIRD_NAME: "a_16"
                }, {
                    BIRD_ID: "1623amHg9Mc18bap5gunToinE5bnzK7sK",
                    BIRD_NAME: "a_17"
                }, {
                    BIRD_ID: "1cjZ4ItiiZVMUQ3dlsLUiE5IFhz3pVDfD",
                    BIRD_NAME: "a_18"
                }, {
                    BIRD_ID: "1lyvZJcPy9PKIxjPnL7gce4ySPqxkVrLf",
                    BIRD_NAME: "a_19"
                }, {
                    BIRD_ID: "1TUt1YMClepsBraln_xsYmPlShj_Rf3uz",
                    BIRD_NAME: "a_20"
                }, {
                    BIRD_ID: "1-EUMRX6q-ASfYzTv3COwqy3xo-5_BviN",
                    BIRD_NAME: "a_21"
                }, {
                    BIRD_ID: "1rCrA3AT_aU-pF412HKX8Ap_7UyqXpFvD",
                    BIRD_NAME: "a_22"
                }, {
                    BIRD_ID: "1NF1IV19pgUTYrjUyUN02I7-8AGAEJwCI",
                    BIRD_NAME: "a_23"
                }, {
                    BIRD_ID: "184RX0C2U6OHNAgrnnEKUlqXxaUgUUvSS",
                    BIRD_NAME: "a_24"
                }, {
                    BIRD_ID: "1VXncuiOMyN7JyxoRwEmPw3Vo3Bmj-JiR",
                    BIRD_NAME: "a_25"
                }, {
                    BIRD_ID: "11IwEuRZzufsWR5kJfpK7rYs5M3ZSbf-N",
                    BIRD_NAME: "a_26"
                }, {
                    BIRD_ID: "1EBHSq1yNFMKXSMdiAhlqdGYUu6UINdub",
                    BIRD_NAME: "a_27"
                }, {
                    BIRD_ID: "1vpZZdBxWVP0PDnrIS0qMhfeOgQjm4QtO",
                    BIRD_NAME: "a_28"
                }, {
                    BIRD_ID: "1kX-G2fBR9CLXLMULPVf3Yo8xDCL7L2rQ",
                    BIRD_NAME: "a_29"
                }, {
                    BIRD_ID: "1k4AJ0EIOSAwBL9rWXvAPutoHpuCX96T6",
                    BIRD_NAME: "a_30"
                }, {
                    BIRD_ID: "1S23rO0rIxBCmS6tMJgKaRXlJEyj6Lryy",
                    BIRD_NAME: "a_31"
                }, {
                    BIRD_ID: "1kkLw33D4A--CgdQsjj531fUIal_TzDeb",
                    BIRD_NAME: "a_32"
                }, {
                    BIRD_ID: "1zGS5g2aNNZqfI4k2yX0vWTqraanruTHF",
                    BIRD_NAME: "a_33"
                }, {
                    BIRD_ID: "1rpfH5WPyfl7Y5GYZYjjZko_M5JNryIif",
                    BIRD_NAME: "a_34"
                }, {
                    BIRD_ID: "1uu3C9xn6F-g3ifgQikXU_3K_GQlaRe_A",
                    BIRD_NAME: "a_35"
                }, {
                    BIRD_ID: "1SGKeDkTk_MOxqdnlLuu0OjT5un38ViNj",
                    BIRD_NAME: "a_36"
                }, {
                    BIRD_ID: "1d3doKZFhNMQg5WSf6bl6aH53SC5uKEhg",
                    BIRD_NAME: "a_37"
                }, {
                    BIRD_ID: "1aq-YjJ-utV9xy_sp6Gc1tOzn8t_ZNDaB",
                    BIRD_NAME: "a_38"
                }, {
                    BIRD_ID: "1L7HbINN22KnFHbaY2B2GM6QiPoHiGEt2",
                    BIRD_NAME: "a_39"
                }, {
                    BIRD_ID: "1asF3dVleO3fGLpDwKQtgGnpeW0v2cA3F",
                    BIRD_NAME: "a_40"
                }, {
                    BIRD_ID: "1jW10aZtnOyEsXrg1sMFAvCmhdE1xGhpn",
                    BIRD_NAME: "a_41"
                }, {
                    BIRD_ID: "1X02a1hiMrutxUDwcC0veBqq6lNhJez0f",
                    BIRD_NAME: "a_42"
                }
            ];
        this.setState({ birdList: birdList });
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
                {this.state && this.state.birdList && (
                    <div className="picture-thumbnail">
                        {
                            this.state.birdList.map((birdList: BirdList) => {
                                return (
                                    <input className="thumbnail-pic" type="image" src={`https://drive.google.com/thumbnail?id=${birdList.BIRD_ID}`} alt={birdList.BIRD_NAME}
                                        onClick={() => this.thumbnail(birdList.BIRD_ID)} />
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