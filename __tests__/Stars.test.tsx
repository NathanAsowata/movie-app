import Stars from "@/components/Stars"
import { screen, render} from "@testing-library/react"

it('should display the appropriate rating', () => { 
    render(<Stars vote_average={8} />)
    let userRatings = screen.getByTestId("4")
    expect(userRatings).toBeVisible
})