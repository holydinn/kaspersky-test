import React from 'react';
import {ReactComponent as Star} from '../../img/star.svg'
import {ReactComponent as HalfStar} from '../../img/halfStar.svg'

const Stars = () => {
  return (
    <div style={{marginRight:6}}>
      <Star/><Star/><Star/><Star/><HalfStar/>
    </div>
  );
};

export default Stars;