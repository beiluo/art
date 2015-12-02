import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router';
import ChartistGraph from 'react-chartist';

import '../css/home.css'
import '../css/gridlex.css'


class Home extends React.Component {
	constructor(props){
		super(props);
		let lineChartData = {
			labels: [1, 2, 3, 4, 5, 6, 7, 8],
			series: [
				[5, 9, 7, 8, 5, 3, 5, 4]
			]
		}
		let lineChartOptions = {
			low: 0,
			showArea: true
		}
		this.state = {Data:lineChartData,Options:lineChartOptions}
	}
	render(){
		var simpleLineChartData = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  series: [
    [12, 9, 7, 8, 5],
    [2, 1, 3.5, 7, 3],
    [1, 3, 4, 5, 6]
  ]
}
		return (
			<section className="view-container animate-fade-up">
				<div className="page page-dashboard ng-scope">
					<div className="grid">
						<div className="col-12">
							<div className="panel panel-default panel-minimal">
								<div className="divider divider-md"></div>
								<div className="panel-heading">图表展示</div>
								<div className="divider divider-md"></div>
								<div className="panel-body">
									<ChartistGraph data={this.state.Data} options={this.state.Options} type={'Line'} />
									
<ChartistGraph data={simpleLineChartData} type={'Line'} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Home;