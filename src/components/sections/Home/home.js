import React, { useState, useEffect, useRef } from 'react';
import {
  makeStyles,
  Slide,
  Button,
  Typography,
  Paper,
  useMediaQuery,
} from '@material-ui/core';
import CloudDownload from '@material-ui/icons/CloudDownload';
import classnames from 'classnames';

const colorArr = [
  '#7C4DFF',
  '#009688',
  '#673AB7',
  '#CDDC39',
  '#283593',
  '#ffb300',
];

const CHAR_DURATION = 150; // in miliseconds
const TEXT_DURATION = 1500;
const CURSOR_BLINK_DELAY = 250;

const INTRO_TEXT = [
  "I'm Himanshu",
  'Firstly, thank you for heading over here',
  "I'm a Fullstack developer by profession",
  'Since you have already made till here..',
  'Do take some time to explore my profile',
  'I would love to hear from you :)',
];

const Home = () => {
  const classes = useStyles();
  const phRefString = useRef('');
  const phStringIdx = useRef(0);
  const phColorIdx = useRef(0);
  const phInterval = useRef(undefined);
  const phTimeOut = useRef(undefined);
  const phCursorRef = useRef(undefined);

  const [placeholderText, setPlaceholderText] = useState('');
  const matches = useMediaQuery('(min-width:900px)');

  useEffect(() => {
    startNewInterval();
    const phCursorInterval = setInterval(() => {
      if (+phCursorRef.current.style.opacity) {
        phCursorRef.current.style.opacity = 0;
      } else {
        phCursorRef.current.style.opacity = 1;
      }
    }, CURSOR_BLINK_DELAY);
    return () => {
      if (phInterval.current) clearInterval(phInterval.current);
      if (phTimeOut.current) clearTimeout(phTimeOut.current);
      clearInterval(phCursorInterval);
    };
  }, []); //eslint-disable-line

  const initPhInterval = () => {
    return setInterval(() => {
      const currPhString = phRefString.current;
      let currIndex = phStringIdx.current;

      const currPhStrinLength = currPhString.length;
      let newPhString = INTRO_TEXT[currIndex].substring(0, 1);
      if (currPhStrinLength < INTRO_TEXT[currIndex].length) {
        newPhString = INTRO_TEXT[currIndex].substring(0, currPhStrinLength + 1);
        phRefString.current = newPhString;
        if (currPhStrinLength === INTRO_TEXT[currIndex].length - 1)
          setPlaceholderText(`${newPhString}.`);
        else {
          setPlaceholderText(`${newPhString}`);
        }
      } else {
        startNewInterval();
        if (currIndex < INTRO_TEXT.length - 1) {
          currIndex += 1;
          let randNum = phColorIdx.current;
          while (randNum === phColorIdx.current) {
            randNum = Math.floor(Math.random() * (colorArr.length - 1) + 1);
          }
          phColorIdx.current = randNum;
        } else {
          currIndex = 0;
        }
        phStringIdx.current = currIndex;
        phRefString.current = newPhString;
      }
    }, CHAR_DURATION);
  };

  const startNewInterval = () => {
    if (phInterval.current) {
      clearInterval(phInterval.current);
    }
    phTimeOut.current = setTimeout(() => {
      phInterval.current = initPhInterval();
    }, TEXT_DURATION);
  };

  return (
    <div className={classes.carouselContainerStyle}>
      <div className={classes.wrapper}>
        <Slide
          direction="down"
          in
          timeout={{ enter: 1000 }}
          mountOnEnter
          unmountOnExit
        >
          <Paper elevation={2} className={classes.paper}>
            <div
              className={classnames(classes.placeholderImageRoot, {
                [classes.verticalPlaceholderImageRoot]: !matches,
              })}
            >
              <div className={classes.downloadCvRoot}>
                <div>
                  <Typography
                    variant="h2"
                    style={{ fontWeight: 'bold', marginBottom: '1em' }}
                  >
                    <span className={classes.placeholderHeaderStyle}>Hey,</span>
                    <br />
                    <span style={{ color: colorArr[phColorIdx.current] }}>
                      {placeholderText}
                      <span ref={phCursorRef}>|</span>
                    </span>
                  </Typography>
                </div>
              </div>
              <div style={{ position: 'relative' }}>
                <img
                  src={`${process.env.PUBLIC_URL}/displayProfilePicture.jpg`}
                  className={classnames(classes.img, {
                    [classes.verticalImg]: !matches,
                  })}
                  alt="profile"
                />
                <div
                  style={{ position: 'absolute', bottom: '5%', right: '25%' }}
                >
                  <a
                    href={`${process.env.PUBLIC_URL}/HimanshuResume.pdf`}
                    style={{ textDecoration: 'none' }}
                    download={`Himanshu (7 Years, Walmart) - ${new Date().toLocaleDateString()}.pdf`}
                  >
                    <Button
                      variant="contained"
                      color="secondary"
                      endIcon={<CloudDownload style={{ fontSize: 30 }} />}
                      className={classes.downloadCvBtnStyle}
                    >
                      Download CV
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </Paper>
        </Slide>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  carouselContainerStyle: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  wrapper: {
    width: '100%',
  },
  paper: {
    borderRadius: '30px',
  },
  placeholderImageRoot: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '1%',
  },
  verticalPlaceholderImageRoot: {
    flexDirection: 'column',
  },
  img: {
    width: window.innerWidth / 3,
    height: window.innerHeight - 150,
    borderRadius: '30px',
    objectFit: 'cover',
  },
  verticalImg: {
    width: window.innerWidth - 50,
  },
  placeholderHeaderStyle: {
    color: theme.palette.secondary.main,
  },
  downloadCvRoot: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexGrow: 1,
    margin: '20px 0px',
    height: window.innerHeight / 2,
    // width: window.innerWidth*0.7,
  },
  downloadCvBtnStyle: {
    padding: '10px',
    fontSize: '20px',
  },
}));

export default Home;
