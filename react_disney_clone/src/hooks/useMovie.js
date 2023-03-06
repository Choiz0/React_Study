import { useState, useEffect } from "react";
import axios from "../api/axios";

const useMovie = (fetchUrl) => {
  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(fetchUrl);
    setMovies(res.data);
  };

  useEffect(() => {
    fetchData();
  }, [fetchUrl]);

  return [movies, setMovies];
};
export default useMovie;
