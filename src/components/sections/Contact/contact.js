import React from 'react';
import {
  Slide,
  Paper,
  Icon,
  makeStyles,
  Typography,
  TextField,
  useMediaQuery,
  Button,
  Link,
} from '@material-ui/core';
import classnames from 'classnames';
import { blue } from '@material-ui/core/colors';
import Tooltip from '@material-ui/core/Tooltip';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import PropTypes from 'prop-types';

const personalContactInfo = [
  {
    id: 'website',
    icon: 'language',
    text: 'www.knowhimanshu.in',
    href: 'http://www.knowhimanshu.in',
  },
  {
    id: 'address',
    icon: 'home',
    text: 'Doddanekundi, Bangalore, India 560037',
  },
  {
    id: 'phone',
    icon: 'phone',
    text: '+91 9933233315',
    href: 'tel://9933233315',
  },
];

const contactFormFields = [
  {
    id: 'name',
    label: 'Name',
    required: true,
  },
  {
    id: 'email',
    label: 'Email',
    required: true,
  },
  {
    id: 'subject',
    label: 'Subject',
    required: true,
  },
  {
    id: 'message',
    label: 'Message',
    required: false,
    multiline: true,
    rows: 4,
  },
];

const socialConnectionList = [
  {
    id: 'github',
    icon: <GitHubIcon fontSize="large" />,
    link: 'https://github.com/pellucidhims',
    label: 'View my project repository',
  },
  {
    id: 'instagram',
    icon: <InstagramIcon fontSize="large" />,
    link: 'https://www.instagram.com/pellucidhimanshu/',
    label: 'Head towards my instagram',
  },
  {
    id: 'linkedin',
    icon: <LinkedInIcon fontSize="large" />,
    link: 'https://in.linkedin.com/in/pellucidhimanshu',
    label: 'Lets connect over LinkedIn',
  },
  {
    id: 'twitter',
    icon: <TwitterIcon fontSize="large" />,
    link: 'https://twitter.com/pelucidhimanshu',
    label: 'Tweet to me @pelucidhimanshu',
  },
];

const SocialLink = (props) => {
  const classes = useStyles();
  const { label, link, icon } = props;
  return (
    <Tooltip title={label} arrow placement="top" classes={classes.tooltip}>
      <Link
        href={link}
        target="__blank"
        key={link}
        className={classes.socialLinkItemRoot}
      >
        {icon}
        <span style={{ fontSize: '16px', marginLeft: '10px' }}>{link}</span>
      </Link>
    </Tooltip>
  );
};

SocialLink.propTypes = {
  label: PropTypes.string,
  link: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

SocialLink.defaultProps = {
  label: '',
};

const Contact = () => {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:900px)');
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Slide
          direction="right"
          in
          timeout={{ enter: 1000 }}
          mountOnEnter
          unmountOnExit
        >
          <Paper elevation={2} style={{ padding: '1%' }}>
            <Typography variant="h5" className={classes.socialConnectionHeader}>
              Connect with me socially
            </Typography>
            <div className={classes.socialConnectionContainer}>
              {socialConnectionList.map((social) => {
                return (
                  <SocialLink
                    label={social.label}
                    link={social.link}
                    icon={social.icon}
                    key={social.label}
                  />
                );
              })}
            </div>
          </Paper>
        </Slide>
      </div>
      <div className={classnames(classes.wrapper, classes.separator)}>
        <span
          style={{ fontSize: '20px', margin: '0px 10px', fontWeight: 'bold' }}
        >
          OR
        </span>
      </div>
      <div className={classes.wrapper}>
        <Slide
          direction="up"
          in
          timeout={{ enter: 1000 }}
          mountOnEnter
          unmountOnExit
        >
          <Paper elevation={2} style={{ padding: '1%' }}>
            <Typography variant="h5" className={classes.socialConnectionHeader}>
              Drop me an email
            </Typography>
            <div
              className={classnames(classes.paper, {
                [classes.verticalPaper]: !matches,
              })}
            >
              <div className={classes.personalContactInfoRoot}>
                {personalContactInfo.map((info) => {
                  return (
                    <div className={classes.personalContactInnerDiv}>
                      <div className={classes.personalContactIcon}>
                        <Icon fontSize="large">{info.icon}</Icon>
                      </div>
                      <div className={classes.personalContactText}>
                        {info.href ? (
                          <a href={info.href} className={classes.linkTextStyle}>
                            <Typography variant="subtitle1">
                              {info.text}
                            </Typography>
                          </a>
                        ) : (
                          <Typography variant="subtitle1">
                            {info.text}
                          </Typography>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className={classes.contactFormInnerDiv}>
                <form
                  className={classes.formRoot}
                  noValidate
                  autoComplete="off"
                >
                  {contactFormFields.map((field) => {
                    return (
                      <TextField
                        key={field.id}
                        id={`${field.id}-outline`}
                        label={field.label}
                        variant="outlined"
                        multiline={!!field.multiline}
                        rows={field.rows || 1}
                        required={!!field.required}
                        style={{ minWidth: '250px' }}
                      />
                    );
                  })}
                </form>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.formSubmitBtn}
                >
                  Submit
                </Button>
              </div>
            </div>
          </Paper>
        </Slide>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  wrapper: {
    width: '100%',
    marginBottom: '2%',
  },
  separator: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    padding: '1%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  verticalPaper: {
    flexDirection: 'column',
  },
  socialConnectionHeader: {
    marginBottom: '10px',
    color: theme.palette.secondary.main,
  },
  socialConnectionContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  socialLinkItemRoot: {
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    transition: 'all 0.25s linear',
    '&:hover': {
      transform: 'scale(1.1)',
      letterSpacing: '1px',
      textDecoration: 'none',
    },
  },
  tooltip: {
    backgroundColor: theme.palette.primary.dark,
    // color: theme.palette.primary.contrastText,
    // fontSize:'18px'
  },
  personalContactInfoRoot: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '50%',
  },
  personalContactInnerDiv: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexGrow: 1,
    width: '50%',
    minWidth: '300px',
    padding: '10px',
  },
  contactFormInnerDiv: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '50%',
    padding: '10px',
  },
  personalContactIcon: {
    padding: '20px',
    background: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    borderRadius: '30px',
  },
  personalContactText: {
    width: '250px',
    marginLeft: '10px',
  },
  formRoot: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    '& > *': {
      margin: theme.spacing(1),
      width: '50%',
    },
  },
  formSubmitBtn: {
    width: '50%',
  },
  linkTextStyle: {
    color: blue.A400,
    textDecoration: 'none',
  },
}));

// Contact.propTypes = {};

export default Contact;
