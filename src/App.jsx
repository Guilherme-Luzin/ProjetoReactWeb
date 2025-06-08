import { useEffect, useState } from 'react';
import './App.css';
import AddTask from './Components/AddTask';
import Task from './Components/Task';
import {v4} from 'uuid';
import Title from './Components/Title';

function App() {
  const [tasks, setTask] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  );

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId){
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }

      return task;
    });
    setTask(newTasks);
  }

  function onAddTaskSubmit (title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false
    };

    setTask([...tasks, newTask]);
  }

  function onDeleteTaskClick(taskId){
    let newTasks = tasks.filter((task) => task.id !== taskId);
    setTask(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>
          Gerenciador de tarefas
        </Title>
        <AddTask 
          onAddTaskSubmit={onAddTaskSubmit}/>
        <Task 
          tasks={tasks} 
          onTaskClick={onTaskClick} 
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  )
}

export default App
