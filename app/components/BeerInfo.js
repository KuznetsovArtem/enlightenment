/**
 * Created by artem on 12/9/16.
 */

import React from 'react';
import {Image, View} from 'react-native';

let imageStyle = {
  width: 200,
  height: 150
};

class BeerInfo extends React.Component {
  render() {
    let pic = {
      uri: this.props.image
    };

    return (
        <Image source={pic} style={imageStyle}/>
    );
  }
}


export default BeerInfo;