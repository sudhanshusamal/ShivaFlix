import { Stack, Box } from '@mui/material';
import { useState } from 'react';
import DetailCard from './DetailCard';
import VideoCard from './VideoCard';

const Videos = ({ videos, width }) => {


    return (
       
        <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
            
                {videos.map((item, idx) => (
                    <Box key={idx}>
                    <div className='videoCardAll'>
                        {item.animeId && <VideoCard video={item} animeId={item.animeId} width={width || "163.61px"} />}
</div>
                    </Box>
                ))}
          
        </Stack>
        
    )
}

export default Videos