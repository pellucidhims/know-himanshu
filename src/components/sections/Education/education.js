import React, { useState } from 'react';
import { makeStyles, useMediaQuery } from '@material-ui/core';
import classnames from 'classnames';
import CustomizedTimeline from '../../CustomizedTimeline/customizedTimeline';

import VisiblityWrapper from '../../VisiblityWrapper/visiblityWrapper';

import { reverseArr } from '../../../utils';
import theme from '../../../theme';

const educationList = [
  {
    id: '2010',
    duration: '2010-2012',
    institute: 'Kendriya Vidyalaya No.2, Port Blair',
    degree: 'Senior Secondary Certificate',
    stream: 'Science',
    description:
      'I graduated high school, where I enjoyed studying science, along with mathematics and biology. Initially, had an inclination towards biology and was pretty good at it. But then turned my gaze towards computers and got fascinated with internet and websites allowing us to do some amazing things.',
    icon: 'book',
    iconColor: 'primary',
  },
  {
    id: '2012',
    duration: '2012-2016',
    institute: 'National Institute of Technology Durgapur, Durgapur',
    degree: 'Bachelor of Technology',
    stream: 'Information Technology',
    description:
      'Education consisted of curriculum having subjects like - C/C++ programming, Shell scripting, TCP/IP Networking, SQL, Microprocessor, Web development, Digital Signal Processing and more! Apart from academics, was heading the college Radio Station - Radio Nitroz and NSS Unit.',
    icon: 'school',
    iconColor: 'secondary',
  },
];

const Education = () => {
  const classes = useStyles();
  const [list] = useState(reverseArr(educationList));
  const matches = useMediaQuery('(min-width:900px)');
  return (
    <VisiblityWrapper>
      <div
        className={classnames(classes.root, {
          [classes.rootVertical]: !matches,
        })}
      >
        <CustomizedTimeline list={list} align="alternate" />
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/educationIcon.png`}
            className={classes.eductionIcon}
            alt="education"
          />
        </div>
      </div>
    </VisiblityWrapper>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rootVertical: {
    flexWrap: 'wrap-reverse',
    justifyContent: 'center',
    alignItems: 'center',
  },
  eductionIcon: {
    width: '200px',
    height: '200px',
    borderRadius: '20px',
  },
  oppositeContentContainer: {
    color: theme.palette.primary.contrastText,
  },
}));

// Education.propTypes = {};

export default Education;
