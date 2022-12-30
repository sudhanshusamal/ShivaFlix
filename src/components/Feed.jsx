import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SideBar, Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
import { Helmet } from "react-helmet";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [reacentVideos, setRecentVideos] = useState([]);
  const [popularVideos, setPopularVideos] = useState([])
  const [animeMovies, setAnimeMovies] = useState([])
  const [dubVideos, setDubVideos] = useState([])
  const [kidsVideos, setkidsVideos] = useState([])


  useEffect(() => {
    fetchFromApi(`genre/dub`)
      .then((data) => setDubVideos(data));

    fetchFromApi(`genre/kids`)
      .then((data) => setkidsVideos(data));

    fetchFromApi(`recent-release`)
      .then((data) => setRecentVideos(data))

    fetchFromApi(`popular?page=2`)
      .then((data) => setPopularVideos(data))

    fetchFromApi(`anime-movies`)
      .then((data) => setAnimeMovies(data))
  }, [selectedCategory])

  return (
    <>
      <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
        <Helmet>
          <title>Watch Anime Online, Free Anime Streaming Online on Shivaflix.tk Anime Website</title>
          <meta name="description" content="Shiva is a Free anime streaming website which you can watch English Subbed and Dubbed Anime online with No Account and Daily update. WATCH NOW!" />
          <meta name="keywords" content="anime to watch, watch anime,anime online, free anime online, online anime, anime streaming, stream anime online, english anime, english dubbed anime" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://shivaflix.tk/" />
          <meta property="og:title" content="Watch Anime Online, Free Anime Streaming Online on Shivaflix.tk Anime Website" />
          <meta property="og:description" content="Shiva is a Free anime streaming website which you can watch English Subbed and Dubbed Anime online with No Account and Daily update. WATCH NOW!" />
        </Helmet>
        <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
          <SideBar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory} />
        </Box>
        <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
          <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
            {selectedCategory} <span style={{ color: '#F31503' }}>Anime</span>
          </Typography>
          <Box display="flex" p="2">
          <Box sx={{ mr: { sm: "85px", xs: "17px" } }} />
          {selectedCategory === "New" ? <Videos videos={reacentVideos} /> : selectedCategory === "Most Popular" ? <Videos videos={popularVideos} /> : selectedCategory === "Movies" ? <Videos videos={animeMovies} /> : selectedCategory === "Dub" ? <Videos videos={dubVideos} /> : selectedCategory === "Kids" ? <Videos videos={kidsVideos} /> : null}
          </Box>
        </Box>

      </Stack>
    </>
  )
}

export default Feed