import React from 'react';
import styled from 'styled-components';
import ActivityCard from './ActivityCard';
import PercentageCard from '../profileViews/PercentageCard';
import HeaderCard from '../profileViews/HeaderCard';


const Rectangle = styled.div` 
position: absolute;
left: 28.69px;
right: 29.02px;
top: 26px;
bottom: 26px;

background: #c4c4c4;
opacity: 0.5;
border-radius: 30px;
` 


const Container = () => {
  
    return (
      <div>
         <Rectangle/>
         <ActivityCard/>
         <PercentageCard/>
         <HeaderCard/>
      </div>
  );
    
}

export default Container;