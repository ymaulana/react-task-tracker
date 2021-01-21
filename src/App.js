import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Checking  E-mail",
      day: "Jan 20th at 08:00pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting",
      day: "Jan 20th at 10:00pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shoping",
      day: "Jan 20th at 01:00pm",
      reminder: false,
    },
  ]);

  //Add Task
  const addTask = (task) => {
    console.log(task);
  };

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Task To Show"
      )}
    </div>
  );
};

export default App;
