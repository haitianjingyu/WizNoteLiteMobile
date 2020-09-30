/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Todolist = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M810.666667 170.666667a42.666667 42.666667 0 0 1 42.666666 42.666666v597.333334a42.666667 42.666667 0 0 1-42.666666 42.666666H213.333333a42.666667 42.666667 0 0 1-42.666666-42.666666V213.333333a42.666667 42.666667 0 0 1 42.666666-42.666666h597.333334z m-21.333334 42.666666h-554.666666a21.333333 21.333333 0 0 0-20.992 17.493334L213.333333 234.666667v554.666666a21.333333 21.333333 0 0 0 17.493334 20.992L234.666667 810.666667h554.666666a21.333333 21.333333 0 0 0 20.992-17.493334L810.666667 789.333333v-554.666666a21.333333 21.333333 0 0 0-21.333334-21.333334z m-91.434666 133.461334a20.138667 20.138667 0 0 1 27.733333 0.128l36.693333 35.584a18.218667 18.218667 0 0 1-0.128 26.538666l-281.898666 268.16a20.138667 20.138667 0 0 1-27.690667-0.128L304.341333 533.76a18.218667 18.218667 0 0 1 0.128-26.538667l37.12-35.370666a20.138667 20.138667 0 0 1 27.733334 0.128l97.664 94.464z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Todolist.defaultProps = {
  size: 18,
};

Todolist = React.memo ? React.memo(Todolist) : Todolist;

export default Todolist;
