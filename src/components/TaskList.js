import React from "react";
import Task from './Task'

function TaskList({ handleDelete, inTaskList }) {
  //console.group(inTaskList)
  //console.group(handleDelete)

  // MAKES EACH TASK
  // Variable that holds the map that creates each new tax item to be rendered in the return.
  const displayTasks = inTaskList.map(task => ( <Task 
   onDelete={() => handleDelete(task.text)}
   key={task.text}
   className='All' ////---- EXPIREMENT__use_this_to_show_all_ON-START ----////
   text={task.text} 
   category={task.category}
   /> 
   ))

  // Returns the JSX that makes up the list of tasks
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
       {displayTasks}
    </div>
  );
}

export default TaskList;
