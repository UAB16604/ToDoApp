import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask, deleteTask } from '../redux/tasksSlice';
import { format } from 'date-fns';
import { PencilIcon, TrashIcon, CheckIcon } from '@heroicons/react/24/solid';
import EditTaskModal from './EditTaskModal';

function TaskItem({ task }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleToggleComplete = () => {
    dispatch(editTask({ ...task, completed: !task.completed }));
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-center">
        <button
          onClick={handleToggleComplete}
          className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center ${
            task.completed
              ? 'bg-green-500 border-green-500'
              : 'border-gray-400 dark:border-gray-600'
          }`}
        >
          {task.completed && <CheckIcon className="w-4 h-4 text-white" />}
        </button>
        <div className="flex-grow">
          <h3 className={`text-lg font-semibold mb-1 ${
            task.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-800 dark:text-white'
          }`}>
            {task.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">{task.description}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Due: {task.dueDate ? format(new Date(task.dueDate), 'PP') : 'No due date'}
          </p>
        </div>
        <div className="flex space-x-2">
          <button onClick={() => setIsEditModalOpen(true)} className="text-blue-500 hover:text-blue-600 transition-colors duration-300">
            <PencilIcon className="w-5 h-5" />
          </button>
          <button onClick={handleDelete} className="text-red-500 hover:text-red-600 transition-colors duration-300">
            <TrashIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
      <EditTaskModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} task={task} />
    </>
  );
}

export default TaskItem;