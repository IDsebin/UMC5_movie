import "./App.css";
import { tvs } from "./tvapi";
import Tv from "./Tv";
import Top from "./Top";

export const movieData = (size = 500, path) => {
  return `https://image.tmdb.org/t/p/w${size}/${path}`;
};

function Tvmain() {
  const data = tvs.results;

  console.log(data);
  return (
    <>
      <Top />
      <div className="backgroundColor">
        <Tv data={data} />
      </div>
      ;
    </>
  );
}

export default Tvmain;
