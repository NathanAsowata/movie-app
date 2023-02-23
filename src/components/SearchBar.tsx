import { useRouter } from "next/router"
import { FormEvent, useState } from "react"
import { BsSearch } from "react-icons/bs"



const SearchBar = () => {

    // Store user input in a useState hooks
    const [userInput, setUserInput] = useState("")
    
    // This hook helps to move the search request to the search result page
    const router = useRouter()

    // This function handles search
    const handleSearch = (e:FormEvent) => {
        // Prevent the page from reloading
        e.preventDefault()
        
        // Send the user request to the search result page for processing 
        router.push(`/search/${userInput}`)

    }

  return (
    <form onSubmit={handleSearch}>
        <input 
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)} 
        />
        <button type={"submit"}>
            <BsSearch />
        </button>
    </form>
  )
}

export default SearchBar