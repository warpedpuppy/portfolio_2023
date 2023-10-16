import React, { Component } from 'react';
import CandyAnimation from './code/candyAnimation';
import Utils from './code/utils';
export default class KlimtBackground extends Component {

  componentDidMount = async () => {
    setTimeout(this.createSwirls, 100)
    window.addEventListener('resize', this.resizeHandler);
  }
  createSwirls = () => {
    Utils.getWidthAndHeight()
    CandyAnimation.init(Utils.canvasWidth, Utils.canvasHeight);
  }
  componentWillUnmount = () => {
    CandyAnimation.destroy();
    window.removeEventListener('resize', this.resizeHandler);
  }
  resizeHandler = () => {
    Utils.getWidthAndHeight()
    CandyAnimation.resize(Utils.canvasWidth, Utils.canvasHeight);
  }

  render() {
    return <>
    <div id="candy-canvas"></div>
    </>;
  }
}
