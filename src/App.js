import React from 'react';
import './App.css';
import Search from './components/Search';
import youtubeApi from "./components/api/Youtube"
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';

export default class App extends React.Component {
  state= {
    videoMetaInfo:[],
    selectedVideoId:null
  }
  onVideoSelected = videoId =>{
    this.setState({
      selectedVideoId:videoId
    })
  }


  onSearch = async keyword =>{
    const response = await youtubeApi.get("/search",{
      params:{
        q:keyword

      }
    })
    // console.log(response)
    this.setState({
      videoMetaInfo:response.data.items,
      selectedVideoId:response.data.items[0].id.videoId
    })
    console.log(this.state)
  }
  render(){
  return (
    <div className="App">
    <Search onSearch={this.onSearch}/>
    <VideoList onVideoSelected={this.onVideoSelected} data={this.state.videoMetaInfo}/>
    <VideoPlayer videoId={this.state.selectedVideoId}/> 
    </div>
  );
  }
}

