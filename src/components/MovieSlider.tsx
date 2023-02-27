import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import MovieCard from "./MovieCard";
import Slider from "react-slick";
import ContentLoader from "react-content-loader";

interface movieList {
  name: string;
  link: string;
  queryKey: string;
}

interface movieCard {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

const MovieSlider = ({ name, link, queryKey }: movieList) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 2,
          swipeToSlide: true
        },
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          swipeToSlide: true
        },
      },
    ],
  };

  const fetchData = async (url: string) => {
    let fetchResult = await axios.get(url);
    return fetchResult.data;
  };

  const { isLoading, isError, data } = useQuery({
    queryKey: [queryKey],
    queryFn: () => fetchData(link),
  });

  if (isLoading) {
    // This is a shimmer effect for the loading state
    return (
      <ContentLoader
        speed={2}
        height={100}
        viewBox="0 0 500 60"
        backgroundColor="#1E293B"
        foregroundColor="#0F172A"
        uniqueKey="shimmer"
        className="flex row justify-between w-screen"
      >
        <rect x="0" y="0" rx="3" ry="3" width="500" height="250" />
      </ContentLoader>
    );
  }

  if (isError) {
    return <h1>An error occurred</h1>;
  }

  return (
    <div className="p-1 sm:p-4 mx-1 sm:mx-5">
      <h1 className="text-3xl  mt-5 mb-3">{name}</h1>
      <Slider {...settings}>
        {data.results?.map((movie: movieCard) => {
          // Only display movies with poster images
          if (movie.poster_path !== null)
            return <MovieCard movie={movie} key={movie.id} />;
        })}
      </Slider>
    </div>
  );
};

export default MovieSlider;
