import axios from 'axios';

const getDrinksFromAPI = async () => {
  const options = {
    method: 'GET',
    url: 'https://the-cocktail-db.p.rapidapi.com/filter.php',
    params: {i: 'Gin'},
    headers: {
      'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com',
      'X-RapidAPI-Key': 'de1a515dc6mshd4db2817e848ed1p131ad9jsn326bb1fecc47',
    },
  };

  try {
    var response = await axios.request(options);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
  return [];
};

export default getDrinksFromAPI;
