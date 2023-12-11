import http from "./http";

const getAllMovies = async() => {
    return await http.get("movies");
};
const getMovie = async(id: number) =>{
  return await http.get(`movies/${id}`)
}

const  movieService = {
  getAllMovies,
  getMovie,
}
export default movieService