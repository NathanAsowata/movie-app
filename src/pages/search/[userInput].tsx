import MovieCard from "@/components/MovieCard"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import Head from "next/head"
import { useRouter } from "next/router"
import ContentLoader from "react-content-loader"


interface movieCard {
    id: number,
    title: string,
    poster_path: string,
    vote_average: number
}


const SearchResult = () => {

    const router = useRouter()
    const { userInput } = router.query

    const fetchData = async (query:any) => {
        let fetchResult = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en`)
        return fetchResult.data
    }

    const {isLoading, isError, data} = useQuery({
        queryKey: ["search", userInput],
        queryFn: () => fetchData(userInput)
    })

    if(isLoading) {
        // This is a shimmer effect for the loading state
        return ( 
            <>
                <Head>
                    <title>Loading...</title>
                    <link rel="shortcut icon" href="icon.png" type="image/x-icon" />
                </Head>
                <main className="grid place-content-center min-h-[95vh] bg-slate-800">
                    <ContentLoader
                        speed={2}
                        width={300}
                        height={100}
                        viewBox="0 0 500 60"
                        backgroundColor="#1E293B"
                        foregroundColor="#0F172A"
                        uniqueKey="shimmer"
                        className="flex"
                    >
                        <rect x="0" y="0" rx="3" ry="3" width="500" height="250" />
                    </ContentLoader>
                </main>
            </>
            )
    }

    if(isError) {
        return ( 
            <>
                <Head>
                    <title> Search Results</title>
                    <link rel="shortcut icon" href="icon.png" type="image/x-icon" />
                </Head>
                <main className="grid place-content-center min-h-[95vh] bg-slate-800">
                    <h1 className="text-white">An error occured. Try again in a few minutes</h1>
                </main>
            </>
            )
    }

    if(data.results.length === 0){
       return ( 
        <>
            <Head>
                <title>No Results Found</title>
                <link rel="shortcut icon" href="icon.png" type="image/x-icon" />
            </Head>
            <main className="grid place-content-center min-h-[95vh] bg-slate-800">
                <h1 className="text-white">We could not find any result. Please search for another movie</h1>
            </main>
        </>
        )
    }


  return (
    <>
        <Head>
            <title> Search Results</title>
            <link rel="shortcut icon" href="/icon.png" type="image/x-icon" />
        </Head>
        <main className="flex flex-wrap min-h-[85vh] bg-slate-800">
            {data.results.map((movie:movieCard) => {
                // Only display movies with poster images
                if(movie.poster_path !== null) return <MovieCard movie={movie} key={movie.id} />
            })}
        </main>
    </>
  )
}

export default SearchResult