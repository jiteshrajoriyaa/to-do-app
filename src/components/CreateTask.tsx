import React, { useState } from 'react'
import Button from './Button'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/slices/tasksSlice';

const CreateTask: React.FC = () => {

  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState('')

  const dispatch = useDispatch();
  const handleAddTask = () => {
    if (title && priority) {
      dispatch(addTask({ title, priority, isTaskDone: false}));
      setTitle(''); 
      setPriority('');
    } else {
      alert('Please fill in both fields.');
    }
  }
  return (
    <div className="p-4 flex flex-col gap-6 sm:gap-8 h-auto sm:h-1/4 bg-custom-green rounded-lg">
  <input
    type="text"
    placeholder="Add task"
    value={title}
    className="w-full p-2 bg-transparent dark:text-white placeholder-green-800 placeholder-italic text-gray-800 focus:outline-none"
    onChange={(e) => setTitle(e.target.value)}
  />
  <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-0">
    <select
      value={priority}
      onChange={(e) => setPriority(e.target.value)}
      className="w-full sm:w-auto dark:bg-gray-800 dark:text-white px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="" disabled>
        Select Priority
      </option>
      <option value="Low">Low</option>
      <option value="Medium">Medium</option>
      <option value="High">High</option>
    </select>

    <Button label="ADD TASK" onClick={handleAddTask} />
  </div>
</div>

  )
}

export default CreateTask