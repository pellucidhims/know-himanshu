import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import CustomizedTimeline from '../../CustomizedTimeline/customizedTimeline';

import VisiblityWrapper from '../../VisiblityWrapper/visiblityWrapper';

import { reverseArr, api } from '../../../utils';
import { apiLoadStatus, experiences } from '../../../constants';

const { IDLE, LOADING, SUCCESS, FAIL } = apiLoadStatus;

const Experience = () => {
  const classes = useStyles();
  const [indicator, setIndicator] = useState({ status: IDLE, message: '' });
  const [experienceList, setExperienceList] = useState([]);

  useEffect(() => {
    setIndicator({
      status: LOADING,
      message: 'Fetching career information...',
    });
    api
      .get('resource?type=EXPERIENCE')
      .then((response) => {
        setIndicator({
          status: SUCCESS,
          message: '',
        });
        setExperienceList(response.data.content);
      })
      .catch((error) => {
        setExperienceList(experiences); // Static list used in case API fails to fetch career info.
        setIndicator({
          status: SUCCESS,
          message: '',
        });
        // eslint-disable-next-line
        console.error(
          'An error occured while fetching career information: ',
          error.message
        );
      });
  }, []);

  if ([LOADING, FAIL].includes(indicator.status)) {
    return (
      <div className={classes.experienceRoot}>
        <span className={classes.errorSection}>{indicator.message}</span>
      </div>
    );
  }

  return (
    <VisiblityWrapper>
      <div className={classes.root}>
        <CustomizedTimeline
          list={reverseArr(experienceList)}
          align="alternate"
        />
      </div>
    </VisiblityWrapper>
  );
};

const useStyles = makeStyles((theme) => ({
  experienceRoot: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: window.innerWidth - 50,
  },
  eductionIcon: {
    width: '100%',
    height: '100%',
  },
  errorSection: {
    fontSize: '2em',
    color: theme.palette.error.main,
  },
}));

// Experience.propTypes = {};

export default Experience;
