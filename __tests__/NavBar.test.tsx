import NavBar from "@/components/NavBar"
import { render, screen } from "@testing-library/react"


// Mock useRouter hook
jest.mock("next/router", () => ({
    useRouter: jest.fn()
}))


it('should contain a nav element', () => { 
    render(<NavBar />)
    const navElement = screen.getByRole("navigation")
    expect(navElement).toBeInTheDocument
})

it('should render the logo', () => { 
    render(<NavBar />)
    const logo = screen.getByRole("img")
    expect(logo).toBeVisible
})

it('should contain a link to the homepage', () => { 
    render(<NavBar />)
    const linkToHomePage = screen.getByRole("link")
    expect(linkToHomePage).toBeInTheDocument
 })