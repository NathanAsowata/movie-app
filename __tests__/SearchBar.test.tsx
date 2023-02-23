import { screen, render, fireEvent } from "@testing-library/react"
import SearchBar from "@/components/SearchBar"


// Mock useRouter hook
jest.mock("next/router", () => ({
    useRouter: jest.fn()
}))

// This method allows me to mock router.push() while testing the search bar logic 
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('SearchBar component User Interface', () => { 
    
    it('should contain a search form', () => { 
        const {container} = render(<SearchBar />)
        expect(container).toBeInTheDocument
    })

    it('should contain an input field', () => { 
        render(<SearchBar />)
        let inputField = screen.getByPlaceholderText("Find your favorite movie")
        expect(inputField).toBeInTheDocument
    })

    it('should should contain a button', () => { 
        render(<SearchBar />)
        let button = screen.getByRole("button")
        expect(button).toBeInTheDocument
     })

})

describe('SearchBar component logic', () => { 

    it('should send the search input to the search result page', () => { 
        const mockPush = jest.fn()
        useRouter.mockImplementation(() => ({
            push: mockPush
        }))

        render(<SearchBar />)

        // Get the input field
        let inputField = screen.getByPlaceholderText("Find your favorite movie")
        // Get the button
        let button = screen.getByRole("button")

        // Fill the search form
        fireEvent.change(inputField, { target: {value: "plane"}})
        // Click the button
        fireEvent.click(button)

        // Expect router.push to be have been called
        expect(mockPush).toHaveBeenCalledWith("/search/plane")
     })

     it('should not allow the user to send an empty request', () => { 
        
        const mockPush = jest.fn()
        
        useRouter.mockImplementation(() => ({
            push: mockPush
        }))

        render(<SearchBar />)

        // Get the button
        let button = screen.getByRole("button")

        // Click the button
        fireEvent.click(button)

        // Expect router.push to be have been called
        expect(mockPush).not.toHaveBeenCalledWith("/search/plane")
      })
 })