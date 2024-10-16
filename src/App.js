import React, { useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import { store } from './redux/store';
import TaskList from './components/TaskList';
import AddTaskModal from './components/AddTaskModal';
import ThemeToggle from './components/ThemeToggle';
import { PlusIcon } from '@heroicons/react/24/solid';

function AppContent() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const theme = useSelector(state => state.theme);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors duration-300">
        <div className="container mx-auto p-4">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">My Tasks</h1>
          <ThemeToggle />
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg transition-colors duration-300"
          >
            <PlusIcon className="h-8 w-8" />
          </button>
          <TaskList />
          <AddTaskModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;