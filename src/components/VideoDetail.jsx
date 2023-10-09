import React from 'react'

import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { CheckCircle } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'

import { fetchFromApi } from '../utils/fetchFromApi'

const VideoDetail = () => {
    const { id } = useParams();
    const [VideoDetail, setVideoDetail] = useState(null)
    useEffect(() => {
        fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) => setVideoDetail(data.items[0]))
    }, [id])
    return (
        <Box minHeight={'95vh'}>
            <Stack direction={{ sx: 'column', md: 'row' }}>
                <Box flex={1}>
                    <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
                        <Typography color='#fff' variant='hs' fontWeight='bold' p={2}>
                            {/* {VideoDetail.snippet.title == null ? VideoDetail.snippet.title : ''} */}
                        </Typography>
                    </Box>
                </Box>
            </Stack>
        </Box>
    )
}

export default VideoDetail