import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/fetchFromApi";

const Search = () => {
  const [videos, setVideos] = useState([])

  const { keyw } = useParams();


  useEffect(() => {
   

    fetchFromApi(`search?keyw=${keyw}`)
    .then((data) => setVideos(data))
  }, [keyw])

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
          Search Result For:  <span style={{ color: '#F31503' }}>{keyw}</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
  )
}

export default Search;