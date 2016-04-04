import React from 'react';
import $ from 'jquery';
import _ from 'underscore';
import ClassSet from 'classnames';

export default React.createClass({
  getInitialState(){
    return {
      dataLoaded: false,
      photos: []
    }
  },
  renderPreloader(){
    if(!this.state.dataLoaded){
      return <div className="index-block-content v-center">
        ...
      </div>
    }else{
      return null
    }
  },
  componentDidMount(){
    $.ajax({
      type: 'GET',
      dataType: 'jsonp',
      url: "https://api.instagram.com/v1/users/19601174/media/recent/?access_token=20755768.06f8ba8.b52717186035436bac737b48cada2829&count=10",
      success: this.dataLoaded
    });
  },
  dataLoaded(data){
    this.setState({
      photos: data.data,
      dataLoaded: false,
      activePhotoIndex: 0
    });
    var img = new Image();
    img.onload = this.init;
    img.src = this.state.photos[0].images.standard_resolution.url;
  },
  init(){
    this.setState({
      dataLoaded: true
    });
    this.timer = setInterval(this.nextImage, 2000);
  },
  nextImage(){
    if(this.state.activePhotoIndex > (this.state.photos.length - 2)){
      this.setState({
        activePhotoIndex: 0
      });
    }else{
      this.setState({
        activePhotoIndex: (this.state.activePhotoIndex + 1)
      });
    }
  },
  renderPhoto(photo){
    var style = {
      backgroundImage: 'url(' + photo.images.standard_resolution.url + ')'
    };
    if(this.state.photos.indexOf(photo) == this.state.activePhotoIndex){
      style.display = 'block';
    }
    return <div className="instagram-image" key={photo.id} style={style}>

    </div>
  },
  renderText(){
    if(this.state.dataLoaded){
      return <a className="instagram-text" href="https://www.instagram.com/precinct_35/" target="_blank">
        Follow us on instagram
      </a>
    }else{
      return null;
    }
  },
  render(){
    return <div className="instagram">
      {this.renderPreloader()}
      {this.state.photos.map((photo) => this.renderPhoto(photo))}
      {this.renderText()}
    </div>
  }
})