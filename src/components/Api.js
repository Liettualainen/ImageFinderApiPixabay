import axios from "axios";

const baseUrl = 'https://pixabay.com/api/';
const API_KEY = process.env.REACT_APP_API_KEY;

const imageType = "photo";
const photoOrientation = "horizontal";
const safeSearch = true;
const StartingPage = 1;
// const perPage = 6;



export const getPictures = async (searchImage, perPage) => {
  console.log(API_KEY);
  const response = axios.get(`${baseUrl}?key=${API_KEY}&q=${searchImage}&image_type=${imageType}&orientation=${photoOrientation}&safesearch=${safeSearch}&page=${StartingPage}&per_page=${perPage}`) 
  return response;
};




// const perPage = 12;

// axios.dafaults.baseURL = "<https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&{perPage}>";
// axios.dafaults.baseURL = "<https://pixabay.com/api/>";
// const API_KEY = process.env.REACT_APP_API_KEY;
// let URL = "https://pixabay.com/api/?key="+{ API_KEY }+"&q="+encodeURIComponent('red roses');
// let URL = "https://pixabay.com/api/";

// export const getPictures = axios.get({ url: `{URL}/pictures`, method: 'GET', params:{offset:0, limit:10}})

// export const getPictures = async () => {
    
//         console.log("api", API_KEY);
//     console.log("apu", API_KEY);
//     const response = await axios.get(URL);
//     return response.data;
// }
const API_KEY_F = '30904237-89ef4380cd88db989fbe73792';
// await axios.get("https://pixabay.com/api/?key=30904237-89ef4380cd88db989fbe73792&per_page=8&q=yellow+flowers&image_type=photo");
// const response = axios.get(`${baseUrl}?key=${API_KEY}&q=cat&image_type=${imageType}&orientation=${photoOrientation}&safesearch=${safeSearch}&page=${StartingPage}&per_page=${perPage}`);