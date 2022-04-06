import React from "react";
import "./TodoTask.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTrash } from "@fortawesome/free-solid-svg-icons";

const TodoTask = ({ task, delHandler, toggleHandler }) => {
  const { id, title, completed } = task;

  return (
    <>
      <div
        key={task.id}
        className="matrix-body-task"
        style={{ textDecoration: !completed ? "" : "line-through" }}>
        {title}{" "}
        <div>
          <span className="matrix-body-task-delete-icon">
            <FontAwesomeIcon icon={faTrash} onClick={() => delHandler(id)} />
          </span>
          <span className="matrix-task-tick-icon">
            <FontAwesomeIcon
              icon={faCheckCircle}
              onClick={() => toggleHandler(id, completed)}
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default TodoTask;
