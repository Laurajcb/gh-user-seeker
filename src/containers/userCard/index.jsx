import React from "react";
import { CardMedia, Grid } from "@mui/material";
import { MainInformation } from "../../Components/MainInformation";
import { Description } from "../Description";

const UserCard = (props) => {
  const { userState } = props;
  const { avatar_url } = userState;

  return (
    <Grid
      container
    >
      <Grid item xs={3}>
        <CardMedia
          component='img'
          alt="GitHub User"
          image={avatar_url}
        />
      </Grid>
      <Grid item xs={9}>
        <MainInformation userState={userState} />
      </Grid>
        <Description userState={userState}/>
    </Grid>
  )
}


export { UserCard };