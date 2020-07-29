import React from 'react';
import { makeStyles } from '@material-ui/core';
import GridList from '../../GridList/gridList';

import VisiblityWrapper from '../../VisiblityWrapper/visiblityWrapper';

const projectList = [
  {
    img: `${process.env.PUBLIC_URL}/aboutIcon.png`,
    title: 'About Icon Project',
    author: 'Himanshu',
  },
  {
    img: `${process.env.PUBLIC_URL}/educationIcon.png`,
    title: 'Education Icon Project',
    author: 'Himanshu',
  },
  {
    img: `${process.env.PUBLIC_URL}/wandCursor.png`,
    title: 'Magic Icon Project',
    author: 'Himanshu',
  },
  {
    img: `${process.env.PUBLIC_URL}/drawing1.jpg`,
    title: 'Love is in air',
    author: 'Himanshu',
  },
  {
    img: `${process.env.PUBLIC_URL}/drawing2.jpg`,
    title: 'Hero on my wall',
    author: 'Himanshu',
  },
  {
    img: `${process.env.PUBLIC_URL}/drawing4.jpg`,
    title: 'Silent guardian... Watchful protector',
    author: 'Himanshu',
  },
];

const Project = () => {
  const classes = useStyles();
  return (
    <VisiblityWrapper>
      <div className={classes.root}>
        <GridList tileData={projectList} listHeader="Recent Projects" />
      </div>
    </VisiblityWrapper>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    borderRadius: '30px',
    overflow: 'hidden',
  },
}));

// Project.propTypes = {};

export default Project;
