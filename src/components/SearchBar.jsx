import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import { Search, SearchIcon } from '@mui/icons-material'




const SearchBar = () => {
    // const [value, setValue] = useState('');
    return (
        <Paper
            component='form'
            onSubmit={() => { }}
            sx={{
                paddingLeft: 1,
                borderRadius: 20,
                backgroundColor: "#fff",
                border: '1px solid #e3e3e3',
                boxShadow: 'none',
                mr: { sm: 5 }
            }}
        >
            <input className='search-bar'
                placeholder='Search ...'
                value=''
                onChange={(e) => { }}>
            </input>
            <IconButton type='submit' sx={{ p: '10px', color: 'red' }}>
                <Search />
            </IconButton>
        </Paper>

    )
}

export default SearchBar