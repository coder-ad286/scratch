import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <AppBar position='static'>
                <Container>
                    <Toolbar sx={{
                        justifyContent: 'space-between'
                    }}>
                        <Typography variant='h5'>
                            Router 6.4 and above
                        </Typography>
                        <Box sx={{
                            display: 'flex', alignItems: "center", gap: '50px'
                        }}>
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/contact">Contact</Link>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default Navbar