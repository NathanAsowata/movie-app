import Stars from "@/components/Stars"
import axios from "axios"
import { GetServerSidePropsContext } from "next"
import Head from "next/head"
import Image from "next/image"



interface movieDetailsInterface {
  
  data: {
    backdrop_path: string,
    title: string,
    vote_average: number,
    overview: string,
    runtime: number,
    genres: {
        id: string,
        name: string
    }[],
    spoken_languages: {
        english_name: string
    }[],
    status: string,
    release_date: string,
    production_companies: {
        name: string
    }[]
  }  

}


const MovieDetails = ({data}:movieDetailsInterface) => {
  return (
    <>
      <Head>
        <title>{data.title} - Movie Details</title>
        <link rel="shortcut icon" href="icon.png" type="image/x-icon" />
      </Head>
      <main className="pt-14 bg-slate-800 text-white">
        <Image 
          src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
          alt={data.title}
          width="400"
          height="600"
          style={{width: '100%', height: 'auto'}}
        />
        <section className="px-5 py-5 sm:px-10">
        <h1 className="text-2xl">{data.title}</h1>
        <Stars vote_average={data.vote_average} />
        <button className="bg-black shadow-lg shadow-slate-900 px-4 py-2 my-2">Watch Trailer</button>
        </section>

        <section className="px-5 sm:px-10 sm:flex sm:flex-wrap sm:justify-between">
          
          <div className="bg-slate-900 shadow-lg shadow-black mb-4 p-4 sm:max-w-[30vw]">
            <h2 className="text-xl mb-2">Overview</h2>
            <p>{data.overview}</p>
          </div>
          
          <div className="bg-slate-900 shadow-lg shadow-black mb-4 p-4 sm:w-[60vw]">
            <h2 className="text-xl mb-2">Details</h2>
            <p> 
              <span className="font-semibold">
                Runtime:&nbsp;
              </span> 
              {data.runtime} mins
            </p>
            <p> 
              <span className="font-semibold">
              Genre: &nbsp;
              </span>
            </p>
            <p>
              <span className="font-semibold">
              Language: &nbsp;
              </span>
            </p>
            <p>
              <span className="font-semibold">
                Status: &nbsp;
              </span> 
              {data.status}
            </p>
            <p>
              <span className="font-semibold">
              Released Date: &nbsp;
              </span> 
              {data.release_date}
            </p>
            <p>
              <span className="font-semibold">
              Produced By: &nbsp;
              </span>
            </p>
          </div>

        </section>

      </main>
    </>
  )
}

export default MovieDetails

export const getServerSideProps = async (context:GetServerSidePropsContext) => {

  const movieId = context.query.id
  const getMovieData = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`)
  const MovieDetails = await getMovieData.data

  return {
    props: {
      data:  MovieDetails as movieDetailsInterface
    }
  }
}