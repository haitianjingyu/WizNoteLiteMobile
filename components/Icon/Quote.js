/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Quote = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M687.658667 341.333333a37.333333 37.333333 0 0 1 37.674666 38.314667v140.245333c0 23.722667-1.962667 45.781333-4.565333 64.64a154.24 154.24 0 0 1-51.285333 96.085334c-13.909333 14.336-30.72 25.514667-49.365334 32.810666-19.157333 8.106667-41.557333 0-49.365333-18.816a37.034667 37.034667 0 0 1 18.517333-49.365333c10.88-4.821333 20.992-11.264 29.866667-19.2 8.064-7.466667 14.72-16 20.138667-25.301333 3.968-9.216 6.570667-18.944 7.808-28.885334a116.906667 116.906667 0 0 0 2.261333-17.194666h-99.669333c-20.138667 0-37.674667-16.213333-37.674667-36.693334V379.648c0-20.906667 16.768-37.973333 37.674667-38.314667z m-255.658667 0a37.376 37.376 0 0 1 37.333333 38.314667v140.16c0 23.722667-1.962667 45.781333-4.565333 64.597333a161.536 161.536 0 0 1-15.914667 51.285334c-9.173333 16.810667-21.12 31.957333-35.413333 44.8-13.952 14.378667-30.890667 25.557333-49.621333 32.768a38.485333 38.485333 0 0 1-50.005334-18.858667 37.632 37.632 0 0 1 19.456-49.322667c10.837333-4.693333 20.821333-11.178667 29.568-19.114666 8.106667-7.424 14.805333-15.957333 20.096-25.344 2.602667-6.826667 6.528-16.213333 8.448-28.885334 0.981333-4.864 1.621333-10.666667 1.621334-17.194666H293.674667c-20.48 0-37.674667-16.213333-37.674667-36.693334v-138.24A37.973333 37.973333 0 0 1 293.674667 341.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Quote.defaultProps = {
  size: 18,
};

Quote = React.memo ? React.memo(Quote) : Quote;

export default Quote;
