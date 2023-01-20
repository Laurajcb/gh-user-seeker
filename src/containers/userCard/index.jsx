import React from "react";
import { CardMedia, Grid } from "@mui/material";
import { MainInformation } from "../../Components/MainInformation";
import { Description } from "../Description";
import { Stack } from "@mui/system";
import { makeStyles } from '@material-ui/core';

const UserCard = (props) => {
  const { userState } = props;
  const { avatar_url } = userState;

  const useStyles = makeStyles((theme) => ({
    gridContainer: {
      marginTop: '15px',
      spacing: '2',
      [theme.breakpoints.down('md')]: {
        marginTop: '12px',
      }
    },
    cardMediaImg:{
      borderRadius: '50%',
      marginLeft: '5px',
      marginTop: '10px',
      
      [theme.breakpoints.down('md')]: {
        width: '80px',
      }
    }

  }))

  const classes = useStyles();
  return (
    <Grid
      className={classes.gridContainer}
      container
    >
      <Grid item xs={3}>
        <CardMedia
          className={classes.cardMediaImg}
          component='img'
          alt="GitHub User"
          image={avatar_url}
        />
      </Grid>
      <Grid item xs={9}>
        <Stack
          direction="column"
          spacing={1}
          sx={{
            margin: '30px'
          }}
        >
          <MainInformation userState={userState} />
          <Description userState={userState} />
        </Stack>
      </Grid>
    </Grid>
  )
}


export { UserCard };