

import axios from "axios"; // ✅ Correct spelling

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default instance; // ✅ Correct way to export the axios instance
