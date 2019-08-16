import React from 'react';

import SearchBar from './SearchBar';
import youtube from './apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    onTermSubmit = async (term) => {
        const KEY= process.env.REACT_APP_YOUTUBE_API_KEY;

        const response = await youtube.get('/search', {
            params: {
                part: 'snippet',
                maxResuts: 5,
                key: KEY,
                q: term
            }
        })

        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    render() { 
        return ( 
             <div className="ui container">
                 <div className="ui grid">
                     <div className="ui row">
                        <SearchBar onTermSubmit={this.onTermSubmit}/>
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                 </div>
             </div>
         );
    }
}
 
export default App;