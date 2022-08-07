import { Typography } from "@mui/material";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import API from "../api";
import { useUser } from "../context/UserProvider";

const Home = () => {
  const [msg, setMsg] = useState("");
  const { state } = useUser();
  console.log(state);

  useEffect(() => {
    API.get("/api/home").then((res: AxiosResponse) => {
      setMsg(res.data.msg);
    });
  }, []);

  return (
    <>
      <Typography marginBottom={"10px"}>{msg}</Typography>
    </>
  );
};

export default Home;
