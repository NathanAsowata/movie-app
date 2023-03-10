import MovieCast from "@/components/MovieCast";
import MovieTrailer from "@/components/MovieTrailer";
import Stars from "@/components/Stars";
import axios from "axios";
import { format } from "date-fns";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";

interface movieDetailsInterface {
  data: {
    id: number;
    backdrop_path: string;
    title: string;
    vote_average: number;
    overview: string;
    runtime: number;
    genres: {
      id: string;
      name: string;
    }[];
    spoken_languages: {
      english_name: string;
    }[];
    status: string;
    release_date: string;
    production_companies: {
      name: string;
    }[];
    cast: {
      cast_id: number;
      name: string;
      character: string;
      profile_path: string;
    }[];
  };
}

const MovieDetails = ({ data }: movieDetailsInterface) => {
  // This is to convert the runtimes minutes to a more readable one

  const formattedMinutes = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (hours > 0) {
      return `${hours}h ${remainingMinutes}mins`;
    } else {
      return `${remainingMinutes}mins`;
    }
  };

  // This is to convert the release date format to a more readable one
  const releaseDate = data.release_date;
  const date = new Date(releaseDate);
  const formattedReleaseDate = format(date, "dd MMMM yyyy");

  return (
    <>
      <Head>
        <title>{data.title} - Movie Details</title>
        <link rel="shortcut icon" href="/icon.png" type="image/x-icon" />
      </Head>
      <main className="pt-14 bg-slate-800 text-white min-h-[95vh]">
        <header
          className="w-[100%] h-[400px] bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
          }}
        ></header>

        <section className="px-5 py-5 sm:px-10">
          <h1 className="text-2xl">{data.title}</h1>
          <Stars vote_average={data.vote_average} />
        </section>
        <MovieTrailer id={data.id} />

        <section className="mt-10 px-5 pb-10 sm:px-10 sm:flex sm:flex-wrap sm:justify-between">
          <div className="bg-slate-900 shadow-lg shadow-black mb-4 p-4 sm:max-w-[30vw]">
            <h2 className="text-xl mb-2">Overview</h2>
            <p>{data.overview}</p>
          </div>

          <div className="bg-slate-900 shadow-lg shadow-black mb-4 p-4 w-fit sm:w-[60vw]">
            <h2 className="text-xl mb-2">Details</h2>
            <p>
              <span className="font-semibold">Runtime:&nbsp;</span>
              {formattedMinutes(data.runtime)}
            </p>
            <p>
              <span className="font-semibold">Genre: &nbsp;</span>
              <span>{data.genres.map((genre) => genre.name).join(", ")}</span>
            </p>
            <p>
              <span className="font-semibold">Language: &nbsp;</span>
              <span>
                {data.spoken_languages
                  .map((language) => language.english_name)
                  .join(", ")}
              </span>
            </p>
            <p>
              <span className="font-semibold">Status: &nbsp;</span>
              {data.status}
            </p>
            <p>
              <span className="font-semibold">Released Date: &nbsp;</span>
              {formattedReleaseDate}
            </p>
            <p>
              <span className="font-semibold">Produced By: &nbsp;</span>
              <span>
                {data.production_companies
                  .map((company) => company.name)
                  .join(", ")}
              </span>
            </p>
          </div>
        </section>
        <MovieCast cast={data.cast} />
      </main>
    </>
  );
};

export default MovieDetails;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const movieId = context.query.id;

  // Get movie details
  const getMovieData = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
  );
  const movieDetails = await getMovieData.data;

  // Get cast and crew details
  const getCastData = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
  );
  const castDetails = await getCastData.data;

  // Merge both objects and return it as a single object
  const finalResult = Object.assign({}, movieDetails, castDetails);

  return {
    props: {
      data: finalResult,
    },
  };
};
