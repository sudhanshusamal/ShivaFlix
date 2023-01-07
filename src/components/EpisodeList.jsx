import { Typography } from '@mui/material';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const EpisodeList = ({episodesList, animeDetails, animeId }) => {

    const [visible, setVisible] = useState(12);
    const totalEpisodes = animeDetails?.totalEpisodes

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 12)
      }
    
      const showLessItems = () => {
        setVisible((prevValue) => prevValue - 12)
      }
      const showAllItems = () => {
        setVisible(totalEpisodes)
      }

  return (
    <div>
        {episodesList ? episodesList.slice(0, visible).map((episode) => (
                  <Link to={episode.episodeId ? `/watch/${episode.episodeId}` : null} state={{ animeDetails: animeDetails }}>

                    <button className="button-78" role="button" key={episode?.animeTitle}>{episode?.episodeNum}</button>
                    
                  </Link>
                )) : null}
                
                <center>
                  {animeDetails?.totalEpisodes > 12 ? <button className="bn30" onClick={showMoreItems}>Load More ...</button> : null}
                  {animeDetails?.totalEpisodes > 12 ? <button className="bn30" onClick={showLessItems}>Show Less ...</button> : null}
                  <br />
                  {animeDetails?.totalEpisodes > 12 ? <button className="bn30" onClick={showAllItems}>Show All Ep</button> : null}

                </center>
    </div>
  )
}

export default EpisodeList