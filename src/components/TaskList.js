import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

function TaskList() {
  const tasks = useSelector(state => state.tasks);

  return (
    <div className="mt-8 space-y-4">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;