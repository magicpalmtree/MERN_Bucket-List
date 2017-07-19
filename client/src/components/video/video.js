// This file is our parent component.

import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './search-bar';
import VideoDetail from './video-detail';

// The API key that I got from https://console.developers.google.com/apis/credentials?project=bucketlistapp-173518:
const API_KEY = 'AIzaSyCfxD1spZ6P4PHgACvZB-vtJicI7Ii3RIg';

// Make our Video Component:
class Video extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null
		};
		this.videoSearch('create bucket list');
	}
	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}
	render() {
		const videoSearch = _.debounce((term)=>{ this.videoSearch(term) }, 1800);
		
		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo}/>
			</div>
		);
	}
}
export default Video;











































