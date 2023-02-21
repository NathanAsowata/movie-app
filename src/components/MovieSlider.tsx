import { useQuery } from "@tanstack/react-query"
import axios from "axios"

interface propTypes {
    name:string,
    link:string
}

interface movieType {
    id:string,
    title: string,
    poster_path: string,
    vote_average: string
}


const MovieSlider = ({name, link}:propTypes) => {
  
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
    <div>
        <h1>{name}</h1>
        <section>
            {data.results.map((movie:movieType) => {
                return(<div key={movie.id}>
                    <p>{movie.title}</p>
                    <p>{movie.vote_average}</p>
                </div>
            )})}
        </section>
    </div>
  )
}

export default MovieSlider