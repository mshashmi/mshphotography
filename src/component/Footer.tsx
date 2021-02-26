import * as React from 'react';
import '../css/index.css';

interface Props {
}

interface State {
}

export default class Footer extends React.Component<Props, State> {
    state: State = {
    };
    render() {
        return (
            <div className="App">
                <footer className="App-footer">
                    <p>
                        &copy; MSH Photography 2021
          </p>
                </footer>
            </div>
        );
    }

}