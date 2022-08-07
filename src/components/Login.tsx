import { Alert, Typography } from "@mui/material";
import { AxiosError, AxiosResponse } from "axios";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import { useUser } from "../context/UserProvider";
import { ActionType } from "../reducers/userReducer";
import GridItemButton from "./GridItemButton";
import GridTextField from "./GridTextField";

const Login: FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { dispatch } = useUser();
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) {
      setErrorMsg("Please Fill the fields");
      return;
    }
    const body = JSON.stringify({ username, password });
    API.post("/api/login", body)
      .then((res: AxiosResponse) => {
        const { data } = res;
        console.log(data);
        dispatch({
          type: ActionType.Login,
          payload: { ...data, userId: data.id }
        });
        navigate("/");
      })
      .catch((err: AxiosError) => {
        console.error(err);
      });
  };

  return (
    <>
      <Typography marginBottom={"10px"}>Login</Typography>
      <GridTextField
        value={username}
        label="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <GridTextField
        value={password}
        label="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <GridItemButton onClick={handleLogin} value="Login" />
      {errorMsg !== "" && (
        <Alert
          onClose={() => {
            setErrorMsg("");
          }}
          severity="error">
          {errorMsg}
        </Alert>
      )}
    </>
  );
};

export default Login;
