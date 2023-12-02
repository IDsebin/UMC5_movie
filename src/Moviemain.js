import "./App.css";
import Movie from "./Movie";
import { movies } from "./api";
import Top from "./Top";

export const movieData = (size = 500, path) => {
  return `https://image.tmdb.org/t/p/w${size}/${path}`;
};

function Moviemain() {
  const data= movies.results;

  console.log(data);
  return (
    <>
      <Top />
      <div className="backgroundColor">
        <Movie data={data} />
      </div>
      ;
    </>
  );
}

export default Moviemain;
