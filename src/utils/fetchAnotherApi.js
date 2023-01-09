import axios from 'axios';

const Base_Url = 'https://api.consumet.org/anime/gogoanime'

export const fetchAnotherApi = async (url) => {
  const { data } = await axios.get(`${Base_Url}/${url}`);
  
    return data;
  }