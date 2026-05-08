import React, { useState } from 'react';
import { IconButton, Stack, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@material-ui/core';

const Searcher = (props) => {
  // eslint-disable-next-line react/prop-types
  const { setInputUser } = props;
  const [valueInput, setValueInput] = useState('');

  const onSearchValueChange = (event) => {
    const inputValue = event.target.value;
    setValueInput(inputValue);
  }

  const handleSubmit = () => {
    setInputUser(valueInput);
  }

  const handleKeyDown = (event) => {
    if (event.code === "Enter"){
      handleSubmit()
    }
  }

  const useStyles = makeStyles((theme) => ({
    stack: {
      width: '80%',
      [theme.breakpoints.down('sm')]: {
        minWidth: '340px',
        marginLeft: '-5px',
        width: '90%',
      },
    },
    textField: {
      [theme.breakpoints.down('md')]: {
        marginTop: '20px',
        width: '100%',
        marginLeft: '-17px',
      },
    }
  }));

  const classes = useStyles();

  return (
    <Stack
      className={classes.stack}
      direction='row'
    >
      <TextField
        className={classes.textField}
        id='outlined-basic'
        label='GitHub User'
        variant='outlined'
        placeholder='OctoCat'
        size='small'
        value={valueInput}
        onChange={onSearchValueChange}
        onKeyDown={handleKeyDown}
        sx={{
          width: '90%',
        }}
      />
      <IconButton
        onClick={handleSubmit}
        size='small'
        sx={{
          left: '-45px',
        }}
      >
        <SearchIcon />
      </IconButton>
    </Stack >
  )
}

export { Searcher };
