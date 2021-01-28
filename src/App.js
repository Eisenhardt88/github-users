import "./App.css";
import { useEffect, useState } from "react";
import { getUsersListApi } from "./api";

function App() {
  const [userList, setUserList] = useState([]);
  const [perPage, setPerPage] = useState(10);

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
      {userList.map((el) => (
        <div>{el.login}</div>
      ))}
    </div>
  );
}

export default App;
