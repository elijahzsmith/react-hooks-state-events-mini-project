import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [inTaskList, setInTaskList] = useState(TASKS);
  const [currCat, setCurrCat] = useState("All");

  const visibleTasks = inTaskList.filter(
    (task) => task.category === currCat || currCat === "All"
  );

  const handleDelete = (text) => {
    const listAfterDelete = inTaskList.filter((task) => task.text !== text);
    setInTaskList(listAfterDelete);
  };

  const handleCatChange = (e) => {
    const currBtn = e.target;
    setCurrCat(currBtn.textContent);
  };

  const onTaskFormSubmit = (newTask) => {
    setInTaskList([...inTaskList, newTask]);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        currCat={currCat}
        categories={CATEGORIES}
        onCatChange={(e) => handleCatChange(e)}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList
        inTaskList={visibleTasks}
        setInTaskList={setInTaskList}
        handleDelete={(text) => handleDelete(text)}
      />
    </div>
  );
}

export default App;
