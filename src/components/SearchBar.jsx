// import { useState } from "react";

function SearchBar(props) {
//   let [searchTerm, setSearchTerm] = useState("");

  return (
    <form>
      <input
        type="text"
        placeholder="Search Here"
        onChange={(e) => props.handleSearch(e, e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}

export default SearchBar;

//     <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
//       <input
//         type="text"
//         placeholder="Search Here"
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <input type="submit" />
//     </form>
