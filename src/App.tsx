import './App.css'
import React, { useEffect, useState } from 'react'
import { useTasks } from './store/hooks/useTasks'
import type { CreateTaskData } from './store/constants/interfaces/task.interface'

const App: React.FC = () => {
  const { tasks, loading, error, fetchAllTasks, addTask, markComplete, markIncomplete, markArchived, markUnarchived, markDone, removeTask, clearTasksError } = useTasks()
  const [newTask, setNewTask] = useState<CreateTaskData>({ title: '', description: '', priority: 'normal', isComplete: false })

  const handleCreateTask = (e: React.FormEvent) => {
    e.preventDefault()
    if (newTask.title.trim()) {
      addTask(newTask)
      setNewTask({ title: '', description: '', priority: 'normal', isComplete: false })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setNewTask(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  useEffect(() => {
    fetchAllTasks()
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background-light dark:bg-background-dark text-base-light dark:text-base-dark p-4">
      <h1 className="text-4xl font-bold text-accent-light dark:text-accent-dark mb-8">Task Manager</h1>

      {error && (
        <div className="mb-4 p-2 bg-red-500 text-white rounded">
          {error}
          <button onClick={clearTasksError} className="ml-2 underline">Dismiss</button>
        </div>
      )}

      <form onSubmit={handleCreateTask} className="mb-8 p-4 border rounded bg-white dark:bg-gray-800">
        <h2 className="text-xl mb-4">Create New Task</h2>
        <input
          type="text"
          name="title"
          value={newTask.title}
          onChange={handleInputChange}
          placeholder="Title"
          className="block w-full mb-2 p-2 border rounded dark:bg-gray-700"
          required
        />
        <textarea
          name="description"
          value={newTask.description}
          onChange={handleInputChange}
          placeholder="Description"
          className="block w-full mb-2 p-2 border rounded dark:bg-gray-700"
        />
        <select
          name="priority"
          value={newTask.priority}
          onChange={handleInputChange}
          className="block w-full mb-2 p-2 border rounded dark:bg-gray-700"
        >
          <option value="low">Low</option>
          <option value="normal">Normal</option>
          <option value="important">Important</option>
        </select>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded" disabled={loading}>
          Create Task
        </button>
      </form>

      <div className="w-full max-w-2xl">
        <h2 className="text-2xl mb-4">Tasks</h2>
        {loading && <p>Loading...</p>}
        <ul className="space-y-2">
          {tasks.map(task => (
            <li key={task.id} className="p-4 border rounded bg-white dark:bg-gray-800 flex justify-between items-center">
              <div>
                <h3 className={`font-bold ${task.isComplete ? 'line-through' : ''}`}>{task.title}</h3>
                <p>{task.description}</p>
                <p>Priority: {task.priority}</p>
                {task.archived && <span className="text-red-500">Archived</span>}
              </div>
              <div className="space-x-2">
                {!task.isComplete ? (
                  <button onClick={() => markComplete(task.id)} className="px-2 py-1 bg-green-500 text-white rounded">Complete</button>
                ) : (
                  <button onClick={() => markIncomplete(task.id)} className="px-2 py-1 bg-yellow-500 text-white rounded">Incomplete</button>
                )}
                {task.archived ? (
                  <button onClick={() => markUnarchived(task.id)} className="px-2 py-1 bg-blue-500 text-white rounded">Unarchive</button>
                ) : (
                  <button onClick={() => markArchived(task.id)} className="px-2 py-1 bg-gray-500 text-white rounded">Archive</button>
                )}
                <button onClick={() => markDone(task.id)} className="px-2 py-1 bg-purple-500 text-white rounded">Done</button>
                <button onClick={() => removeTask(task.id)} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App
