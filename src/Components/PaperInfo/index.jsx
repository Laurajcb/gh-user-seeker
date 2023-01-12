import React from "react";
import { Paper, Stack, Typography } from "@mui/material";


const PaperInfo = (props) => {
  const { userState } = props
  const {
    public_repos,
    followers,
    following
  } = userState;
  return (
    <Paper elevation={3}>
      <Stack >
        <Stack>
          <Typography>Repositories</Typography>
          <Typography>{public_repos}</Typography>
        </Stack>
        <Stack>
          <Typography>Followers</Typography>
          <Typography>{followers}</Typography>
        </Stack>
        <Stack>
          <Typography>Following</Typography>
          <Typography>{following}</Typography>
        </Stack>
      </Stack>
    </Paper>
  )
}

export { PaperInfo };
