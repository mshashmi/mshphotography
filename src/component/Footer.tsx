import * as React from 'react';
import '../css/index.css';

interface Props {
}

interface State {
}

export default class Footer extends React.Component<Props, State> {
    state: State = {
        count: 0
    };
    render() {
        return (
            <div className="App">
                <footer className="App-footer">
                    <p>
                        &copy; YIPL 2020
          </p>
                </footer>
            </div>
        );
    }

}