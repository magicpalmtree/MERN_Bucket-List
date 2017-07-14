import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';


class GoalTable extends Component{
	renderList(){
		return this.props.goals.map((goals) => {
			return (
				<tr>
					<td key={goals.name}>{goals.name}</td>
					<td key={goals.category}>{goals.category}</td>
					<td key={goals.date}>{goals.date}</td>
				</tr>
			);
		});
	}

	render(){
		return (
			<Table>
			    <thead>
			      <tr>
			        <th>Item</th>
			        <th>Category</th>
			        <th>Finish By</th>
			      </tr>
			    </thead>
			    <tbody>
					{this.renderList()}
				</tbody>
			</Table>
		);
	}
}

// takes app state as argument
// Whatever gets returned will show up as props inside of goal list

function mapStateToProps(state){
	return{
		goals: state.goals
	};
}

// Export statement that'll connect the contents of the current State to the GoalTable class:
export default connect(mapStateToProps)(GoalTable);































