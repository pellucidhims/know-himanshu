import React, { useReducer } from 'react';
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
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';

import { api } from '../../../utils';
import VisiblityWrapper from '../../VisiblityWrapper/visiblityWrapper';

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

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
    type: 'string',
    min: 3,
    max: 30,
  },
  {
    id: 'email',
    label: 'Email',
    required: true,
    type: 'email',
    min: 5,
    max: 100,
  },
  {
    id: 'subject',
    label: 'Subject',
    required: true,
    type: 'string',
    min: 5,
    max: 250,
  },
  {
    id: 'message',
    label: 'Message',
    required: false,
    multiline: true,
    rows: 4,
    type: 'string',
    max: 500,
  },
];

const socialConnectionList = [
  {
    id: 'github',
    icon: <GitHubIcon fontSize="large" />,
    link: 'https://github.com/pellucidhims',
    label: '@pellucidhims',
    title: 'View Project Repository',
  },
  {
    id: 'instagram',
    icon: <InstagramIcon fontSize="large" />,
    link: 'https://www.instagram.com/pellucidhimanshu/',
    label: '@pellucidhimanshu',
    title: 'Instantly connect on instagram',
  },
  {
    id: 'linkedin',
    icon: <LinkedInIcon fontSize="large" />,
    link: 'https://in.linkedin.com/in/pellucidhimanshu',
    label: '@pellucidhimanshu',
    title: 'View LinkedIn Profile',
  },
  {
    id: 'twitter',
    icon: <TwitterIcon fontSize="large" />,
    link: 'https://twitter.com/pelucidhimanshu',
    label: '@pelucidhimanshu',
    title: 'Tweet to me',
  },
];

const SocialLink = (props) => {
  const classes = useStyles();
  const { label, link, icon, title } = props;
  return (
    <Tooltip title={title} arrow placement="top" className={classes.tooltip}>
      <Link
        href={link}
        target="__blank"
        key={link}
        className={classes.socialLinkItemRoot}
      >
        {icon}
        <span style={{ fontSize: '16px', marginLeft: '10px' }}>{label}</span>
      </Link>
    </Tooltip>
  );
};

SocialLink.propTypes = {
  label: PropTypes.string,
  link: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string,
};

SocialLink.defaultProps = {
  label: '',
  title: '',
};

const initState = {
  promptMessage: '',
  loading: false,
};

const Contact = () => {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:900px)');
  const [state, dispatch] = useReducer(contactReducer, initState);

  const handleChange = (e, fieldName) => {
    dispatch({
      type: 'fieldUpdate',
      fieldName,
      value: e.target.value,
    });
    if (state.promptMessage)
      dispatch({
        type: 'fieldUpdate',
        fieldName: 'promptMessage',
        value: '',
      });
  };

  const getPayload = (formFields) => {
    const sanitizedPayload = {};
    formFields.forEach((field) => {
      sanitizedPayload[field.id] =
        typeof state[field.id] === 'string'
          ? state[field.id].trim()
          : state[field.id] || '';
      if (field.type === 'email') {
        sanitizedPayload[field.id] =
          sanitizedPayload[field.id].toLowerCase() || '';
      }
    });
    return sanitizedPayload;
  };

  const handleFormSubmit = (formFields = []) => {
    for (let i = 0; i < formFields.length; i += 1) {
      if (formFields[i].required) {
        const validRes = handleInputValidationOnBlur(formFields[i]);
        if (!validRes) return;
      }
    }
    const sanitizedPaylaod = getPayload(formFields);
    dispatch({
      type: 'fieldUpdate',
      fieldName: 'loading',
      value: true,
    });
    api
      .post('/visitor/postMessage', sanitizedPaylaod)
      .then((response) => {
        dispatch({
          type: 'reset',
          fieldName: '',
          value: '',
        });
        dispatch({
          type: 'prompt',
          fieldName: 'promptMessage',
          value: response.data.message,
        });
      })
      .catch((error) => {
        dispatch({
          type: 'fieldUpdate',
          fieldName: 'loading',
          value: false,
        });
        dispatch({
          type: 'prompt',
          fieldName: 'promptMessage',
          value: `An error occured posting message. ${error.message}`,
        });
      });
  };

  const validateInput = (field) => {
    let validationString;
    const currVal = state[field.id] && state[field.id].trim();
    if (field.required) {
      if (!currVal || currVal === '') {
        validationString = `${field.label} is required`;
      } else if (currVal.length < field.min || currVal.length > field.max) {
        validationString = `${field.label} can be ${field.min} to ${field.max} characters long`;
      } else if (field.type === 'email') {
        const validEmail = emailPattern.test(currVal);
        if (!validEmail) {
          validationString = `Please provide a valid ${field.label}`;
        }
      }
    }
    if (currVal && field.max && currVal.length > field.max) {
      validationString = `${field.label} can be ${field.max} characters long`;
    }
    return validationString;
  };

  const handleInputValidationOnBlur = (field) => {
    const validationString = validateInput(field);
    if (validationString) {
      dispatch({
        type: 'prompt',
        fieldName: `${field.id}-prompt`,
        value: validationString,
      });
      return false;
    }
    return true;
  };

  return (
    <VisiblityWrapper>
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
              <Typography
                variant="h5"
                className={classes.socialConnectionHeader}
              >
                Connect with me socially
              </Typography>
              <div className={classes.socialConnectionContainer}>
                {socialConnectionList.map((social) => {
                  return (
                    <SocialLink
                      label={social.label}
                      link={social.link}
                      icon={social.icon}
                      title={social.title}
                      key={social.title}
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
              <Typography
                variant="h5"
                className={classes.socialConnectionHeader}
              >
                Drop me a message
              </Typography>
              <div
                className={classnames(classes.paper, {
                  [classes.verticalPaper]: !matches,
                })}
              >
                <div className={classes.personalContactInfoRoot}>
                  {personalContactInfo.map((info) => {
                    return (
                      <div
                        className={classes.personalContactInnerDiv}
                        key={info.text}
                      >
                        <div className={classes.personalContactIcon}>
                          <Icon
                            fontSize="large"
                            className={classes.personalContactIconInner}
                          >
                            {info.icon}
                          </Icon>
                        </div>
                        <div className={classes.personalContactText}>
                          {info.href ? (
                            <a
                              href={info.href}
                              className={classes.linkTextStyle}
                            >
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
                          onChange={(e) => handleChange(e, field.id)}
                          value={state[field.id] || ''}
                          error={!!state[`${field.id}-prompt`]}
                          helperText={state[`${field.id}-prompt`]}
                          onBlur={() => handleInputValidationOnBlur(field)}
                        />
                      );
                    })}
                  </form>
                  {!!state.promptMessage && (
                    <p className={classes.promptMessageClass}>
                      {state.promptMessage}
                    </p>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.formSubmitBtn}
                    onClick={() => handleFormSubmit(contactFormFields)}
                    disabled={!!state.loading}
                  >
                    {state.loading ? (
                      <>
                        <CircularProgress color="primary" size={20} />
                        <p className={classes.loadingClass}>Submitting</p>
                      </>
                    ) : (
                      'Submit'
                    )}
                  </Button>
                </div>
              </div>
            </Paper>
          </Slide>
        </div>
      </div>
    </VisiblityWrapper>
  );
};

const contactReducer = (state = {}, action) => {
  switch (action.type) {
    case 'fieldUpdate': {
      return {
        ...state,
        [action.fieldName]: action.value,
        [`${action.fieldName}-prompt`]: '',
        promptMessage: '',
      };
    }
    case 'prompt': {
      return {
        ...state,
        [action.fieldName]: action.value,
      };
    }
    case 'reset': {
      return {
        ...initState,
      };
    }
    default:
      return state;
  }
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
  },
  verticalPaper: {
    flexDirection: 'column-reverse',
  },
  socialConnectionHeader: {
    marginBottom: '10px',
    color: theme.palette.secondary.dark,
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
    // backgroundColor: theme.palette.primary.dark,
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
    borderRadius: '20px',
    transition: 'transform 0.25s linear',
    '&:hover $personalContactIconInner': {
      transform: 'scale(1.4)',
    },
  },
  personalContactIconInner: {
    transition: 'transform 0.25s linear',
    transform: 'scale(1)',
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
  promptMessageClass: {
    padding: '10px',
    color: theme.palette.primary.main,
    maxWidth: '300px',
    textAlign: 'center',
  },
  loadingClass: {
    marginLeft: '10px',
  },
}));

// Contact.propTypes = {};

export default Contact;
