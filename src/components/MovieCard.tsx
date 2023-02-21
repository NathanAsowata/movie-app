import Image from "next/image"
import Stars from "./Stars"

interface movieCardProp {
  movie: {
    id:string,
    title: string,
    poster_path: string,
    vote_average: number
  }
}

const MovieCard = ({movie}:movieCardProp) => {

  const trucateMovieTitle = (title:string) => {
    if (title.length > 20){
      return title.slice(0, 20) + "..."
    } 
    else{
      return title
    }
  }

  return (
    <div className="w-{150px} bg-slate-900 p-2 m-2 w-fit">
        <Image 
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
          alt={movie.title}
          width={180}
          height={100}
          />
          <section>
            <h3 className="text-md font-semibold py-2">
              {trucateMovieTitle(movie.title)}
            </h3>
            <Stars vote_average={movie.vote_average} />
          </section>
    </div>
  )
}

export default MovieCard