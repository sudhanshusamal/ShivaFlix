import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/fetchFromApi";
import { Helmet } from "react-helmet";

const Search = () => {
  const [videos, setVideos] = useState([])

  const { keyw } = useParams();


  useEffect(() => {


    fetchFromApi(`search?keyw=${keyw}`)
      .then((data) => setVideos(data))
  }, [keyw])

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Helmet>
        <title>Watch Anime Online, Free Anime Streaming Online on Shivaflix.tk Anime Website</title>
        <meta name="description" content="Shiva is a Free anime streaming website which you can watch English Subbed and Dubbed Anime online with No Account and Daily update. WATCH NOW!" />
        <meta name="keywords" content="anime to watch, watch anime,anime online, free anime online, online anime, anime streaming, stream anime online, english anime, english dubbed anime" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shivaflix.tk/" />
        <meta property="og:title" content="Watch Anime Online, Free Anime Streaming Online on Shivaflix.tk Anime Website" />
        <meta property="og:description" content="Shiva is a Free anime streaming website which you can watch English Subbed and Dubbed Anime online with No Account and Daily update. WATCH NOW!" />
      </Helmet>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
        Search Result For:  <span style={{ color: '#F31503' }}>{keyw}</span>
      </Typography>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "85px", xs: "17px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default Search;