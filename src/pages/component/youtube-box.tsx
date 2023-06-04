import React, { useState, useRef } from 'react';
import { PlayCircleOutline } from '@mui/icons-material';
import { Button, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import YouTube from 'react-youtube'; // Install 'react-youtube' package';

import LinearProgress from '@mui/material/LinearProgress';
import { log } from 'console';

interface Song {
  id: number;
  title: string;
  artist: string;
  videoId: string;
}

interface SongListProps {
  songs: Song[];
}

const SongList: React.FC<SongListProps> = ({ songs }) => {
  const [currentVideoId, setCurrentVideoId] = useState<string | undefined>(undefined);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isReady, setIsReady] = useState<boolean>(false);
  const playerRef = useRef<YouTube | null>(null);

  const playVideo = (videoId: string) => {
    if (currentVideoId === videoId) {
      // Clicked on the same video, do nothing
      return;
    }

    if (currentVideoId) {
      // Stop the currently playing video
      playerRef.current?.internalPlayer?.stopVideo();
    }

    setCurrentVideoId(videoId);
    playerRef.current?.internalPlayer?.playVideo(); // Autoplay the video
  };

  const stopVideo = () => {
    setCurrentVideoId(undefined);
    playerRef.current?.internalPlayer?.stopVideo(); // Stop the video
  };

  const updateCurrentTime = () => {
    setCurrentTime(playerRef.current?.internalPlayer?.getCurrentTime() || 0);
  };

  const handleReady = (event: any) => {
    setIsReady(true);
    playerRef.current = event.target;
    setDuration(event.target.getDuration());
  };


  const opts: any = {
    height: '0',
    width: '0',
    playerVars: {
      autoplay: 1, // Autoplay the video
      controls: 0, // Hide video controls
      showinfo: 0, // Hide video title and player actions
      modestbranding: 1, // Hide YouTube logo
      playsinline: 1, // Play the video inline on mobile devices
    },
  };

  return (
    <div>
      <List>
        {songs.map((song) => (
          <ListItemButton selected={song.videoId === currentVideoId} key={song.id} sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }} onClick={() => playVideo(song.videoId)}>
            <ListItemIcon>
              <PlayCircleOutline color="primary" fontSize="large" />
            </ListItemIcon>
            <ListItemText primary={song.title} secondary={song.artist} />
          </ListItemButton>
        ))}
      </List>
      <Divider />
      <YouTube
        videoId={currentVideoId || ''}
        opts={opts}
        onEnd={stopVideo}
        onPlay={updateCurrentTime}
        onReady={handleReady}
      />
    </div>
  );
};

export default SongList;
