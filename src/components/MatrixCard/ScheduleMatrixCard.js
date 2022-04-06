import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addScheduleTask,
  completedScheduleTask,
  deleteScheduleTask,
} from "../../redux/scheduleTaskSlice";
import TodoTask from "../TodoTask/TodoTask";
import "./MatrixCard.css";

const ScheduleMatrixCard = () => {
  const [scheduleTaskText, setScheduleTaskText] = useState("");
  const { scheduledTasks } = useSelector((state) => state.scheduledTasks);

  const dispatch = useDispatch();

  const scheduleTaskHandler = (event) => {
    event.preventDefault();
    dispatch(addScheduleTask({ title: scheduleTaskText }));
    setScheduleTaskText("");
  };

  const deleteScheduleTaskHandler = (id) => {
    dispatch(deleteScheduleTask({ id }));
  };

  const toggleComplete = (id, completed) => {
    dispatch(completedScheduleTask({ completed: !completed, id: id }));
  };
  return (
    <>
      <section className="matrix-box" style={{ border: `2px solid brown` }}>
        <div className="matrix-title">
          Scehdule
          <span className="matrix-title-count">{scheduledTasks.length}</span>
        </div>
        <small className="matrix-subtitle">Less urgent, but important</small>
        <div className="matrix-body">
          <form className="matrix-form" onSubmit={scheduleTaskHandler}>
            <input
              onChange={(e) => setScheduleTaskText(e.target.value)}
              value={scheduleTaskText}
              placeholder="Create new task"
              type="text"
            />
            <button type="submit">Create task...</button>
          </form>
          <hr />
          {scheduledTasks.map((task) => (
            <TodoTask
              key={task.id}
              task={task}
              delHandler={deleteScheduleTaskHandler}
              toggleHandler={toggleComplete}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ScheduleMatrixCard;
