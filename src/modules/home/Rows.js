import { API_CLIENT } from "../../services/api_client";
import Slider from "./netflix_slider";
import { useEffect, useState } from "react";

export const Rows = ({ title, URL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await API_CLIENT.get(URL);
      setMovies(request.data.results);
      console.log("data: " + request.data.results);
    }
    fetchData();
  }, [URL]);

  const getMovieContent = (movies) => {
    let length = movies.length;
    let i = 0;
    let content = [];
    let n=0;
    while (i < length) {
      const movie = movies[i];
      i++;
      if(i===length-1 && n<=1){
        i=0;
        n++;
      }
      content.push(
        <Slider.Item movie={movie} key={movie.id}>
          item1
        </Slider.Item>
      );
    }
    return content;
  };

  return (
    <>
      <div className="text-transparent">h</div>
      <div className=" text-2xl font-semibold text-white mx-14 mt-2">
        {title}
      </div>
      <div className="bg-black">
        {/* <Slider>
          {movies.map((movie) => (
            <Slider.Item movie={movie} key={movie.id}>
              item1
            </Slider.Item>
          ))}
        </Slider> */}
        <Slider>{getMovieContent(movies)}</Slider>
      </div>
    </>
  );
};
