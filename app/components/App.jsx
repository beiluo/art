import React from 'react';
import Header from './Header';
import LeftNav from './LeftNav';
import '../css/base.css'
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="main-container">
          <aside className="nav-container nav-fixed nav-vertical bg-dark">
            <LeftNav />
          </aside>
          <div className="content-container">
            {this.props.children}        
          </div>
        
        </div>
      </div>
    );
  }
}

export default App;