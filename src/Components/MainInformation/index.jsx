import { Typography, Stack } from "@mui/material";
import React from "react";


const MainInformation = (props) => {
  const { userState } = props;
  const {
    name,
    login,
    created_at
  } = userState;
  return (
    <>
      <Stack>
        <Typography>{name}</Typography>
        <Typography>{created_at}</Typography>
      </Stack>
      <Typography>{login}</Typography>
    </>
  )
}

export { MainInformation };
