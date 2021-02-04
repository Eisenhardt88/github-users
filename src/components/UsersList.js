import React from "react";
import { useEffect, useState } from "react";
import { getUsersListApi } from "../api";
import { useDebounce } from "../hooks/useDebounce";
import { Link } from "react-router-dom";

export const UsersList = (props) => {
  const [userList, setUserList] = useState([]);
  const [perPage, setPerPage] = useState(10);
  const [since, setSince] = useState(1);

  const [isSearching, setIsSearching] = useState(false);
  const debouncedPerPage = useDebounce(perPage, 1000);
  const debouncedSince = useDebounce(since, 1000);

  useEffect(() => {
    const params = {
      perPage: perPage,
      since: since,
    };
    getUsersListApi(params).then((res) => setUserList(res));
  }, []);

  useEffect(() => {
    if (debouncedPerPage && debouncedSince) {
      setIsSearching(true);

      getUsersListApi({
        perPage: debouncedPerPage,
        since: debouncedSince,
      }).then((userList) => {
        setIsSearching(false);
        setUserList(userList);
      });
    } else {
      setUserList([]);
    }
  }, [debouncedPerPage, debouncedSince]);

  return (
    <div>
      <div className="input">
        <input
          type="number"
          onChange={(e) => setPerPage(e.target.value)}
          value={perPage}
        ></input>
        <input
          type="number"
          onChange={(e) => setSince(e.target.value)}
          value={since}
        ></input>
      </div>
      {isSearching ? (
        <div>Searching ...</div>
      ) : (
        <div
          className={props.position === "center" ? "userList" : "userListLeft"}
        >
          {userList.map((el) => (
            <Link className="login" to={`/user/${el.id}`}>
              {el.login}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
