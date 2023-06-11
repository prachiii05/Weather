import axios from 'axios';

const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=";

export const Search = async (city) => {
  const user = await axios({
    method: "GET",
    url: `${url}/${city}`,
    params: {
      query: "san fran",
      language: "en-US",
    },
    headers: {
      "X-RapidAPI-Key": "737a100158mshf3a996c79632e13p1535fcjsne98186c7b9e4",
      "X-RapidAPI-Host": "weather338.p.rapidapi.com",
    },
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  if (user) {
    return user;
  }
};