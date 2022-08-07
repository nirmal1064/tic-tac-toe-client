import { Grid } from "@mui/material";
import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Board from "./components/Board";
import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/ProtectedRoute";
import Room from "./components/Room";

const App: FC = () => {
  return (
    <Grid
      container
      direction={"column"}
      spacing={0}
      alignItems={"center"}
      justifyContent={"center"}>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/room" element={<Room />} />
          <Route path="/game" element={<Board />} />
        </Route>
      </Routes>
    </Grid>
  );
};

export default App;
