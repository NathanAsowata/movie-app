import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import MovieCard from "./MovieCard"

interface movieList {
    name:string,
    link:string
}

interface movieCard {
    id:string,
    title: string,
    poster_path: string,
    vote_average: number
}


const MovieSlider = ({name, link}:movieList) => {
  
    const fetchData = async (url:string) => {
        let fetchResult = await axios.get(url)
        return fetchResult.data
    }

    const {isLoading, isError, data } = useQuery({
        queryKey: ["movies"],
        queryFn: (() => fetchData(link))
    })

    if(isLoading) {
        return <div className="text-white text-center">Loading...</div>
    }

    if(isError) {
        return <h1>An error occurred</h1>
    }
  
    return (
    <div className="p-4">
        <h1>{name}</h1>
        <section>
            {data.results.map((movie:movieCard) => {
                return <MovieCard movie={movie} key={movie.id} />
            })}
        </section>
    </div>
  )
}

export default MovieSlider