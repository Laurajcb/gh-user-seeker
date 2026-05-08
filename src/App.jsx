import React, { useEffect, useState } from "react";
import Container from '@mui/material/Container';
import { Searcher } from "./Components/Searcher";
import { getGitHubUser } from './services/users';
import { UserCard } from "./containers/userCard";
import { makeStyles } from '@material-ui/core';


const App = () => {
  const [inputUser, setInputUser] = useState('Octocat');
  const [userState, setUserState] = useState('inputUser');
  const [notfound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const gettingUser = async (user) => {
    setLoading(true)

    try {
      const userResponse = await getGitHubUser(user)
      if (userState === 'octocat') {
        localStorage.setItem('octocat', userResponse)
      }

      if (userResponse.message === 'Not Found') {
        const { octocat } = localStorage;
        setInputUser(octocat);
        setNotFound(true)
      } else {
        setUserState(userResponse);
      }
    } catch {
      setError("Error al buscar el usuario, intenta de nuevo")
    } finally {
      setLoading(false)
    }

  }

  useEffect(() => {
    gettingUser(inputUser)
  }, [inputUser])


  const useStyles = makeStyles((theme) => ({
    container: {
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: 'whitesmoke',
      width: '80vw',
      height: '500px',
      borderRadius: '16px',
      marginTop: '40px',
      paddingTop: '20px',
      [theme.breakpoints.down('sm')]: {
        justifySelf: 'center',
        width: '90vw',
        height: '100%',
        padding: '50px',
        marginTop: '0px',
      },
    }
  }));
  const classes = useStyles();

  return (
    <Container
      className={classes.container}
    >
      <Searcher inputUser={inputUser} setInputUser={setInputUser} />
      {loading && <p>Searching...</p>}
      {error && <p>{error}</p>}
      <UserCard userState={userState} />
    </Container>
  )
};

export default App;
