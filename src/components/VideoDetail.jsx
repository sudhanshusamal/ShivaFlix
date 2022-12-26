import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Typography, Box, Stack, CardContent, CardMedia } from '@mui/material'

import { Videos } from './'

import { fetchFromApi } from '../utils/fetchFromApi'
import { github, instagram, linkedin, reddit, telegram, twitter, whatsapp } from '../utils/constant'

const VideoDetail = ({ response }) => {
  const [video, setVideo] = useState(null)
  const [popular, setPopular] = useState([]);

  const { animeId } = useParams();
  console.log(response)


  useEffect(() => {
    fetchFromApi(`vidcdn/watch/${animeId}`)
      .then((data) => setVideo(data))

    fetchFromApi(`popular`)
      .then((data) => setPopular(data));
  }, [animeId])

  const videoURL = video?.Referer;

  return (
    <Box minHeight="95vh" >
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <center>
              <div id="loader1" className='container1'>
                <iframe id="ifr" allow="fullscreen" src={videoURL ? videoURL : null} width="1024" style={{ maxwidth: "100%", maxheight: "100%", border: "none" }} height="650" ></iframe>
              </div>
            </center>
          </Box>

          <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" className='mobileVideoPage'>
            <Box display="flex" p="2">
              <Box sx={{ mr: { md: "450px", sm: "210px", xs: "18px" } }} />

            </Box>
            <div className='popularwatch'>
              <Typography variant="h6" sx={{ mt: "100px", mb: "30px", fontSize: '20px', textAlign: "center", fontWeight: 500, color: 'white' }}> <span style={{ color: '#F31503' }}>Popular Anime </span> That You Might Like: </Typography>

              <Box display="flex" p="2">
                <Box sx={{ mr: { sm: "131px", xs: "27px" } }} />
                <Videos videos={popular.slice(0, 14)} width="150px" />
              </Box>
            </div>
          </Box>
          
        </Box>

      </Stack>
    </Box>
  )
}

export default VideoDetail