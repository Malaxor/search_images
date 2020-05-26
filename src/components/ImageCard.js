import React, { Component } from 'react';

class ImageCard extends Component {
   constructor(props) {
      super(props);
      this.imageRef = React.createRef(); // display information about a JSX tag (HTML element)

      this.state = { spans: 0 };
   }
   componentDidMount() {
      // extracting the image height can only be done after it has loaded
      this.imageRef.current.addEventListener('load', this.setSpans);
   }
   setSpans = () => {
      const height = this.imageRef.current.clientHeight;
      const spans = Math.ceil(height / 10);
      this.setState(() => ({ spans }));
   }
   render() {
      const { description, urls } = this.props.image;
      return ( 
         <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
            <img
               ref={this.imageRef} 
               alt={description} 
               src={urls.regular}
            />
         </div>
      )
   }
}
export default ImageCard;