import MovieCard from "@/components/MovieCard"
import { screen, render } from "@testing-library/react"

const movie = {
    id: 2,
    title: "A Random Movie Title",
    poster_path: "/kqjL17yufvn9OVLyXYpvtyrFfak.jpg",
    vote_average: 8
}

it('should display an image', () => { 
    render(<MovieCard movie={movie} />)
    let movieImage = screen.getByRole("img")
    expect(movieImage).toBeVisible
})

it('should display the movie title', () => { 
    render(<MovieCard movie={movie} />)
    let movieTitle = screen.getByRole("heading")
    expect(movieTitle).toBeVisible
 })