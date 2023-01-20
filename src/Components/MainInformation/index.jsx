import React from "react";
import { Typography, Stack } from "@mui/material";

const MainInformation = (props) => {
  // eslint-disable-next-line react/prop-types
  const { userState } = props;
  const {
    name,
    login,
    created_at
  } = userState;

  const date = new Date(created_at).toLocaleDateString('en-us');

  return (
    <>
      <Stack
        direction={{ sm: 'row', xs: 'column' }}
        sx={{ justifyContent: 'space-between' }}
      >
        <Typography variant="h4"
          sx={{
            fontSize: {
              xs: "16px",
              sm: "24px",
            },
          }}
        >
          {name}</Typography>
        <Typography variant="subtitle2">{date}</Typography>
      </Stack>
      <Typography 
      variant="caption"
      sx={{
        fontSize: {
          xs: "15px",
          sm: "12px",
        },
      }}
      >
        {`@${login}`}</Typography>
    </>
  )
}



export { MainInformation };
