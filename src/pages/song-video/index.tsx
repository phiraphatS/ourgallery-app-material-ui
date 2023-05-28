import { ReactElement } from "react";
import HideAppBar from "../component/app-bar";
import YouTubePlayerComponent from "../component/youtube-box";
import { Grid } from "@mui/material";

    const youtubeId = [

    ]

export default function YoutubeBox() {
  return (
    <Grid sx={{ flexGrow: 1, justifyContent: 'center', margin: 'auto', width: 'auto', gap: '2rem' }} container spacing={8}>
      <YouTubePlayerComponent videoId="sNQX8NQpB7Y" />
    </Grid>
  );
};

YoutubeBox.getLayout = function getLayout(page: ReactElement) {
    return (
        <HideAppBar>
            {page}
        </HideAppBar>
    )
};