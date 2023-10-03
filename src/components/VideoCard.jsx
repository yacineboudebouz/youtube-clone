import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants'
function VideoCard({ video: { id: { videoId }, snippet } }) {
    console.log()
    return (
        <Card sx={{ width: { md: '320px', xs: '100%' }, boxShadow: 'none', borderRadius: '10px' }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
                <CardMedia image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}

                    sx={{ width: '100%', height: 180, }}
                />

            </Link>
            <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px', width: '100%' }}>
                <Link to={snippet?.videoId ? `/video/${snippet?.videoId}` : demoChannelUrl}>
                    <Typography variant='subtitle1' fontWeight='bold' color='#fff'>
                        {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography variant='subtitle2' fontWeight='bold' color='gray'>
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }}>

                        </CheckCircle>
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard