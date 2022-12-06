import React from "react";
import Task from "./Task";

function TaskList({ handleDelete, inTaskList }) {
  console.log(inTaskList);
  if (!inTaskList) {
    return <h1>Waiting</h1>;
  }
  const displayTasks = inTaskList.map((task) => (
    <Task
      onDelete={() => handleDelete(task.text)}
      key={task.text}
      text={task.text}
      category={task.category}
    />
  ));

  return <div className="tasks">{displayTasks}</div>;
}

export default TaskList;
