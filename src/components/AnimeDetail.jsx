/* eslint-disable jsx-a11y/no-redundant-roles */
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";

import { VideoDetail, Videos } from './';
import { fetchFromApi } from "../utils/fetchFromApi";
import { DetailCard } from "./";
import { background_image, demoVideoUrl, share, instagram, twitter, linkedin, github, whatsapp, reddit, telegram } from "../utils/constant";
import { Helmet } from "react-helmet";

const AnimeDetail = () => {

  const [animeDetails, setAnimeDetails] = useState("");
  const [popular, setPopular] = useState([]);
  const [visible, setVisible] = useState(12);


  const { animeId } = useParams();
  const episodesList = animeDetails?.episodesList;
  const animeTitleForHead = animeDetails?.animeTitle

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 12)
  }

  const showLessItems = () => {
    setVisible((prevValue) => prevValue - 12)
  }

  useEffect(() => {

    fetchFromApi(`anime-details/${animeId}`)
      .then((data) => setAnimeDetails(data))

    fetchFromApi(`recent-release`)
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
          <div style={{ backgroundImage: `url(${background_image})`, backgroundRepeat: "no-repeat", zIndex: 10, height: "150px", backgroundSize: "cover" }} />
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
                {episodesList ? episodesList.slice(0, visible).map((episode) => (
                  <Link to={episode.episodeId ? `/watch/${episode.episodeId}` : demoVideoUrl} state={{ animeDetails: animeDetails }}>

                    <button className="button-78" role="button" key={episode?.animeTitle}>Ep: {episode?.episodeNum}</button>

                  </Link>
                )) : null}
                <center>
                  {animeDetails?.totalEpisodes > 12 ? <button className="bn30" onClick={showMoreItems}>Load More ...</button> : null}
                  {animeDetails?.totalEpisodes > 12 ? <button className="bn30" onClick={showLessItems}>Show Less ...</button> : null}

                </center>
              </div>
            </center>

            <Box display="flex" p="2">
              <Box sx={{ mr: { md: "450px", sm: "210px", xs: "18px" } }} />
              <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>

                <CardMedia
                  sx={{ borderRadius: 4, height: '100px', width: { xs: "330px", md: '580px' }, mt: "65px", border: '1px solid #e3e3e3' }}  >
                  <Typography variant="h6" sx={{ mt: "10px", fontSize: '18px', textAlign: "center", fontWeight: 500, color: 'white' }}> <span style={{ color: '#F31503' }}>Contact </span> :</Typography>
                  <a href="https://instagram.com/rahul.json">{instagram}</a>
                  <a href="https://twitter.com/sudhanshusama1">{twitter}</a>
                  <a href="https://www.linkedin.com/in/sudhanshu-samal-257549226">{linkedin}</a>
                  <a href="https://github.com/sudhanshusamal">{github}</a>
                  <a href="https://wa.me/+919510786288">{whatsapp}</a>
                  <a href="https://www.reddit.com/u/sasta_dev?utm_medium=android_app&utm_source=share">{reddit}</a>
                  <a href="https://t.me/MatrixAVL">{telegram}</a>
                </CardMedia>


              </CardContent>
            </Box>
            <Typography variant="h6" sx={{ mt: "100px", mb: "30px", fontSize: '20px', textAlign: "center", fontWeight: 500, color: 'white' }}> <span style={{ color: '#F31503' }}>Recently Uploaded </span> That You Should Try: </Typography>

            <Box display="flex" p="2">
              <Box sx={{ mr: { sm: "131px", xs: "27px" } }} />
              <Videos videos={popular.slice(0, 14)} />
            </Box>
          </Box>
        </Box>


      </Box>
    </>
  )
}

export default AnimeDetail;