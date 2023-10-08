import React from 'react'
import { Stack, Box } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

const Videos = ({ videos }) => {
    console.log(videos)
    return (
        <Stack direction="row" flexWrap="wrap" sx={{ justifyContent: { xs: 'center', md: 'start' } }} gap={2}>
            {videos.map((item, index) => {
                return (
                    <Box key={index}>
                        {item.id.videoId && <VideoCard video={item} />}
                        {item.id.channelId && <ChannelCard channelDetails={item} />}
                    </Box>)
            })}
        </Stack>
    )
}

export default Videos