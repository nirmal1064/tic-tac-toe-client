import { Grid } from "@mui/material";
import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Board from "./pages/Board";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedSocketRoute from "./components/ProtectedSocketRoute";
import Room from "./pages/Room";

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
        </Route>
        <Route element={<ProtectedSocketRoute />}>
          <Route path="/room" element={<Room />} />
          <Route path="/game" element={<Board />} />
        </Route>
      </Routes>
    </Grid>
  );
};

export default App;
