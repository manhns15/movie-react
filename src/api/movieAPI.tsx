import http from "./http";

const getAllMovies = () => {
    return  http.get("movies");
};
const getMovie = (id: number) =>{
  return  http.get(`movies/${id}`)
}
const updateMovie = (id:number, data:{})=>{
  return http.put(`movies/${id}`, data)
}
const  movieService = {
  getAllMovies,
  getMovie,
  updateMovie
}
export default movieService