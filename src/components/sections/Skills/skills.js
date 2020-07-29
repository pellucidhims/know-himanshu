import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import PropTypes from 'prop-types';

const skillSet = [
  {
    label: 'JavaScript',
    value: 4,
  },
  {
    label: 'HTML',
    value: 4,
  },
  {
    label: 'CSS',
    value: 4,
  },
  {
    label: 'ReactJS',
    value: 4,
  },
  {
    label: 'React Native',
    value: 3.5,
  },
  {
    label: 'NodeJS',
    value: 3.5,
  },
  {
    label: 'MongoDB',
    value: 3,
  },
  {
    label: 'AWS',
    value: 3,
  },
];

const sketchList = [
  {
    label: 'Drawing 1',
    path: `${process.env.PUBLIC_URL}`,
    file: 'drawing1',
  },
  {
    label: 'Drawing 2',
    path: `${process.env.PUBLIC_URL}`,
    file: 'drawing2',
  },
  {
    label: 'Drawing 3',
    path: `${process.env.PUBLIC_URL}`,
    file: 'drawing3',
  },
  {
    label: 'Drawing 4',
    path: `${process.env.PUBLIC_URL}`,
    file: 'drawing4',
  },
];

const DisplayRating = ({ label, value, ratingScale = 5 }) => {
  const classes = useStyles();
  return (
    <Box
      component="div"
      mb={3}
      borderColor="transparent"
      key={label}
      className={classes.displayRatingRoot}
    >
      <Typography component="legend" className={classes.displayRatingLabel}>
        {label}
      </Typography>
      <Rating
        name="read-only"
        value={value}
        readOnly
        max={ratingScale}
        precision={0.5}
        className={classes.displayRatingIcon}
      />
    </Box>
  );
};

DisplayRating.defaultProps = {
  label: '',
  value: 0,
  ratingScale: 5,
};

DisplayRating.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
  ratingScale: PropTypes.number,
};

const Skills = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        {skillSet.map((skill) => {
          return <DisplayRating label={skill.label} value={skill.value} />;
        })}
      </div>
      <Typography variant="h4" className={classes.sketchRoot}>
        Art work at glance
      </Typography>
      <div className={classes.root}>
        {sketchList.map((sketch) => {
          return (
            <div>
              <img
                key={sketch.label}
                src={`${process.env.PUBLIC_URL}/${sketch.file}.jpg`}
                className={classes.sketch}
                alt={sketch.label}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  displayRatingRoot: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    flexGrow: 1,
    minWidth: '200px',
    width: '45%',
    marginRight: '5%',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.primary.contrastText,
    },
    '&:hover $displayRatingLabel': {
      letterSpacing: '4px',
      fontWeight: 'bold',
    },
    '&:hover $displayRatingIcon': {
      letterSpacing: '4px',
      fontWeight: 'bold',
      transform: 'scale(1.1)',
      color: theme.palette.primary.main,
    },
  },
  displayRatingLabel: {
    letterSpacing: '2px',
    transition: 'letter-spacing 0.25s linear',
  },
  displayRatingIcon: {
    color: theme.palette.primary.main,
    transition: 'transform 0.25s linear',
  },
  sketchRoot: {
    margin: '2% 0px',
    color: theme.palette.secondary.main,
  },
  sketch: {
    width: '300px',
    height: '300px',
    margin: '10px',
    borderRadius: '50%',
    transition: 'transform 0.25s linear',
    '&:hover': {
      transform: 'scale(1.4)',
      borderRadius: '10px',
    },
  },
}));

// Skills.propTypes = {};

export default Skills;