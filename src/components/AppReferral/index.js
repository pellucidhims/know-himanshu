import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import makeStyles from '@material-ui/core/styles/makeStyles';

import { api } from '../../utils';
import { apiLoadStatus } from '../../constants';

const { IDLE, LOADING, SUCCESS, FAIL } = apiLoadStatus;

const useStyles = makeStyles((theme) => ({
  referralRoot: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    textAlign: 'center',
    gap: '20px',
    '&:*': {
      margin: '10px 0px',
    },
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
  referralListRoot: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
  imageList: {
    '&::-webkit-scrollbar': {
      height: '5px',
      borderRadius: '50px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.primary.main,
      borderRadius: '50px',
    },
  },
  singleLineList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  imageListItem: {
    height: '200px',
    width: '300px',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  listItemRoot: {
    margin: '10px',
  },
  errorSection: {
    fontSize: '2em',
    color: theme.palette.error.main,
  },
}));

const RenderReferral = ({
  referralList,
  handleCopyReferral,
  singleLineList,
  cols,
}) => {
  const classes = useStyles();
  return (
    <ImageList
      rowHeight={200}
      cols={cols}
      className={`${classes.imageList} ${
        singleLineList && classes.singleLineList
      }`}
    >
      {referralList.map((referral) => (
        <ImageListItem
          key={referral.id}
          cols={referral.cols || 1}
          className={classes.imageListItem}
        >
          <img src={referral.logo} alt={referral.id} loading="lazy" />
          <ImageListItemBar
            title={referral.code}
            actionIcon={
              <IconButton
                aria-label={`copy ${referral.link} code`}
                className={classes.icon}
              >
                <FileCopyOutlinedIcon />
              </IconButton>
            }
            onClick={() => handleCopyReferral(referral)}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

RenderReferral.defaultProps = {
  referralList: [],
  handleCopyReferral: () => {},
  singleLineList: false,
  cols: 5,
};

RenderReferral.propTypes = {
  referralList: PropTypes.arrayOf(PropTypes.object),
  handleCopyReferral: PropTypes.func,
  singleLineList: PropTypes.bool,
  cols: PropTypes.number,
};

const AppReferral = ({ singleLineList, cols }) => {
  const classes = useStyles();
  const [referral, setReferral] = useState([]);
  const [isCodeCopied, setIsCodeCopied] = useState(false);
  const [indicator, setIndicator] = useState({ status: IDLE, message: '' });

  useEffect(() => {
    setIndicator({
      status: LOADING,
      message: 'Fetching referral codes...',
    });
    api
      .get('resource?type=REFERRAL')
      .then((response) => {
        setIndicator({
          status: SUCCESS,
          message: '',
        });
        setReferral(response.data.content);
      })
      .catch((error) => {
        setIndicator({
          status: FAIL,
          message: 'Failed to fetch referral codes',
        });
        // eslint-disable-next-line
        console.error(
          'An error occured while fetching referrals: ',
          error.message
        );
      });
  }, []);

  const handleCopyReferral = async (referralObject) => {
    try {
      await navigator.clipboard.writeText(referralObject.code);
      setIsCodeCopied(true);
      if (referralObject.link) {
        setTimeout(
          () =>
            window.open(referralObject.link, '_blank', 'noopener,noreferrer'),
          2000
        );
      }
    } catch (err) {
      console.error('Failed to copy: ', err); // eslint-disable-line
    }
  };

  const handleCloseSnackbar = () => {
    setIsCodeCopied(false);
  };

  if ([LOADING, FAIL].includes(indicator.status)) {
    return (
      <div className={classes.referralRoot}>
        <span className={classes.errorSection}>{indicator.message}</span>
      </div>
    );
  }

  return (
    <div>
      <div className={classes.root}>
        <Typography variant="h5" component="h2">
          Referral Codes
        </Typography>
        <div className={classes.referralListRoot}>
          {referral.length ? (
            <RenderReferral
              referralList={referral}
              handleCopyReferral={handleCopyReferral}
              singleLineList={singleLineList}
              cols={cols}
            />
          ) : (
            <div>No referral codes available</div>
          )}
        </div>
        <div>
          <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={isCodeCopied}
            autoHideDuration={3000}
            onClose={handleCloseSnackbar}
          >
            <Alert onClose={handleCloseSnackbar} severity="success">
              Referral code copied to clipboard. Navigating you to app...
            </Alert>
          </Snackbar>
        </div>
      </div>
    </div>
  );
};

AppReferral.defaultProps = {
  singleLineList: false,
  cols: 5,
};

AppReferral.propTypes = {
  singleLineList: PropTypes.bool,
  cols: PropTypes.number,
};

export default AppReferral;
