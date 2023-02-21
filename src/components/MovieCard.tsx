import Image from "next/image"

interface movieCardProp {
  movie: {
    id:string,
    title: string,
    poster_path: string,
    vote_average: string
  }
}

const MovieCard = ({movie}:movieCardProp) => {

  return (
    <div>
        <Image 
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
          alt={movie.title}
          width={200}
          height={250}
          />
          <section>
            <h3>{movie.title}</h3>
            <p>{movie.vote_average}</p>
          </section>
    </div>
  )
}

export default MovieCard