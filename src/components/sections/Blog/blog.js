import React from 'react';
import {
  makeStyles,
  Typography,
  Tooltip,
  useMediaQuery,
} from '@material-ui/core';
import classnames from 'classnames';

import VisiblityWrapper from '../../VisiblityWrapper/visiblityWrapper';

const Blog = () => {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:900px)');
  return (
    <VisiblityWrapper>
      <div className={classes.root}>
        <div className={classes.innerRoot}>
          <div>
            <Typography variant="h3">Work in progress...</Typography>
            <Typography variant="h5">
              Watchout this space for some awesome content!
            </Typography>
          </div>
          <div>
            <Tooltip
              title="Yep! that's me coding..."
              placement="top-start"
              arrow
              className={classes.tooltip}
            >
              <img
                src={`${process.env.PUBLIC_URL}/workInProgressIcon.png`}
                className={classnames(classes.wipIcon, {
                  [classes.verticalWipIcon]: !matches,
                })}
                alt="blog"
              />
            </Tooltip>
          </div>
        </div>
      </div>
    </VisiblityWrapper>
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
    width: window.innerWidth / 3,
    height: window.innerHeight - 150,
    borderRadius: '30px',
    objectFit: 'cover',
  },
  verticalWipIcon: {
    width: window.innerWidth - 50,
  },
  tooltip: {
    backgroundColor: 'primary',
  },
}));

export default Blog;
