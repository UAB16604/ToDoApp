import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/tasksSlice';
import { XMarkIcon } from '@heroicons/react/24/solid';

function EditTaskModal({ isOpen, onClose, task }) {
  const [editedTask, setEditedTask] = useState(task);
  const dispatch = useDispatch();

  useEffect(() => {
    setEditedTask(task);
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTask(editedTask));
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Edit Task</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={editedTask.title}
            onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
            placeholder="Task title"
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
          <textarea
            value={editedTask.description}
            onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
            placeholder="Task description"
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
          <input
            type="date"
            value={editedTask.dueDate}
            onChange={(e) => setEditedTask({ ...editedTask, dueDate: e.target.value })}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditTaskModal;