/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Divide = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M192 213.333333h640a21.333333 21.333333 0 0 1 21.333333 21.333334v34.133333a21.333333 21.333333 0 0 1-21.333333 21.333333h-640a21.333333 21.333333 0 0 1-21.333333-21.333333v-34.133333a21.333333 21.333333 0 0 1 21.333333-21.333334z m640 477.866667a21.333333 21.333333 0 0 1 21.333333 21.333333v34.133334a21.333333 21.333333 0 0 1-21.333333 21.333333h-640a21.333333 21.333333 0 0 1-21.333333-21.333333v-34.133334a21.333333 21.333333 0 0 1 21.333333-21.333333h640zM307.2 456.533333a34.133333 34.133333 0 1 1 0 68.266667H204.8a34.133333 34.133333 0 1 1 0-68.266667h102.4z m256 0a34.133333 34.133333 0 1 1 0 68.266667h-102.4a34.133333 34.133333 0 1 1 0-68.266667h102.4z m256 0a34.133333 34.133333 0 1 1 0 68.266667h-102.4a34.133333 34.133333 0 1 1 0-68.266667h102.4z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Divide.defaultProps = {
  size: 18,
};

Divide = React.memo ? React.memo(Divide) : Divide;

export default Divide;