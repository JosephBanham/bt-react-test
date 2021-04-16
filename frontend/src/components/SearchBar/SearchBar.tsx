import React from 'react';

function SearchBar() {
    const [searchTerm, setSearchTerm] = React.useState("");
    const handleInput = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setSearchTerm(event.target.value); // Used to render input to console
      console.log(searchTerm)
    };

    return (
        <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInput}
      />
    );
}

export default SearchBar;