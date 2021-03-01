import * as React from 'react';
import '../css/index.css';
import Logo from '../images/msh.svg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Main from './Main';
import Contact from './Contact';
import Pictures from './Pictures';

interface Props {
}

interface State {
  tabIndex: number;
}

export default class Header extends React.Component<Props, State> {
  state: State = {
    tabIndex: 0
  };

  handleClick = () => {
    this.setState({ tabIndex: 0 });
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <div className="logo">
              <img className="logo-pointer" src={Logo} alt="logo" onClick={() => this.handleClick()} />
            </div>
            <Tabs selectedIndex={this.state.tabIndex}
              onSelect={(tabIndex: any) => this.setState({ tabIndex })}>
              <TabList>
                <Tab>
                </Tab>
                <Tab>
                  <div className="tab-name">Pictures</div>
                </Tab>
                <Tab>
                  <div className="tab-name">Contact</div>
                </Tab>
              </TabList>
              <TabPanel>
                <Main />
              </TabPanel>
              <TabPanel>
                <Pictures />
              </TabPanel>
              <TabPanel>
                <Contact />
              </TabPanel>
            </Tabs>
          </header>
        </div>
      </React.Fragment>
    );
  }
}