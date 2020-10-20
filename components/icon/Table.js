/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Table = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M810.666667 213.333333a42.666667 42.666667 0 0 1 42.666666 42.666667v554.666667a42.666667 42.666667 0 0 1-42.666666 42.666666H213.333333a42.666667 42.666667 0 0 1-42.666666-42.666666V256a42.666667 42.666667 0 0 1 42.666666-42.666667h597.333334zM384 682.666667H213.333333v106.666666a21.333333 21.333333 0 0 0 17.493334 20.992L234.666667 810.666667H384v-128z m213.333333 0h-170.666666v128h170.666666v-128z m213.333334 0h-170.666667v128h149.333333a21.333333 21.333333 0 0 0 20.992-17.493334L810.666667 789.333333V682.666667z m-213.333334-170.666667h-170.666666v128h170.666666v-128z m213.333334 0h-170.666667v128h170.666667v-128zM213.333333 512v128h170.666667v-128H213.333333z m384-170.666667h-170.666666v128h170.666666V341.333333z m192 0H640v128h170.666667V362.666667a21.333333 21.333333 0 0 0-21.333334-21.333334zM213.333333 469.333333h170.666667V341.333333H234.666667a21.333333 21.333333 0 0 0-20.992 17.493334L213.333333 362.666667V469.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Table.defaultProps = {
  size: 18,
};

Table = React.memo ? React.memo(Table) : Table;

export default Table;