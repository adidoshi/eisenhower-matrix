import React from "react";
import MatrixCard from "../../components/MatrixCard/MatrixCard";
import "./HomeScreen.css";

const HomeScreen = () => {
  return <>
  <h1 className="app-heading">Manage your tasks</h1>
  <main className="matrix-container">
  <MatrixCard borderColor="green" title="Do First" subTitle="Urgent & important" />
  <MatrixCard borderColor="brown" title="Schedule" subTitle="Less urgent, but important" />
  </main>
  </>;
};

export default HomeScreen;
