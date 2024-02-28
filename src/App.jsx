// import "./App.css";
import { useState } from "react";
import List from "./component/List";
import SearchInput from "./component/SearchInput";
import useDebounce from "./hooks/useDebounce";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const debouncedSearchValue = useDebounce(searchValue, 1000);

  return (
    <>
      <SearchInput seachValue={searchValue} setSearchValue={setSearchValue} />
      <List searchTerm={debouncedSearchValue} />
    </>
  );
}

export default App;
