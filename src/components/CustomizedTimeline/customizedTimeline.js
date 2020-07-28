import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Typography, Paper, Icon, Slide } from '@material-ui/core';
import PropTypes from 'prop-types';

const CustomizedTimeline = (props) => {
  const classes = useStyles();
  const { list: timeline, align = 'left' } = props;
  return (
    <Timeline align={align}>
      {timeline.map((item) => {
        return (
          <TimelineItem style={{ marginBottom: '2%' }}>
            <Slide
              direction="right"
              in
              timeout={{ enter: 1000 }}
              mountOnEnter
              unmountOnExit
            >
              <TimelineOppositeContent>
                <div>
                  <Typography variant="h5" color="textSecondary">
                    {item.institute}
                  </Typography>
                  <Typography variant="h6" color="textSecondary">
                    {item.duration}
                  </Typography>
                </div>
              </TimelineOppositeContent>
            </Slide>
            <Slide
              direction="down"
              in
              timeout={{ enter: 800 }}
              mountOnEnter
              unmountOnExit
            >
              <TimelineSeparator>
                <TimelineDot color={item.iconColor || 'primary'}>
                  <Icon style={{ fontSize: 40 }}>{item.icon}</Icon>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
            </Slide>
            <Slide
              direction="left"
              in
              timeout={{ enter: 1200 }}
              mountOnEnter
              unmountOnExit
            >
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant="h6" component="h1">
                    {item.degree}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    component="h1"
                    style={{ marginBottom: '10px' }}
                  >
                    {item.stream}
                  </Typography>
                  <Typography>{item.description}</Typography>
                </Paper>
              </TimelineContent>
            </Slide>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

CustomizedTimeline.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  align: PropTypes.oneOf(['left', 'right', 'alternate']),
};

CustomizedTimeline.defaultProps = {
  align: 'left',
};

export default CustomizedTimeline;
