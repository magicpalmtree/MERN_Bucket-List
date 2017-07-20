import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { fetchPost, deletePost } from '../../actions/index';
import axios from 'axios';

const ROOT_URL = 'https://cct-bucketlist.herokuapp.com/api';

const config = {
	headers: { authorization: localStorage.getItem('token') }
}

class ListShow extends Component {
	componentWillMount() {
		this.props.fetchPost(this.props.params.id);
	}

	onDeleteClick() {
		//todo add the delete here
		this.props.deletePost(this.props.params.id);
	}

	render() {
		const post = this.props.post;
			if (!post) {
				return (
					<div>
						Create a New Bucket List Item 
						<Link to="/newitem" className="btn btn-primary">New Bucket List Item</Link>
					</div>
				);
			}
			return (
				<div>

					<h3>{post.title}</h3>
					<div id="space"></div>
					<h6>Category: {post.topic}</h6>
					<div id="space"></div>
					<p>{post.content}</p>

					<Link to="/items" className="btn btn-primary">Back to My Bucket List</Link>

					{/* Module 27 uses "Update List" as the button text: */}
					<Link to={`/updateitem/${this.props.params.id}`} className="btn btn-info">Edit This Item</Link>

					<button className="btn btn-danger"
						onClick={this.onDeleteClick.bind(this)}>
						Delete This Item 
					</button>

				</div>
			);
	}
}


function mapStateToProps(state) {
	return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(ListShow);
















































