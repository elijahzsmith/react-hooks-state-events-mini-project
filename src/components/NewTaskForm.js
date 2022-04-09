import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState('')
  const [category, setCategory] = useState('Code')

  const catsForNewTask = categories.slice(1)
  const catOptions = catsForNewTask.map(category => (
      <option key={category}>{category}</option>
    )
  )

  const newTask = {
    key: uuid(),
    text: text,
    category: category
  }

  const handleNewTaskText = (e) => {
    console.log(e.target.value)
    setText(e.target.value)
    
  }

  const handleNewTaskCat = (e) => {
    setCategory(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //console.log('submitted')
    onTaskFormSubmit(newTask)
  }


  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleNewTaskText}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleNewTaskCat}>
          {/* render <option> elements for each category here */}
          {catOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
