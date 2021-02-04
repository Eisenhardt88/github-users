import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserApi } from "../api";

export const User = () => {
  const { id } = useParams();

  const [user, setUser] = useState();

  useEffect(() => {
    const params = {
      userId: id,
    };
    getUserApi(params).then((res) => setUser(res));
  }, [id]);
  return (
    <div>
      <div> Created at: {user?.created_at}</div>
    </div>
  );
};
