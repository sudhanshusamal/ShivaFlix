/* eslint-disable jsx-a11y/no-redundant-roles */
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";

import { VideoDetail, Videos } from './';
import { fetchFromApi } from "../utils/fetchFromApi";
import { DetailCard } from "./";
import { background_image, demoVideoUrl, share, instagram, twitter, linkedin, github, whatsapp, reddit, telegram } from "../utils/constant";
import { Helmet } from "react-helmet";
import EpisodeList from "./EpisodeList";

const AnimeDetail = () => {

  const [animeDetails, setAnimeDetails] = useState("");
  const [popular, setPopular] = useState([]);


  const { animeId } = useParams();
  const episodesList = animeDetails?.episodesList;
  const animeTitleForHead = animeDetails?.animeTitle
const randomNo = Math.floor(Math.random(5) * 100)

  useEffect(() => {

    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

    fetchFromApi(`anime-details/${animeId}`)
      .then((data) => setAnimeDetails(data))

    fetchFromApi(`popular?page=${randomNo}`)
      .then((data) => setPopular(data));


  }, [animeId])

  // document.title = `Watch ${animeTitleForHead} English Sub/Dub online Free on Shivaflix.tk`

  
  return (
    <>

      <Box minHeight="95vh">
        <Helmet>
          <title>{`Watch ${animeDetails?.animeTitle} English Sub/Dub online Free on Shivaflix.tk`}</title>
          <meta name="description" content={`Best site to watch ${animeTitleForHead} English Sub/Dub online Free and download ${animeTitleForHead} English Sub/Dub anime.`} />
          <meta property="og:type" content="website" />
          <meta name="keywords" content={`${animeTitleForHead} English Sub/Dub, free ${animeTitleForHead} online, watch ${animeTitleForHead} online, watch ${animeTitleForHead} free, download ${animeTitleForHead} anime, download ${animeTitleForHead} free`} />
          <meta property="og:url" content={`https://shivaflix.tk/anime-details/${animeId}`} />
          <meta property="og:description" content={`Best site to watch ${animeTitleForHead} English Sub/Dub online Free and download ${animeTitleForHead} English Sub/Dub anime.`} />
          <meta property="og:title" content={`Watch ${animeTitleForHead} English Sub/Dub online Free on Shivaflix.tk`} />
        </Helmet>
        <Box >
          <div className="backgroundImgForDetails" style={{ backgroundImage: `url(${animeDetails?.animeImg})`,opacity:"40%", backgroundRepeat: "no-repeat", zIndex: 10, height: "450px", backgroundSize: "cover" }} />
          <DetailCard animeDetail={animeDetails} />
          <hr className="animated fadeInLeft" />
        </Box>

        <Box display="flex" p="2">
          <Box sx={{ mr: { sm: "100px" } }}>
            <br />
            <br />

            <br />
            <br />
            <center>
              <Typography variant="h6" sx={{ fontSize: '30px', textAlign: "center", fontWeight: 500, color: 'white' }}>Episodes ({animeDetails?.totalEpisodes}):</Typography>
              <div className="container">
              <EpisodeList animeDetails={animeDetails} episodesList={episodesList} animeId={animeId} />
              </div>
            </center>

            <Typography variant="h6" sx={{ mt: "100px", mb: "30px", fontSize: '20px', textAlign: "center", fontWeight: 500, color: 'white' }}> <span style={{ color: '#F31503' }}>More Like </span>This: </Typography>

            <Box display="flex" p="2">
              <Box sx={{ mr: { sm: "85px", xs: "42px" } }} />
              <Videos videos={popular.slice(0, 20)} />
            </Box>
          </Box>
        </Box>


      </Box>
    </>
  )
}

export default AnimeDetail;