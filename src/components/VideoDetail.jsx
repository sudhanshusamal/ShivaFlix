import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Typography, Box, Stack, CardContent, CardMedia } from '@mui/material'
import { Videos } from './'
import Hls from 'hls.js'
import Plyr from 'plyr';
import 'plyr/dist/plyr.css'

import { fetchFromApi } from '../utils/fetchFromApi'
import { github, instagram, linkedin, reddit, telegram, twitter, whatsapp } from '../utils/constant'
import { Helmet } from 'react-helmet'
import ReactPlayer from 'react-player'

const VideoDetail = ({ response }) => {
  const [video, setVideo] = useState(null)
  const [popular, setPopular] = useState([]);

  const { animeId } = useParams();
  // console.log(response)


  useEffect(() => {
    fetchFromApi(`vidcdn/watch/${animeId}`)
      .then((data) => setVideo(data))

      fetchFromApi(`popular`)
      .then((data) => setPopular(data))
  }, [animeId])

  const videoURL = video?.sources?.[0]?.file;
  if (!videoURL) return "Loading..."
  // console.log(videoURL)






  return (
    <Box minHeight="95vh" >
      <Helmet>
        <title>{`Watch ${animeId} English Sub/Dub online Free on Shivaflix.tk`}</title>
        <meta name="description" content={`Best site to watch ${animeId} English Sub/Dub online Free and download ${animeId} English Sub/Dub anime.`} />
        <meta property="og:type" content="website" />
        <meta name="keywords" content={`${animeId} English Sub/Dub, free ${animeId} online, watch ${animeId} online, watch ${animeId} free, download ${animeId} anime, download ${animeId} free`} />
        <meta property="og:url" content={`https://shivaflix.tk/watch/${animeId}`} />
        <meta property="og:description" content={`Best site to watch ${animeId} English Sub/Dub online Free and download ${animeId} English Sub/Dub anime.`} />
        <meta property="og:title" content={`Watch ${animeId} English Sub/Dub online Free on Shivaflix.tk`} />
      </Helmet>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%' }}>
            <center>
              <div id="loader1" className='player-wrapper'>
                <ReactPlayer className="player" width="100%"  height="auto" controls={true} autoplay={false} url={videoURL ? videoURL : null}/>
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