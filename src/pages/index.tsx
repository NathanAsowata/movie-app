import MovieSlider from "@/components/MovieSlider"
import Head from "next/head"

const Home = () => {
  return (
    <>
      <Head>
        <title>Movies </title>
        <link rel="shortcut icon" href="icon.png" type="image/x-icon" />
      </Head>
      
      <main className="bg-slate-800 text-white pt-5 min-h-[85vh] pb-10">
        <header className="bg-[url('../../public/hero-image.jpg')] bg-no-repeat bg-cover bg-center h-[400px] grid place-content-center">
          <h1 className="shadow-md shadow-gray-400 bg-slate-900 p-3 mx-2 text-2xl lg:text-4xl text-center font-medium">
            Explore Millions of Movies for You
          </h1>
        </header>

        <MovieSlider 
          name={"Trending Movies"}
          link={`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.NEXT_PUBLIC_API_KEY}`}
          queryKey={"trendingMovies"}
        />

        <MovieSlider 
          name={"Upcoming Movies"}
          link={`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`}
          queryKey={"upcomingMovies"}
        />

        <MovieSlider 
          name={"Popular Movies"}
          link={`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`}
          queryKey={"popularMovies"}
        />

        <MovieSlider 
          name={"Top Rated Movies"}
          link={`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`}
          queryKey={"topRatedMovies"}
        />
      </main>
    </>
  )
}

export default Home