import React from 'react';
import Navbar from '../Navbar';
import MainContent from '../MainContent';

import 'emerald-ui/lib/styles.css';

function ArchivedContent() {
  return <h1>I am the archived notes</h1>;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentContent: 'main'
    };
    this.handleClickOption = this.handleClickOption.bind(this);
  }

  handleClickOption(value) {
    this.setState({ currentContent: value || 'main' });
  }

  render() {
    return (
      <div className="App">
        <Navbar handleClickOption={this.handleClickOption} />
        {this.state.currentContent === 'main' ? (
          <MainContent />
        ) : (
          <ArchivedContent />
        )}
      </div>
    );
  }
}

export default App;
