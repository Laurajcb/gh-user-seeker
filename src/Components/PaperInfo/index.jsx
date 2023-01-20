import React from "react";
import { Paper, Stack, Typography } from "@mui/material";
import { makeStyles } from '@material-ui/core';


const PaperInfo = (props) => {
  const { userState } = props
  const {
    public_repos,
    followers,
    following
  } = userState;

  const useStyles = makeStyles((theme) => ({
    stackPaper: {
      justifyContent: 'space-evenly',
      spacing: '3',
      margin: '20px',
      [theme.breakpoints.down('sm')]: { 
        flexDirection: 'row',
      }
    }
  }))
  const classes = useStyles();

  return (
    <Paper elevation={3}>
      <Stack
        className={classes.stackPaper} flexDirection={{ sm: 'column', md: 'row' }}
      >
        <Stack flexDirection={{ xs: 'row ', md: 'column' }} >
          <Typography variant="h5"
            sx={{
              fontSize: {
                xs: "18px",
                sm: "26px",
              },
              marginRight: '12px',
            }}
    
          >
            Repositories</Typography>
          <Typography variant="h6"
            sx={{
              fontSize: {
                xs: "16px",
                sm: "24px",
              },
            }}
          >
            {public_repos}
          </Typography>
        </Stack>
        <Stack  flexDirection={{ xs: 'row ', md: 'column' }}>
          <Typography variant="h5"
            sx={{
              fontSize: {
                xs: "18px",
                sm: "26px",
              },
              marginRight: '12px',
            }}
          >
            Followers
          </Typography>
          <Typography variant="h6"
            sx={{
              fontSize: {
                xs: "16px",
                sm: "24px",
              },
            }}
          >
            {followers}
          </Typography>
        </Stack>
        <Stack flexDirection={{ xs: 'row ', md: 'column' }}>
          <Typography variant="h5"
            sx={{
              fontSize: {
                xs: "18px",
                sm: "26px",
              },
              marginRight: '12px',
            }}
          >
            Following
          </Typography>
          <Typography variant="h6"
            sx={{
              fontSize: {
                xs: "16px",
                sm: "24px",
              },
            }}
          >
            {following}
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  )
}

export { PaperInfo };
