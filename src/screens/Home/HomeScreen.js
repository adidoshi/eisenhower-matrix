import React from "react";
import DoFirstMatrixCard from "../../components/MatrixCard/DoFirstMatrixCard";
import ScheduleMatrixCard from "../../components/MatrixCard/ScheduleMatrixCard";
import "./HomeScreen.css";

const HomeScreen = () => {
  return (
    <>
      <h1 className="app-heading">Manage your tasks</h1>
      <main className="matrix-container">
        <DoFirstMatrixCard />
        <ScheduleMatrixCard />
      </main>
    </>
  );
};

export default HomeScreen;
