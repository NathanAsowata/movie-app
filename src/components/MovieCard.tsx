import Image from "next/image"
import { useState } from "react"
import Stars from "./Stars"

interface movieCardProp {
  movie: {
    id:number,
    title: string,
    poster_path: string,
    vote_average: number
  }
}

const MovieCard = ({movie}:movieCardProp) => {

  const trucateMovieTitle = (title:string) => {
    // On screens less than 500px in width return the first 10 characters of the movie title string
    if (title.length > 10 && window.innerWidth <= 500){
      return title.slice(0, 10) + "..."
    } 
    // On screens less than 768px in width return the first 14 characters of the movie title string
    else if(title.length > 14 && window.innerWidth <= 768){
      return title.slice(0, 14) + "..."
    }
    // On screens greater than 768px in width return the first 18 characters of the movie title string
    else if(title.length >18 && window.innerWidth > 768){
      return title.slice(0, 18) + "..."
    }
    // If a movie title does not meet any of these conditions, return it without any string manipulation 
    else{
      return title
    }
  }

  return (
    <div className=" bg-slate-900 p-2 m-2 w-fit text-white">
        <Image 
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
          alt={movie.title}
          width="100"
          height="100"
          style={{ width: '180px', height: 'auto' }}
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