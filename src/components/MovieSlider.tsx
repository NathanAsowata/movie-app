import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import MovieCard from "./MovieCard"
import Slider from "react-slick"


interface movieList {
    name:string,
    link:string,
    queryKey:string
}

interface movieCard {
    id:string,
    title: string,
    poster_path: string,
    vote_average: number
}


const MovieSlider = ({name, link, queryKey}:movieList) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        swipeToSlide: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1.8,
                slidesToScroll: 1,
              }
            }
        ]
    }

    const fetchData = async (url:string) => {
        let fetchResult = await axios.get(url)
        return fetchResult.data
    }

    const {isLoading, isError, data } = useQuery({
        queryKey: [queryKey],
        queryFn: (() => fetchData(link))
    })

    if(isLoading) {
        return <div className="text-white text-center">Loading...</div>
    }

    if(isError) {
        return <h1>An error occurred</h1>
    }
    return (
    <div className="p-4 mx-5">
        <h1 className="text-3xl  mt-5 mb-3">{name}</h1>  
        <Slider {...settings}>
            {data.results?.map((movie:movieCard) => {
                return <MovieCard movie={movie} key={movie.id} />
            })}
        </Slider> 
        
    </div>
  )
}

export default MovieSlider