import React from 'react';
import Header from './Header';
import LeftNav from './LeftNav';
import '../css/base.css'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {collapsed:"",flag:0};
  }

  _setCollapsed(){
    let flag=this.state.flag?0:1;
    let collapsed = flag?"nav-collapsed-min":"";
    this.setState({"collapsed":collapsed,"flag":flag})
  }

  render() {
    console.log("APPP")
    return (
      <div className={this.state.collapsed}>
        <Header onClick={this._setCollapsed.bind(this)}/>
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