import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
  <svg viewBox="0 0 202 24">
    <defs>
      <path d="M11,23.171875 L13.78125,9.703125 L14.59375,5.25 L15.40625,9.703125 L18.1875,23.171875 L22.78125,23.171875 L29.265625,0.140625 L24.375,0.140625 L21.296875,13.46875 L20.59375,17 L19.890625,13.328125 L17.15625,0.140625 L12.078125,0.140625 L9.484375,13.40625 L8.8125,17 L8.15625,13.328125 L5.109375,0.140625 L-1.39266376e-12,0.140625 L6.53125,23.171875 L11,23.171875 Z M37.109375,4.109375 L37.109375,0 L32.59375,0 L32.59375,4.109375 L37.109375,4.109375 Z M37.109375,23.171875 L37.109375,6.140625 L32.59375,6.140625 L32.59375,23.171875 L37.109375,23.171875 Z M55.5625,23.171875 L55.5625,19.515625 L46.625,19.515625 L55.265625,9.84375 L55.265625,6.140625 L41.453125,6.140625 L41.453125,9.765625 L49.59375,9.765625 L40.859375,19.703125 L40.859375,23.171875 L55.5625,23.171875 Z M64.1875,23.171875 L64.1875,6.8125 L73.59375,23.171875 L78.40625,23.171875 L78.40625,0.140625 L73.921875,0.140625 L73.921875,16.21875 L64.75,0.140625 L59.703125,0.140625 L59.703125,23.171875 L64.1875,23.171875 Z M91.1875,23.765625 C94.1145833,23.765625 96.296875,22.8776042 97.734375,21.1015625 C99.171875,19.3255208 99.890625,17.1875 99.890625,14.6875 C99.890625,12.2291667 99.171875,10.0989583 97.734375,8.296875 C96.296875,6.49479167 94.1145833,5.59375 91.1875,5.59375 C88.2604167,5.59375 86.078125,6.49479167 84.640625,8.296875 C83.203125,10.0989583 82.484375,12.2291667 82.484375,14.6875 C82.484375,17.1875 83.203125,19.3255208 84.640625,21.1015625 C86.078125,22.8776042 88.2604167,23.765625 91.1875,23.765625 Z M91.171875,20.03125 C89.8697917,20.03125 88.8671875,19.5677083 88.1640625,18.640625 C87.4609375,17.7135417 87.109375,16.3958333 87.109375,14.6875 C87.109375,12.9791667 87.4609375,11.6640625 88.1640625,10.7421875 C88.8671875,9.8203125 89.8697917,9.359375 91.171875,9.359375 C92.4739583,9.359375 93.4739583,9.8203125 94.171875,10.7421875 C94.8697917,11.6640625 95.21875,12.9791667 95.21875,14.6875 C95.21875,16.3958333 94.8697917,17.7135417 94.171875,18.640625 C93.4739583,19.5677083 92.4739583,20.03125 91.171875,20.03125 Z M109.438928,23.4141274 L109.765625,23.40625 L111.875,23.328125 L111.875,20 C111.729167,20.0104167 111.580729,20.0182292 111.429687,20.0234375 C111.278646,20.0286458 111.135417,20.03125 111,20.03125 C110.09375,20.03125 109.552083,19.9453125 109.375,19.7734375 C109.197917,19.6015625 109.109375,19.1666667 109.109375,18.46875 L109.109375,18.46875 L109.109375,9.46875 L111.875,9.46875 L111.875,6.296875 L109.109375,6.296875 L109.109375,1.546875 L104.703125,1.546875 L104.703125,6.296875 L102.328125,6.296875 L102.328125,9.46875 L104.703125,9.46875 L104.703125,19.953125 C104.703125,21.015625 104.953125,21.8020833 105.453125,22.3125 C106.223958,23.1145833 107.661458,23.4791667 109.765625,23.40625 L109.438928,23.4141274 Z M122.609375,23.734375 C125.234375,23.734375 127.276042,22.90625 128.734375,21.25 C129.671875,20.2083333 130.197917,19.1822917 130.3125,18.171875 L130.3125,18.171875 L125.765625,18.171875 C125.526042,18.671875 125.25,19.0625 124.9375,19.34375 C124.364583,19.8645833 123.619792,20.125 122.703125,20.125 C121.838542,20.125 121.098958,19.9114583 120.484375,19.484375 C119.473958,18.796875 118.9375,17.5989583 118.875,15.890625 L118.875,15.890625 L130.53125,15.890625 C130.552083,14.421875 130.505208,13.296875 130.390625,12.515625 C130.192708,11.1822917 129.760417,10.0104167 129.09375,9 C128.354167,7.85416667 127.416667,7.015625 126.28125,6.484375 C125.145833,5.953125 123.869792,5.6875 122.453125,5.6875 C120.067708,5.6875 118.127604,6.47395833 116.632812,8.046875 C115.138021,9.61979167 114.390625,11.8802083 114.390625,14.828125 C114.390625,17.9739583 115.21875,20.2447917 116.875,21.640625 C118.53125,23.0364583 120.442708,23.734375 122.609375,23.734375 Z M125.90625,12.953125 L118.984375,12.953125 C119.130208,11.8489583 119.486979,10.9739583 120.054687,10.328125 C120.622396,9.68229167 121.421875,9.359375 122.453125,9.359375 C123.401042,9.359375 124.195312,9.6640625 124.835937,10.2734375 C125.476562,10.8828125 125.833333,11.7760417 125.90625,12.953125 L125.90625,12.953125 Z M161,23.171875 L161,19.03125 L149.59375,19.03125 L149.59375,0.140625 L144.78125,0.140625 L144.78125,23.171875 L161,23.171875 Z M169.546875,4.109375 L169.546875,0 L165.03125,0 L165.03125,4.109375 L169.546875,4.109375 Z M169.546875,23.171875 L169.546875,6.140625 L165.03125,6.140625 L165.03125,23.171875 L169.546875,23.171875 Z M180.220178,23.4141274 L180.546875,23.40625 L182.65625,23.328125 L182.65625,20 C182.510417,20.0104167 182.361979,20.0182292 182.210937,20.0234375 C182.059896,20.0286458 181.916667,20.03125 181.78125,20.03125 C180.875,20.03125 180.333333,19.9453125 180.15625,19.7734375 C179.979167,19.6015625 179.890625,19.1666667 179.890625,18.46875 L179.890625,18.46875 L179.890625,9.46875 L182.65625,9.46875 L182.65625,6.296875 L179.890625,6.296875 L179.890625,1.546875 L175.484375,1.546875 L175.484375,6.296875 L173.109375,6.296875 L173.109375,9.46875 L175.484375,9.46875 L175.484375,19.953125 C175.484375,21.015625 175.734375,21.8020833 176.234375,22.3125 C177.005208,23.1145833 178.442708,23.4791667 180.546875,23.40625 L180.220178,23.4141274 Z M193.390625,23.734375 C196.015625,23.734375 198.057292,22.90625 199.515625,21.25 C200.453125,20.2083333 200.979167,19.1822917 201.09375,18.171875 L201.09375,18.171875 L196.546875,18.171875 C196.307292,18.671875 196.03125,19.0625 195.71875,19.34375 C195.145833,19.8645833 194.401042,20.125 193.484375,20.125 C192.619792,20.125 191.880208,19.9114583 191.265625,19.484375 C190.255208,18.796875 189.71875,17.5989583 189.65625,15.890625 L189.65625,15.890625 L201.3125,15.890625 C201.333333,14.421875 201.286458,13.296875 201.171875,12.515625 C200.973958,11.1822917 200.541667,10.0104167 199.875,9 C199.135417,7.85416667 198.197917,7.015625 197.0625,6.484375 C195.927083,5.953125 194.651042,5.6875 193.234375,5.6875 C190.848958,5.6875 188.908854,6.47395833 187.414062,8.046875 C185.919271,9.61979167 185.171875,11.8802083 185.171875,14.828125 C185.171875,17.9739583 186,20.2447917 187.65625,21.640625 C189.3125,23.0364583 191.223958,23.734375 193.390625,23.734375 Z M196.6875,12.953125 L189.765625,12.953125 C189.911458,11.8489583 190.268229,10.9739583 190.835937,10.328125 C191.403646,9.68229167 192.203125,9.359375 193.234375,9.359375 C194.182292,9.359375 194.976562,9.6640625 195.617187,10.2734375 C196.257812,10.8828125 196.614583,11.7760417 196.6875,12.953125 L196.6875,12.953125 Z" id="path-1"></path>
      <filter x="-4.0%" y="-29.5%" width="107.9%" height="167.3%" filterUnits="objectBoundingBox" id="filter-2">
          <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
          <feGaussianBlur stdDeviation="2.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.15 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
      </filter>
    </defs>
    <g id="WizNoteLite_night" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="WizNoteLite" fill-rule="nonzero">
          <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
          <use fill="#B4B7BB" xlink:href="#path-1"></use>
      </g>
    </g>
  </svg>
`;

export default (props) => <SvgXml xml={xml} width="100%" height="24" style={props.style ?? {}} />;
