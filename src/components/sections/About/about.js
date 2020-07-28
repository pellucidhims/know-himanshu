import React from 'react';
import {
  makeStyles,
  Slide,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import classnames from 'classnames';

const About = () => {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:900px)');
  return (
    <div className={classes.root}>
      {/* <Slide
                direction="left"
                in
                timeout={{ enter: 1500 }}
                mountOnEnter
                unmountOnExit
            > */}
      <div
        className={classnames(classes.aboutInfoIconRoot, {
          [classes.verticalAboutInfoIconRoot]: !matches,
        })}
      >
        <Slide
          direction="right"
          in
          timeout={{ enter: 1500 }}
          mountOnEnter
          unmountOnExit
        >
          <div className={classes.aboutTextRoot}>
            <Typography variant="h5" className={classes.headerRoot}>
              Who Am I?
            </Typography>
            <Typography variant="subtitle1" style={{ fontSize: '20px' }}>
              Professionally, I am an all round web developer.
              <br />
              <br />
              I am a senior developer with good knowledge of front-end as well
              as back-end technologies.
              <br />
              <br />I love structure and order and stand for quality. I love
              spending time on fixing little details and optimizing web apps.
              Also I like working in a team, owing to lively human interaction
              plus, one learns faster and much more. As the saying goes:{' '}
              <i>
                <q>two heads are better than one</q>.
              </i>
              <br />
              <br />
              Special mention to the fact that I also have relative experience
              of working with legacy technologies like Mainframes. And trust me
              when I say{' '}
              <b>
                <q>technology evolved for better</q>
              </b>{' '}
              from a developers point of view!
              <br />
              <br />
              I also like to support local businesses and as a result, whenever
              possible, try to build small utility web and mobile apps for them.
              <br />
              <br />
              In my free time I like to read informative blogs, scroll through a
              lot of QA&apos;s on Quora, listen to soothing music and sketching.
            </Typography>
          </div>
        </Slide>
        <Slide
          direction="left"
          in
          timeout={{ enter: 1700 }}
          mountOnEnter
          unmountOnExit
        >
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/aboutIcon.png`}
              className={classnames(classes.aboutIcon, {
                [classes.verticalAboutIcon]: !matches,
              })}
              alt="about"
            />
          </div>
        </Slide>
      </div>
      {/* </Slide> */}
    </div>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
  headerRoot: {
    fontWeight: 'bold',
    marginBottom: '1%',
  },
  aboutInfoIconRoot: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  verticalAboutInfoIconRoot: {
    flexDirection: 'column',
  },
  aboutTextRoot: {
    margin: '2% 0px 2% 0px',
  },
  aboutIcon: {
    width: window.innerWidth / 3,
    height: window.innerHeight / 1.5,
    borderRadius: '30px',
  },
  verticalAboutIcon: {
    width: window.innerWidth - 50,
  },
}));

export default About;
