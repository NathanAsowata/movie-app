import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";

interface MovieTrailerProp {
  id: number;
}

interface MovieTrailerVideo {
  site: string;
  key: string;
  type: string;
}

const MovieTrailer = ({ id }: MovieTrailerProp) => {
  const fetchData = async () => {
    let fetchResults = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
    );
    let results = await fetchResults.data;
    return results;
  };

  const { isLoading, isError, data } = useQuery({
    queryKey: ["movieTrailer", id],
    queryFn: () => fetchData(),
  });

  if (isLoading) {
    return (
      <button className="bg-black shadow-lg shadow-slate-900 px-4 mx-5 sm:mx-10 mb-6 py-2 mt-5">
        Loading...
      </button>
    );
  }

  if (isError) {
    return (
      <button className="bg-black shadow-lg shadow-slate-900 px-4 mx-5 sm:mx-10 mb-6 py-2 mt-5">
        Not Available
      </button>
    );
  }

  const trailer = data.results.find(
    (video: MovieTrailerVideo) => video.type === "Trailer"
  );

  return (
    <span>
      {trailer && (
        <Link
          href={`https:www.youtube.com/watch?v=${trailer.key}`}
          target={"_blank"}
          className="px-4 py-2 mx-5 sm:mx-10 bg-black text-white shadow-lg shadow-slate-900"
        >
          Watch Trailer
        </Link>
      )}
    </span>
  );
};

export default MovieTrailer;
