import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard, PlaylistCard } from "./";

const Videos = ({ videos, justifyContent }) => {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent={justifyContent}
      gap={2}
    >
      {videos.map((item, index) => {
        return (
          <Box key={index}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
            {item.id.playlistId && <PlaylistCard playlistDetail={item} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
