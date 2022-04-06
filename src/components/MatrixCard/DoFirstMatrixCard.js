import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addDoFirstTask,
  completedDoFirstTask,
  deleteDoFirstTask,
} from "../../redux/doFirstTaskSlice";
import TodoTask from "../TodoTask/TodoTask";
import "./MatrixCard.css";

const DoFirstMatrixCard = () => {
  const [doFirstTaskText, setDoFirstTaskText] = useState("");
  const { doFirstTasks } = useSelector((state) => state.doFirstTasks);

  const dispatch = useDispatch();

  const doFirstTaskHandler = (event) => {
    event.preventDefault();
    dispatch(addDoFirstTask({ title: doFirstTaskText }));
    setDoFirstTaskText("");
  };

  const deleteHandler = (id) => {
    dispatch(deleteDoFirstTask({ id }));
  };

  const toggleComplete = (id, completed) => {
    dispatch(completedDoFirstTask({ completed: !completed, id: id }));
  };

  return (
    <>
      <section className="matrix-box" style={{ border: `2px solid green` }}>
        <div className="matrix-title">
          Do First
          <span className="matrix-title-count">{doFirstTasks.length}</span>
        </div>
        <small className="matrix-subtitle">Urgent & Important</small>
        <div className="matrix-body">
          <form className="matrix-form" onSubmit={doFirstTaskHandler}>
            <input
              onChange={(e) => setDoFirstTaskText(e.target.value)}
              value={doFirstTaskText}
              placeholder="Create new task"
              type="text"
            />
            <button type="submit">Create task...</button>
          </form>
          <hr />
          {doFirstTasks.map((task) => (
            <TodoTask
              key={task.id}
              task={task}
              delHandler={deleteHandler}
              toggleHandler={toggleComplete}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default DoFirstMatrixCard;
