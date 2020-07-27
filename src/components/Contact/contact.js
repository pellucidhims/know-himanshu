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
} from '@material-ui/core';
import classnames from 'classnames';
import { blue } from '@material-ui/core/colors';

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

const Contact = () => {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:900px)');
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Slide
          direction="up"
          in
          timeout={{ enter: 1000 }}
          mountOnEnter
          unmountOnExit
        >
          <Paper
            elevation={2}
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
                        <Typography variant="subtitle1">{info.text}</Typography>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={classes.contactFormInnerDiv}>
              <form className={classes.formRoot} noValidate autoComplete="off">
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
  },
  paper: {
    padding: '1%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  verticalPaper: {
    flexDirection: 'column',
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
