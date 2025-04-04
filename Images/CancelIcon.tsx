import Svg, {Path} from 'react-native-svg';

import React from 'react';

const CancelIcon = () => (
    <Svg width="100%" height="100%" viewBox="0 0 25 24" fill="none">
      <Path 
        d="M15.3993 15L9.3999 9M9.40054 15L15.3999 9" 
        stroke="#232323" 
        strokeWidth="2.5" // Increased from 1.5 to 2.5
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

export default CancelIcon;