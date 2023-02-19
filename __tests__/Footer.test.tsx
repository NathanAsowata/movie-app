import Footer from "@/components/Footer"
import { render, screen } from "@testing-library/react"

it('should contain a footer element', () => { 
    render(<Footer />)
    const footerElement = screen.getByRole("footer")
    expect(footerElement).toBeInTheDocument
})

it('should contain 2 links', () => { 
    render(<Footer />)
    const linkElements = screen.getAllByRole("link")
    expect(linkElements).toHaveLength(2)
})

it('should contain the current year', () => { 
    render(<Footer />)
    const copyrightYear = screen.getByTestId("date")
    expect(copyrightYear.innerHTML).toBe(new Date().getFullYear().toString())
})