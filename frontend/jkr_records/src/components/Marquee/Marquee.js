import React, { Component } from 'react';
import Marquee from 'react-drag-marquee';
import './Marquee.css'; // Make sure to import the stylesheet

class MarqueeComponent extends Component {
  render() {
    const { text } = this.props;

  

    return (
      <Marquee 
        text={text}

      
      />
      
      
    );
  }
}

export default MarqueeComponent;