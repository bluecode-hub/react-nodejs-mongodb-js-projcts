//2680efbdef706d639699a1b9f036cd86
// src/api/tmdb.js
import axios from 'axios';

// Replace with your TMDB API Key
const API_KEY = '2680efbdef706d639699a1b9f036cd86';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

// Fetch movies from a given path (e.g., "/movie/top_rated")
export const fetchMovies = async (path) => {
  try {
    const response = await instance.get(path, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("TMDB fetch error:", error);
    return [];
  }
};
