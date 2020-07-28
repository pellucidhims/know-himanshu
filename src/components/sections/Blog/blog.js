import React from 'react';
import { makeStyles, Typography, Tooltip } from '@material-ui/core';

const Blog = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.innerRoot}>
        <div>
          <Typography variant="h3">Work in progress...</Typography>
          <Typography variant="h5">
            Watchout this space for some awesome content!
          </Typography>
        </div>
        <div style={{}}>
          <Tooltip
            title="Yep! that's me coding..."
            placement="top-start"
            arrow
            classes={classes.tooltip}
          >
            <img
              src={`${process.env.PUBLIC_URL}/workInProgressIcon.png`}
              className={classes.wipIcon}
              alt="blog"
            />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    // width: '100%'
  },
  innerRoot: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  wipIcon: {
    height: window.innerHeight - 150,
  },
  tooltip: {
    backgroundColor: 'black',
  },
}));

export default Blog;
