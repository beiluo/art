import React from 'react';
import { Link } from 'react-router'

class Voting extends React.Component {
	getPair() {
    return ['Trainspotting', '28 Days Later'];
  }
  render(){
    return (
    	<div className="voting">
    		<Link to="/home">home</Link>
	      {this.getPair().map(entry =>
	        <button key={entry}>
	          <h1>{entry}</h1>
	        </button>
	      )}
	    </div>
	  );
  }
}
export default Voting;