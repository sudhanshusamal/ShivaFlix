import { Box } from '@mui/system';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar, Feed, Popular, Movies, Search, AnimeDetail, DetailCard, VideoDetail, Footer } from './components';

const App = () => {
    const [response, setResponse] = useState([]);

    return (
        <BrowserRouter>
            <Box sx={{ bgcolor: "#252525" }}>
                <Navbar />
                <Routes>
                    <Route path='/' exact element={<Feed />} />
                    <Route path='/watch/:animeId' element={<VideoDetail />} />
                    <Route path='/anime-details/:animeId' element={<AnimeDetail />} />
                    <Route path='/search/:keyw' element={<Search />} />
                </Routes>
                <Footer />
            </Box>
        </BrowserRouter>
    )
}

export default App