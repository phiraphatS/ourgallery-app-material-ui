import React, { useState } from 'react';
import YouTube from 'react-youtube';
import { Button, Grid, Typography } from '@mui/material';

interface YouTubePlayerProps {
  videoId: string;
}

const YouTubePlayerComponent: React.FC<YouTubePlayerProps> = ({ videoId }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Typography variant='h2'> กำลังทำน้า... </Typography>
    // <Grid container spacing={2}>
    //   <Grid item xs={12} sm={6} md={8} lg={9}>
    //     <YouTube style={{maxWidth: '100vw'}} videoId={videoId} opts={{ playerVars: { autoplay: isPlaying ? 1 : 0 } }} />
    //   </Grid>
    // </Grid>
  );
};

export default YouTubePlayerComponent;