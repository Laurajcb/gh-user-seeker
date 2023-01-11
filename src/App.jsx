import React, { useState } from "react";
import Container from '@mui/material/Container';
import { Searcher } from "./Components/Searcher";

const App = () => {
  const [inputUser, setInputUser] = useState('Octocat');
  const [userState, setUserState] = useState('inputUser');
  console.log('input user', inputUser);


  return (
    <Container sx={{
      background: 'whitesmoke',
      width: '80vw',
      height: '500px',
      borderRadius: '16px',
      marginTop: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <Searcher inputUser={inputUser} setInputUser={setInputUser}/>
    </Container>
  )
};

export default App;
