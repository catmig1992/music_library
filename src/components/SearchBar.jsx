import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

function SearchBar() {
  const { term, handleSearch } = useContext(SearchContext);

  return (
    <form>
      <input ref={term} type="text" placeholder="Search Here" />
      <button onClick={(e) => handleSearch(e, term.current.value)}>Submit</button>
    </form>
  );
}

export default SearchBar;

// // import { useState } from "react";

// function SearchBar(props) {
// //   let [searchTerm, setSearchTerm] = useState("");

//   return (
//     <form>
//       <input
//         type="text"
//         placeholder="Search Here"
//         onChange={(e) => props.handleSearch(e, e.target.value)}
//       />
//       <input type="submit" />
//     </form>
//   );
// }

//     <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
//       <input
//         type="text"
//         placeholder="Search Here"
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <input type="submit" />
//     </form>
