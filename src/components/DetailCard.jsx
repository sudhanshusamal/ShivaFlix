import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const DetailCard = ({ animeDetail, marginTop, info }) => {
    // console.log(animeDetail)
    return (<Box
        sx={{
            boxShadow: 'none',
            borderRadius: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: { xs: '356px', md: '350px' },
            height: '326px',
            margin: 'auto',
            marginTop,
        }}
    >
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
            <CardMedia
                className='animeDetailImg'
                image={animeDetail?.animeImg}
                alt={animeDetail?.animeTitle}
                sx={{ borderRadius: 4, height: '300px', width: '180px', mb: 4, border: '1px solid #e3e3e3' }}
            />
            <div className='animeDetailImg'>
                <Typography variant="h6" >
                    {animeDetail?.animeTitle}

                </Typography>
                {animeDetail?.otherNames && (
                    <Typography sx={{ fontSize: '10px', fontWeight: 500, color: 'gray' }}>
                        ( {animeDetail?.otherNames} )
                    </Typography>
                )}
            </div>
        </CardContent>
        <div className='animeDetailImg'>
            <CardContent className='statuscard' sx={{ display: 'flex', mr: "-13px", flexDirection: 'column', justifyContent: 'center', color: '#fff' }}>
                {animeDetail?.status && (
                    <Typography className='status' sx={{ fontSize: '13px', fontWeight: 500, color: 'white' }}>
                        <span style={{ color: '#F31503' }}>Status: </span>  {animeDetail?.status}
                    </Typography>
                )}
                {animeDetail?.totalEpisodes && (
                    <Typography className='status' sx={{ fontSize: '13px', fontWeight: 500, color: 'white' }}>
                        <span style={{ color: '#F31503' }}> Total Episodes: </span>  {animeDetail?.totalEpisodes}
                    </Typography>
                )}

                {animeDetail?.releasedDate && (
                    <Typography className='status' sx={{ fontSize: '13px', fontWeight: 500, color: 'white' }}>
                        <span style={{ color: '#F31503' }}> Release Date: </span>  {animeDetail?.releasedDate}
                    </Typography>
                )}
                {animeDetail?.otherNames && (
                    <Typography className='status' sx={{ fontSize: '13px', fontWeight: 500, color: 'gray' }}>
                        <span style={{ color: '#F31503' }}> Other Name: </span> {animeDetail?.otherNames}
                    </Typography>
                )}
                {animeDetail?.type && (
                    <Typography className='status' sx={{ fontSize: '13px', fontWeight: 500, color: 'white' }}>
                        <span style={{ color: '#F31503' }}> Type: </span> {animeDetail?.type}
                    </Typography>
                )}
               
                <Typography className='status' sx={{ fontSize: '13px', fontWeight: 500, color: 'white' }}>
                    <span style={{ color: '#F31503' }}> Quality: </span> HD
                </Typography>
            </CardContent>
        </div>

    </Box>

    )

};

export default DetailCard;