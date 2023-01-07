import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { fetchFromApi } from '../utils/fetchFromApi';
import Videos from './Videos';

const RelatedVideos = ({ genreList }) => {
    const [genre, setGenre] = useState([])
    const [popular, setPopular] = useState([]);
    const randomNo = Math.floor(Math.random(5) * 100)
  console.log(randomNo)

    useEffect(() => {
    
          fetchFromApi(`genre/${genreList}?page=${randomNo}`)
          .then((data) => setGenre(data))

          fetchFromApi(`popular?page=${randomNo}`)
      .then((data) => setPopular(data));
      }, [])

    if(genreList !== undefined) {
        return (
         <center>
                   <div className='popularwatch'>
                     <Typography variant="h6" sx={{ mt: "100px", mb: "30px", fontSize: '20px', textAlign: "center", fontWeight: 500, color: 'white' }}> <span style={{ color: '#F31503' }}>More Like </span>This: </Typography>
     
                     <Box display="flex" p="2">
                       <Box sx={{ mr: { sm: "85px", xs: "45px" } }} />
     
                        {genre.length === 20 ? <Videos videos={genre} width="150px" /> : <Videos videos={popular} width="150px" />}
     
                     </Box>
                   </div>
                 </center>
         )
     
       } else 
       return "Loading..."
}

export default RelatedVideos