import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router';
import ChartistGraph from 'react-chartist';
import Chartist from 'chartist';

import '../css/home.css'
import '../css/gridlex.css'
import '../css/chartist.min.css'


class Home extends React.Component {
	constructor(props){
		super(props);
		let lineChartData = {
			labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
			// Naming the series with the series object array notation
			series: [{
				name: 'series-1',
				data: [1,3,5,7,9,7,5,3,1]
			}, {
				name: 'series-2',
				data: [0,0,4,6,10,6,2,0,0]
			}]
		}
		let lineChartOptions = {
			fullWidth: true,
			// Within the series options you can use the series names
			// to specify configuration that will only be used for the
			// specific series.
			series: {
				'series-1': {
					showArea:true
				},
				'series-2': {
					showArea: true
				}
			}
		}
		this.state = {Data:lineChartData,Options:lineChartOptions}
	}
	render(){
		return (
			<section className="view-container animate-fade-up">
				<div className="page page-dashboard">
					<div className="grid">
						<div className="col-12">
							<div className="panel panel-default panel-minimal">
								<div className="divider divider-md"></div>
								<div className="panel-heading">图表展示</div>
								<div className="divider divider-md"></div>
								<div className="panel-body">
									<div className="chat" style={{height:"350px"}}>
										<ChartistGraph data={this.state.Data} options={this.state.Options} type={'Line'}/>
									</div>
									<div className="divider divider-xl"></div>
									<div className="grid">
										<div className="col-3 box-stats">
											<span className="box-desc">Views</span>
											<p className="box-num">4,268</p>
										</div>
										<div className="col-3 box-stats">
											<span className="box-desc">Clickthroughs</span>
											<p className="box-num">3,239</p>
										</div>
										<div className="col-3 box-stats">
											<span className="box-desc">Vistors</span>
											<p className="box-num">2,922</p>
										</div>
										<div className="col-3 box-stats no-border">
											<span className="box-desc">Users</span>
											<p className="box-num">1,093</p>
										</div>
									</div>
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