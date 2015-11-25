import React from 'react';
import { Link } from 'react-router'

class Voting1 extends React.Component {
	getPair() {
    return ['APICloud', '28 Days Later'];
  }
  render(){
    return (
    	<div className="voting">
    		<Link to="/">/</Link>
	      {this.getPair().map(entry =>
	        <button key={entry}>
	          <h1>{entry}</h1>
	        </button>
	      )}
	    </div>
	  );
  }
}
export default Voting1;