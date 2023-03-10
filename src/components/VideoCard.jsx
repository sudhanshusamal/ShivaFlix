/* eslint-disable no-undef */
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constant';

const VideoCard = ({ video: videoId, animeId: animeId, totalepisodes, width }) => {

    

    return (
        
            <Card sx={{ width: { md: "320px", xs: '100%' },border: 'none', boxShadow: 'none', borderRadius: 3, width: width }}>
                <div className='pickgradient'>
                    <Link to={videoId ? `/anime-details/${animeId}` : demoVideoUrl}>
                        <CardMedia className='videoImg' image={videoId?.animeImg} alt={videoId?.animeTitle} sx={{ width: 165, height: 190 }} />
                    </Link>
                </div>
                <CardContent className='cardColor' sx={{ backgroundColor: "rgba(0,0,0, 0.8)", height: "106px" }}>
                    <Link to={videoId ? `/anime-details/${animeId}` : demoVideoUrl}>
                        <span>
                            <Typography variant='subtitle1' fontWeight="bold" color="#fff" >
                                {videoId?.animeTitle.slice(0, 30) || demoVideoTitle.slice(0, 60)}
                                {videoId?.animeTitle.length > 30 ? <span>...</span> : null}
                            </Typography>
                        </span>
                        <Typography variant='subtitle2' color="darkgray" sx={{ mt: "4px" }}>
                            {videoId?.releasedDate}
                        </Typography>
                    </Link>
                </CardContent>
            </Card>
    )
}

export default VideoCard