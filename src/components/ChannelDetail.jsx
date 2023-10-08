import React from 'react'
import { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'

import { Videos, ChannelCard } from './'
import { fetchFromApi } from '../utils/fetchFromApi'

const ChannelDetail = () => {
    const { id } = useParams();
    const [channelDetail, setChannelDetail] = useState(null)
    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetchFromApi(`channels?part=snippet&id=${id}`)
            .then((data) => setChannelDetail(data?.items[0]))
        fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
            .then((data) => setVideos(data?.items))
    }, [id])

    return (
        <Box minHeight='95vh'>
            <Box>
                <div style={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 23%, rgba(0,212,255,1) 100%)', zIndex: 10, height: '200px' }} >
                    <ChannelCard channelDetails={channelDetail} />
                </div>
            </Box>
            <Box display='flex' p='2' marginTop='150px'>
                <Box sx={{ mr: { sx: '100px' } }}>
                    <Videos videos={videos} />
                </Box>
            </Box>
        </Box>
    )
}

export default ChannelDetail