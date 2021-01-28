import "./App.css";
import { useEffect, useState } from "react";
import { getUsersListApi } from "./api";

function App() {
  const [userList, setUserList] = useState([]);
  const [perPage, setPerPage] = useState(10);

  const [isSearching, setIsSearching] = useState(false);
  const debouncedPerPage = useDebounce(perPage, 1000);

  function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);
    return debouncedValue;
  }

  useEffect(() => {
    if (debouncedPerPage) {
      setIsSearching(true);
      getUsersListApi(debouncedPerPage).then((userList) => {
        setIsSearching(false);
        setUserList(userList);
      });
    } else {
      setUserList([]);
    }
  }, [debouncedPerPage]);

  useEffect(() => {
    const params = {
      perPage: perPage,
      since: 1,
    };
    getUsersListApi(params).then((res) => setUserList(res));
  }, []);

  useEffect(() => {
    const params = {
      perPage: perPage,
      since: 1,
    };
    getUsersListApi(params).then((res) => setUserList(res));
  }, [perPage]);

  return (
    <div className="App">
      <input
        type="number"
        onChange={(e) => setPerPage(e.target.value)}
        value={perPage}
      ></input>
      {isSearching && <div>Searching ...</div>}
      {userList.map((el) => (
        <div>{el.login}</div>
      ))}
    </div>
  );
}

export default App;
