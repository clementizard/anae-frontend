import React, { Fragment } from 'react';
import { motion } from 'framer-motion';

export const Wrapper = ({ children, ...props }) => (
  <svg viewBox="0 0 219.58 219.58" {...props}>
    {children}
  </svg>
);

export const Circle = (props) => (
  <motion.circle
    cx="109.79"
    cy="109.79"
    r="109.29"
    style={{ fill: 'transparent', stroke: 'white', strokeMiterlimit: 10 }}
    {...props}
  />
);

const LettersRaw = [
  "M263,324.51l-7.56-17.79H225.18l-7.48,17.79-.72-.29,23.32-54.79,23.4,54.79ZM225.54,306h29.6L240.3,271.3Z",
  "M291.93,292.83a18.34,18.34,0,0,1,3.52,5.94,20.18,20.18,0,0,1,1.23,7v17.93H296V305.79a19.05,19.05,0,0,0-1.23-6.88,18.26,18.26,0,0,0-3.31-5.58,16.07,16.07,0,0,0-4.89-3.78,13.44,13.44,0,0,0-6-1.4,13.27,13.27,0,0,0-6,1.4,16.07,16.07,0,0,0-4.89,3.78,18.28,18.28,0,0,0-3.32,5.58,19.26,19.26,0,0,0-1.22,6.88H265v18h-.72V288.22H265V300.6a19.64,19.64,0,0,1,1.58-4.17,18,18,0,0,1,2.45-3.6,16.53,16.53,0,0,1,5.26-4,14.47,14.47,0,0,1,12.42,0A16.72,16.72,0,0,1,291.93,292.83Z",
  "M313,287.72a13.14,13.14,0,0,1,5.29,1.08,13.75,13.75,0,0,1,7.24,7.2,12.85,12.85,0,0,1,1.08,5.25V324h-.72V308.31c-.1.57-.21,1.15-.33,1.73a11.18,11.18,0,0,1-.47,1.65,21.21,21.21,0,0,1-1.65,4.21,24.33,24.33,0,0,1-2.23,3.5,15.47,15.47,0,0,1-5.33,4.32,13.34,13.34,0,0,1-5.76,1.36,11,11,0,0,1-7.49-2.66,8.94,8.94,0,0,1-3.24-7.06c0-3.69,1.42-6.19,4.25-7.48a12.18,12.18,0,0,1,4.25-1.05c1.58-.12,3.19-.18,4.82-.18h2.09c1.58,0,3.05,0,4.39-.14a10.67,10.67,0,0,0,3.49-.79,5.39,5.39,0,0,0,2.34-1.91,6.09,6.09,0,0,0,.87-3.49,13.18,13.18,0,0,0-1.3-4.65,12.78,12.78,0,0,0-2.81-3.78,13.66,13.66,0,0,0-4-2.52,12.54,12.54,0,0,0-4.79-.93,12.77,12.77,0,0,0-5,1,13.4,13.4,0,0,0-4.14,2.74,12.51,12.51,0,0,0-2.77,4.07,12.38,12.38,0,0,0-1,5h-.72a12.85,12.85,0,0,1,1.08-5.25,14,14,0,0,1,2.91-4.29,13.88,13.88,0,0,1,4.36-2.91A13.4,13.4,0,0,1,313,287.72Zm7.63,31.17q4.32-5.33,5.11-14.9a5.63,5.63,0,0,1-2.88,2.37,12.16,12.16,0,0,1-4.25.9c-1.58.08-3.21.11-4.89.11h-1q-2.37,0-4.68.18a12.72,12.72,0,0,0-4.1,1q-3.83,1.74-3.82,6.84a8.25,8.25,0,0,0,.76,3.57,8.63,8.63,0,0,0,2.12,2.84,10.05,10.05,0,0,0,3.17,1.91,11,11,0,0,0,4,.68,12.18,12.18,0,0,0,5.72-1.4A14.7,14.7,0,0,0,320.58,318.89Z",
  "M329.72,304.13h30.75a17.89,17.89,0,0,0-1.26-6.33,15.6,15.6,0,0,0-8.14-8.54,14.35,14.35,0,0,0-6-1.26,12.93,12.93,0,0,0-5.94,1.41,16.34,16.34,0,0,0-4.9,3.81,18.25,18.25,0,0,0-3.34,5.62,19.44,19.44,0,0,0,0,13.61,18.26,18.26,0,0,0,3.31,5.58,16.07,16.07,0,0,0,4.89,3.78,13.31,13.31,0,0,0,6,1.4,13.71,13.71,0,0,0,4.82-.86,14.94,14.94,0,0,0,4.25-2.45,16.62,16.62,0,0,0,3.39-3.78,18.16,18.16,0,0,0,2.23-4.93l.72.21a18.57,18.57,0,0,1-5.83,9,14.62,14.62,0,0,1-15.77,2.13,16.53,16.53,0,0,1-5.26-4,17.94,17.94,0,0,1-3.49-5.9,20.61,20.61,0,0,1-1.19-7,19.83,19.83,0,0,1,1.26-7,18.83,18.83,0,0,1,3.57-5.94,14.77,14.77,0,0,1,5.11-4,14.56,14.56,0,0,1,6.19-1.44,15.4,15.4,0,0,1,6.16,1.26,16.44,16.44,0,0,1,8.74,9.18,18.58,18.58,0,0,1,1.23,6.77v.36H329.72Z",
];
export const LettersAnimated = LettersRaw.map((rawPath, index) => (props) => (
  <motion.path
    key={`letter-path-${index}`}
    d={rawPath}
    transform="translate(-182.65 -196.64)"
    style={{ fill: 'white', pointerEvents: 'none' }}
    {...props}
  />
));

const PointsRaw = [
  [
    {
      cx: '101.62',
      cy: '190.73',
      r: '0.67',
    },
    {
      cx: '118.16',
      cy: '190.73',
      r: '0.67',
    },
  ],
  [
    {
      cx: '89.24',
      cy: '200.52',
      r: '0.67',
    },
    {
      cx: '130.54',
      cy: '200.52',
      r: '0.67',
    },
  ],
];

export const PointsAnimated = ({ pointsProps, ...props }) => (
  <>
    {PointsRaw.map((points, i) => (
      <Fragment key={`point-container-${i}`}>
        {points.map((point, j) => (
          <motion.circle
            key={`point-${j}`}
            {...point}
            style={{ fill: 'white', stroke: 'white', strokeMiterlimit: 10, pointerEvents: 'none' }}
            {...pointsProps[i]}
            {...props}
          />
        ))}
      </Fragment>
    ))}
  </>
);

const LeafsRow = [
  [
    "M292.6,412c-5.9-6.39-8.18-12.83-6.17-18.88a23.23,23.23,0,0,1,6.1-8.95",
    "M292.49,412c5.9-6.39,8.17-12.83,6.16-18.88a23.23,23.23,0,0,0-6.1-8.95",
  ],
  [
    "M292.59,412.07c-7.87-1.16-13-4.95-15.07-11.36a28.32,28.32,0,0,1-.88-10.89,22.33,22.33,0,0,1,9.66,3.61",
    "M292.49,412.07c7.88-1.16,13.05-4.95,15.07-11.36a28.12,28.12,0,0,0,.88-10.89,22.43,22.43,0,0,0-9.66,3.61",
  ],
  [
    "M292.59,412.07q-18.29,7.85-26.21-9.52a23.61,23.61,0,0,1,11.14-1.84",
    "M292.49,412.07q18.28,7.85,26.21-9.52a23.57,23.57,0,0,0-11.14-1.84",
  ],
];
export const LeafsAnimated = ({ leafsProps, ...props }) => (
  <>
    {LeafsRow.map((leafs, i) => (
      <Fragment key={`leaf-container-${i}`}>
        {leafs.map((leaf, j) => (
          <motion.path
            key={`leaf-${j}`}
            d={leaf}
            transform="translate(-182.65 -196.64)"
            style={{ fill: 'none', stroke: 'white', strokeMiterlimit: 10, strokeWidth: '0.5px', pointerEvents: 'none' }}
            {...leafsProps[i]}
            {...props}
          />
        ))}
      </Fragment>
    ))}
  </>
);