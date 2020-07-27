import React from 'react';
import { makeStyles } from '@material-ui/core';

const CustomCursor = () => {
  const classes = useStyles();
  return (
    <div id="customCursor" className={classes.root}>
      <img
        src={`${process.env.PUBLIC_URL}/wandCursor.png`}
        className={classes.cursorImage}
        alt="cursor"
      />
    </div>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
    transition: 'all 0.25 ease',
    transitionProperty: 'background, border, transform',
    transformOrigin: '150% 150%',
    zIndex: 9999,
    '&::selection': {
      color: 'red',
      background: 'yellow',
    },
  },
  cursorImage: {
    width: '3rem',
    height: '3rem',
  },
}));

export default CustomCursor;
