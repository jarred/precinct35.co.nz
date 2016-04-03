import React from 'react';
import $ from 'jquery';
import _ from 'underscore';
import ClassSet from 'classnames';

export default React.createClass({
  getInitialState(){
    return {
      activeImage: 0,
      images: ["http://cdn.shopify.com/s/files/1/1022/7525/products/Claska-BowlLargeYellow_2048x2048.jpeg?v=1457662389",
            "http://cdn.shopify.com/s/files/1/1022/7525/products/PendletonTowel-SaxonyHills_2048x2048.jpeg?v=1457662383",
            "http://cdn.shopify.com/s/files/1/1022/7525/products/SaitoWood-MediumTrayWalnut2_2048x2048.jpeg?v=1457662359",
            "http://cdn.shopify.com/s/files/1/1022/7525/products/TaperedBeeswaxcandles_1024x1024.jpeg?v=1457662230",
            "http://cdn.shopify.com/s/files/1/1022/7525/products/Goldsworthy-MonarchLowStook-Oak3_bdddf8fc-16e2-4e43-9a4a-4a86b189c973_1024x1024.jpeg?v=1458098738",
            "http://cdn.shopify.com/s/files/1/1022/7525/products/Muskhane-CalashSmallGreen_1024x1024.jpeg?v=1457994381",
            "http://cdn.shopify.com/s/files/1/1022/7525/products/IrisH-Bathmat-Large_1024x1024.jpeg?v=1457904560"
          ]
      }
  },
  componentDidMount(){
    var img = new Image();
    img.src = this.state.images[0];
    img.onload = this.go;
  },
  go(){
    this.timer = setInterval(this.nextImage, 2000);
  },
  nextImage(){
    if(this.state.activeImage > (this.state.images.length - 2)){
      this.setState({
        activeImage: 0
      });
    }else{
      this.setState({
        activeImage: (this.state.activeImage + 1)
      });
    }
  },
  renderPhoto(image){
    var imageActive = false;
    if(this.state.images.indexOf(image) == this.state.activeImage){
      imageActive = true;
    }
    var classes = ClassSet({
      'collection-image': true,
      'collection-image--active': imageActive
    })
    var style = {
      backgroundImage: 'url(' + image + ')'
    };
    return <div className={classes} style={style}>

    </div>
  },
  render(){
    return <div className="collection">
      {this.state.images.map((image) => this.renderPhoto(image))}
      <div className="index-block-content collection-logo v-center">
        <img src="/assets/img/precinct-online-logo.svg" />
      </div>
    </div>
  }
});
