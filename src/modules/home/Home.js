import { Navbar } from "./Navbar";
import { Video_slider } from "./Video_slider";
import { Rows } from "./Rows";
import { Request } from "../../shared/Request";
import { Footer } from "./Footer";
import LazyLoad from "react-lazy-load";

export const Home = () => {
  const content = [
    { title: "Trending", URL: Request.fetchTrending },
    { title: "Top Rated", URL: Request.fetchTopRated },
    { title: "Documentaries", URL: Request.fetchDocumentaries },
    { title: "Action Movies", URL: Request.fetchActionMovies },
    { title: "Comedy Movies", URL: Request.fetchComedyMovies },
    { title: "Horror Movies", URL: Request.fetchHorrorMovies },
    { title: "Animated Movies", URL: Request.fetchAnimationMovies },
    { title: "Romantic Movies", URL: Request.fetchRomanceMovies },
    { title: "Adventure Movies", URL: Request.fetchAdventureMovies },
    { title: "TV Top Rated", URL: Request.fetchTVTopRated },
    { title: "TV Popular", URL: Request.fetchTVPopular },
  ];
  return (
    <>
      <div>
        <Navbar />
        <LazyLoad>
          <Video_slider />
        </LazyLoad>
        <div className="bg-black">
          {content.map((element) => (
            <Rows title={element.title} URL={element.URL} />
          ))}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};
