import React, { useEffect, useState } from 'react';
import {
  makeStyles,
  Typography,
  Chip,
  CircularProgress,
  TextField,
  Button,
} from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import DraftsIcon from '@material-ui/icons/Drafts';

import { api } from '../../utils';

const AdminPanel = () => {
  const classes = useStyles();
  const [visitors, setVisitors] = useState([]);
  const [state, setState] = useState({
    userName: '',
    password: '',
    prompt: '',
    login: false,
  });

  const { login } = state;

  useEffect(() => {
    if (login) {
      api
        .get('visitor/getMessages')
        .then((response) => {
          setVisitors(response.data.visitorMessages);
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(
            'An error occured while fetching messages: ',
            error.message
          );
        });
    }
  }, [login]);

  const handleChange = (e, fieldName) => {
    e.persist();
    setState({
      ...state,
      [fieldName]: e.target.value,
      prompt: '',
    });
  };

  const handleLogin = () => {
    if (!state.userName.trim() || !state.password.trim()) {
      setState({
        ...state,
        prompt: 'Username and password is required for login',
      });
    } else {
      const loginPayload = {
        userName: state.userName.trim(),
        password: state.password.trim(),
      };
      api
        .post('/admin/login', loginPayload)
        .then((response) => {
          if (response.status === 200) {
            setState({ ...state, login: true });
          }
        })
        .catch((error) => {
          if (error)
            setState({
              ...state,
              prompt: `Something went wrong loggin you in: ${error.message}`,
            });
        });
    }
  };

  if (!visitors || !visitors.length) {
    if (login) {
      return (
        <div className={classes.loaderRoot}>
          <CircularProgress color="primary" size={20} />
          <span>Loading messages...</span>
        </div>
      );
    }
    return (
      <div className={classes.loginRoot}>
        <Typography variant="h4" gutterBottom>
          Admin Login
        </Typography>
        <TextField
          key="userName"
          label="Username"
          variant="outlined"
          className={classes.textFieldRoot}
          onChange={(e) => handleChange(e, 'userName')}
          value={state.userName || ''}
        />
        <TextField
          key="password"
          label="Password"
          variant="outlined"
          className={classes.textFieldRoot}
          onChange={(e) => handleChange(e, 'password')}
          type="password"
          value={state.password || ''}
        />
        {!!state.prompt && <p className={classes.promptRoot}>{state.prompt}</p>}
        <Button
          variant="contained"
          color="primary"
          className={classes.formSubmitBtn}
          onClick={handleLogin}
        >
          Login
        </Button>
      </div>
    );
  }

  return (
    <div>
      {visitors.map((visitor) => {
        return (
          <div className={classes.visitorCardRoot} key={visitor.email}>
            <div className={classes.visitorCardHeaderRoot}>
              <Typography variant="h4">{visitor.name}</Typography>
              <Typography variant="subtitle1">{visitor.email}</Typography>
            </div>
            {visitor.messages &&
              visitor.messages.length &&
              visitor.messages.map((message) => {
                return (
                  <div
                    className={classes.visitorCardContentRoot}
                    key={message.postedAt}
                  >
                    <div className={classes.visitorCardContentSubjectRoot}>
                      <Typography variant="h5">{message.subject}</Typography>
                      <Typography variant="body2">
                        {new Date(message.postedAt).toLocaleString()}
                      </Typography>
                      <span>
                        <Chip
                          variant={message.read ? 'outlined' : 'default'}
                          color={message.read ? 'primary' : 'secondary'}
                          size="small"
                          icon={message.read ? <DraftsIcon /> : <MailIcon />}
                          label={message.read ? 'Read' : 'Unread'}
                        />
                      </span>
                    </div>

                    <div className={classes.visitorCardContentMessageRoot}>
                      <Typography variant="body1">{message.message}</Typography>
                    </div>
                  </div>
                );
              })}
          </div>
        );
      })}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  loaderRoot: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '10px',
  },
  loginRoot: {
    padding: '20px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: '300px',
  },
  formSubmitBtn: {
    width: '20%',
  },
  promptRoot: {
    color: theme.palette.error.main,
    maxWidth: '250px',
    textAlign: 'center',
  },
  textFieldRoot: {
    minWidth: '250px',
    margin: '10px 10px',
  },
  visitorCardRoot: {
    borderRadius: '10px',
    boxShadow: '1px 5px 10px 10px gray',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    padding: '10px',
    margin: '20px',
  },
  visitorCardHeaderRoot: {
    padding: '10px',
    textAlign: 'left',
    marginBottom: '10px',
  },
  visitorCardContentRoot: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    margin: '10px 0px',
    paddingBottom: '15px',
    borderBottom: '1px solid gray',
    '&:last-child': {
      border: 'none',
    },
  },
  visitorCardContentSubjectRoot: {
    width: '50%',
  },
  visitorCardContentMessageRoot: {
    width: '50%',
  },
}));

export default AdminPanel;
