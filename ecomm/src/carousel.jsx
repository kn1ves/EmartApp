import React from 'react';
import SlideShow from 'react-image-show';

class Carousel extends React.Component {
  render() {
  const urlArray = ['https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350']
    return (
      <SlideShow
        images={urlArray}
        width="920px"
        imagesWidth="800px"
        imagesHeight="450px"
        imagesHeightMobile="56vw"
        thumbnailsWidth="920px"
        thumbnailsHeight="12vw"
        indicators thumbnails fixedImagesHeight
      />
    );
  }

}

export default Carousel;