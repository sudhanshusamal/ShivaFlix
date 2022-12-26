import { CardContent, CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { github, instagram, linkedin, reddit, telegram, twitter, whatsapp } from '../utils/constant'

const Footer = () => {
    return (
        <Box className="footer">
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
                <center>
                    <CardMedia className='follow'
                        sx={{ borderRadius: 4, height: '100px', width: { xs: "330px", md: '580px' }, mt: "25px", ml: "25px", border: '1px solid #e3e3e3' }}  >
                        <Typography variant="h6" sx={{ mt: "10px", fontSize: '18px', textAlign: "center", fontWeight: 500, color: 'white' }}> <span style={{ color: '#F31503' }}>Follow Me </span> On :</Typography>
                        <a href="https://instagram.com/rahul.json">{instagram}</a>
                        <a href="https://twitter.com/sudhanshusama1">{twitter}</a>
                        <a href="https://www.linkedin.com/in/sudhanshu-samal-257549226">{linkedin}</a>
                        <a href="https://github.com/sudhanshusamal">{github}</a>
                        <a href="https://wa.me/+919510786288">{whatsapp}</a>
                        <a href="https://www.reddit.com/u/sasta_dev?utm_medium=android_app&utm_source=share">{reddit}</a>
                        <a href="https://t.me/Shivahumai">{telegram}</a>
                    </CardMedia>
                </center>

            </CardContent>

            <Typography className="copyright" variant="body2" sx={{ mt: 3.5, color: "#fff" }}>Copyright 2022 Shiva Flix</Typography>
        </Box>
    )
}

export default Footer