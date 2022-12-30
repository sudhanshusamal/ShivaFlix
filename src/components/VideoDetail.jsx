import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Typography, Box, Stack, CardContent, CardMedia } from '@mui/material'
import { EpisodeList, Videos } from './'
import Hls from 'hls.js'
import Plyr from 'plyr';
import 'plyr/dist/plyr.css'

import { fetchFromApi } from '../utils/fetchFromApi'
import { github, instagram, linkedin, reddit, telegram, twitter, whatsapp } from '../utils/constant'
import { Helmet } from 'react-helmet'
import ReactPlayer from 'react-player'
import { AirlineSeatReclineNormalTwoTone } from '@mui/icons-material'

const VideoDetail = () => {
  const [video, setVideo] = useState(null)
  const [animeDetails, setAnimeDetails] = useState("");
  const [popular, setPopular] = useState([]);

  const { animeId } = useParams();
  var animeDetailId = animeId
  var animeDetailId = animeDetailId.split("-episode-")
  const animeDetailsId = animeDetailId[0];

  var episodesList = animeDetails?.episodesList


  useEffect(() => {
    fetchFromApi(`vidcdn/watch/${animeId}`)
      .then((data) => setVideo(data))

    fetchFromApi(`anime-details/${animeDetailsId}`)
      .then((data) => setAnimeDetails(data))

    fetchFromApi(`popular`)
      .then((data) => setPopular(data))
  }, [animeId])

  const videoURL = video?.sources?.[0]?.file;
  if (!videoURL) return "Loading..."


  //Disqus 
  var disqus_config = function () {
    this.page.url = `https://shivaflix.tk/watch/${animeId}`;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = animeId; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
  };

  (function () { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://shivaflix.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  })();

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
                <ReactPlayer className="player" width="100%" height="80%" controls={true} autoPlay={true} url={videoURL ? videoURL : null} />
              </div>

              <CardContent className='card1'>
                <div className='cardNoEp'>

                  <CardContent sx={{ color: '#fff' }}>
                    <Link to={animeId ? `/anime-details/${animeDetailsId}` : null}>
                      <CardMedia
                        image={animeDetails?.animeImg}
                        alt={animeDetails?.animeTitle}
                        sx={{ borderRadius: 4, height: '100px', width: '100px', mb: 4, border: '1px solid #e3e3e3' }}
                      /><span>
                        <Typography variant="h6" color="#FFF">
                          {animeDetails?.animeTitle}

                        </Typography> </span>
                      {animeDetails?.otherNames && (
                        <Typography sx={{ fontSize: '10px', fontWeight: 500, color: 'gray' }}>
                          ( {animeDetails?.otherNames} )
                        </Typography>
                      )}
                    </Link>
                  </CardContent>
                  <CardContent className='statuscard1' sx={{ display: 'flex', mr: "-13px", flexDirection: 'column', justifyContent: 'center', color: '#fff' }}>
                    {animeDetails?.status && (
                      <Typography className='status' sx={{ fontSize: '13px', fontWeight: 500, color: 'white' }}>
                        <span style={{ color: '#F31503' }}>( </span>  {animeDetails?.status} <span style={{ color: '#F31503' }}>) </span>
                      </Typography>
                    )}
                    {animeDetails?.releasedDate && (
                      <Typography className='status' sx={{ fontSize: '13px', fontWeight: 500, color: 'white' }}>
                        {animeDetails?.releasedDate}
                      </Typography>
                    )}
                    {animeDetails?.type && (
                      <Typography className='status' sx={{ fontSize: '13px', fontWeight: 500, color: 'white' }}>
                        {animeDetails?.type}
                      </Typography>
                    )}

                  </CardContent>
                </div>
                <center>
                  <div className='epListOnVideo'>
                    <Typography variant="h6" sx={{ fontSize: '30px', textAlign: "center", fontWeight: 500, color: 'white' }}>  <span style={{ color: '#F31503' }}>Episodes </span> ({animeDetails?.totalEpisodes}):</Typography>
                    <div className="container">
                      <EpisodeList animeDetails={animeDetails} episodesList={episodesList} animeId={animeId} />
                    </div>
                  </div>
                </center>
              </CardContent>
              <div className='comment'>
                <div id="disqus_thread"></div>
              </div>
            </center>




            <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" className='mobileVideoPage'>
              <Box display="flex" p="2">
                <Box sx={{ mr: { md: "450px", sm: "210px", xs: "18px" } }} />
              </Box>

            </Box>
            <center>
              <div className='popularwatch'>
                <Typography variant="h6" sx={{ mt: "100px", mb: "30px", fontSize: '20px', textAlign: "center", fontWeight: 500, color: 'white' }}> <span style={{ color: '#F31503' }}>Popular Anime </span> That You Might Like: </Typography>

                <Box display="flex" p="2">
                  <Box sx={{ mr: { sm: "85px", xs: "45px" } }} />

                  <Videos videos={popular.slice(0, 16)} width="150px" />

                </Box>
              </div>
            </center>
          </Box>

        </Box>

      </Stack >
    </Box >
  )
}

export default VideoDetail