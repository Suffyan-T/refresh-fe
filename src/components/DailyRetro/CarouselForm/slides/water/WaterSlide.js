import React from 'react';
import { addWater, subtractWater } from '../../../../../views/private/actions/actions-user';
import { connect } from 'react-redux';
import WaterImage from '../../../../UserDashboard/Main/Metrics/WaterCard/water.svg';
import { WaterCard } from '../../../../UserDashboard/Main/Metrics/WaterCard/WaterCard';

class WaterSlide extends React.Component{
  render() {
    return (
      <h1>WaterCard Here</h1>
      // <WaterCard/>
    )
  }
}

export default WaterSlide;
