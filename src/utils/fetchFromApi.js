import axios from 'axios';

const Base_Url = 'https://gogoanime2.p.rapidapi.com'

const options = {
  params: { page: '1' },
  headers: {
    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
    'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
  }
};

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${Base_Url}/${url}`, options);
  
    return data;
  }