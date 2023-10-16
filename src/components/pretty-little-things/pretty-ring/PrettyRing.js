import React, { Component } from 'react';
import PsychologyAnimation from './psychologyAnimation';
import Utils from '../utils/utils';
import PauseButton from '../PauseButton';
export default class PrettyRing extends Component {

componentDidMount = () => {
    Utils.getWidthAndHeight()
    PsychologyAnimation.init(Utils.canvasWidth, Utils.canvasHeight);
    window.addEventListener('resize', this.resizeHandler);
}
componentWillUnmount = () => {
  PsychologyAnimation.stop();
    window.removeEventListener('resize', this.resizeHandler);
}
resizeHandler = () => {
  Utils.getWidthAndHeight()
  PsychologyAnimation.resize(Utils.canvasWidth, Utils.canvasHeight);
}
  render() {
    return (
      <>
      <div id="psychology"></div>
      <PauseButton buttonHandler={PsychologyAnimation} />
      </>
    );
  }
}
