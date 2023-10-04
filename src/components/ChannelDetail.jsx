import React from 'react'
import { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'

import { Videos, ChannelCard } from './'
import { fetchFromApi } from '../utils/fetchFromApi'

const ChannelDetail = () => {
    const [channelDetail, setChannelDetail] = useState(null)
    const { id } = useParams();
    useEffect(() => {
        fetchFromApi(`channels?part="snippet&id=${id}`)
            .then((data) => setChannelDetail(data?.items[0]))
    }, [id])
    console.log(channelDetail);
    return (
        <div>{id}</div>
    )
}

export default ChannelDetail