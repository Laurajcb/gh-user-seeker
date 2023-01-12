import React from "react";
import { Stack, Typography } from "@mui/material";
import { PaperInfo } from '../../Components/PaperInfo';
import { LocationInfo } from "../../Components/LocationInfo";

const Description = (props) => {
  const { userState } = props;
  const { bio } = userState
  return (
    <>
      <Stack>
        {bio != null
          ? <Typography>{bio}</Typography>
          : <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
        }
      </Stack>
      <PaperInfo  userState={userState}/>
      <LocationInfo  userState={userState}/>
    </>
  )

}

export { Description }