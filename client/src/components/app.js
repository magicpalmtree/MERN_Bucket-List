import React, { Component } from 'react';
import NavBarHeader from './Nav';
// Import video.js:
import Video from './video/video';

	export default class App extends Component {
		render() {
			return (
				<div>
					<NavBarHeader />
				{/* Add an instance of Video: */}
					<Video />
				</div>
			);
		}
	}
	





























