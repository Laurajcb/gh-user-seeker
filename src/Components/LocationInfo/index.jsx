import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';

function LocationInfo(props) {
  const { userState } = props;
  const {
    location,
    twitter_username,
    blog,
    company
  } = userState;
  return (
    <Grid container>
      <Grid item xs={6}>
        <Stack>
          <LocationOnIcon />
          <Typography>{location}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <TwitterIcon />
          {twitter_username !== null
            ? <Typography>{`@${twitter_username}`}</Typography>
            : <Typography>Not Available</Typography>
          }

        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <LanguageIcon />
          {blog !== null
            ? <Typography>{blog}</Typography>
            : <Typography>Not Available</Typography>
          }
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <BusinessIcon />
          {company !== null
            ? <Typography>{company}</Typography>
            : <Typography>Not Available</Typography>
          }
        </Stack>
      </Grid>
    </Grid>
  )
}

export { LocationInfo };