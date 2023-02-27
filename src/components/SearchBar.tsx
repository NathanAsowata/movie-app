import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  // Store user input in a useState hooks
  const [userInput, setUserInput] = useState("");

  // This hook helps to move the search request to the search result page
  const router = useRouter();

  // This function handles search
  const handleSearch = (e: FormEvent) => {
    // Prevent the page from reloading
    e.preventDefault();

    // Send the user request to the search result page for processing
    router.push(`/search/${userInput}`);

    // Make the search bar empty
    setUserInput("");
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center rounded-full">
      <input
        type="text"
        placeholder="Find your favorite movie"
        required
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        className="bg-slate-300 focus:bg-white h-8 w-24 sm:h-10 px-2 sm:px-4 md:w-[350px] sm:w-[500px] rounded-l-full outline-none"
      />
      <button
        type={"submit"}
        className="bg-slate-300 h-8 sm:h-10 px-2 sm:px-4 rounded-r-full outline-none"
      >
        <BsSearch className="text-xl" />
      </button>
    </form>
  );
};

export default SearchBar;
