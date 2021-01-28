import "./App.css";
import { useEffect, useState } from "react";
import { getUsersListApi } from "./api";
import {useDebounce} from './hooks/useDebounce'

function App() {
  const [userList, setUserList] = useState([]);
  const [perPage, setPerPage] = useState(10);

  const [isSearching, setIsSearching] = useState(false);
  const debouncedPerPage = useDebounce(perPage, 1000);

  const SINCE = 1

  useEffect(() => {
    const params = {
      perPage: perPage,
      since: 1,
    };
    getUsersListApi(params).then((res) => setUserList(res));
  }, []);


  useEffect(() => {
    if (debouncedPerPage) {
      setIsSearching(true);
      
      getUsersListApi({perPage: debouncedPerPage, since: SINCE }).then((userList) => {
        setIsSearching(false);
        setUserList(userList);
      });
    } else {
      setUserList([]);
    }
  }, [debouncedPerPage]);

  return (
    <div className="App">
      <input
        type="number"
        onChange={(e) => setPerPage(e.target.value)}
        value={perPage}
      ></input>
      {isSearching ? <div>Searching ...</div> : userList.map((el) => (
        <div>{el.login}</div>
      ))}
    </div>
  );
}

export default App;
