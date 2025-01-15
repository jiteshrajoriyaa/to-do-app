import { useDispatch } from 'react-redux';
import { toggleTaskDone } from '../redux/slices/tasksSlice';
type Task = {
  id: number;
  title: string;
  priority: string;
  isTaskDone: boolean;
};

type SingleTaskProps = {
  task: Task;
};
const SingleTask: React.FC<SingleTaskProps> = ({task}) => {

  const dispatch = useDispatch()
  const handleToggleDone = () => {
    dispatch(toggleTaskDone(task.id))
  };

  return (
    <div
    className={`flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 w-full rounded-lg border-b-2 border-gray-400 hover:bg-gray-300 font-semibold ${
      task.isTaskDone ? 'bg-gray-100' : 'bg-white'
    } dark:bg-gray-800 dark:text-white`}
  >
    <div className="flex gap-2 items-center">
      <button
        onClick={handleToggleDone}
        className={`w-6 h-6 flex items-center justify-center border rounded-full ${
          task.isTaskDone ? 'bg-green-500 text-white' : 'bg-gray-200'
        }`}
      >
        ✓
      </button>
  
      <span
        className={`text-sm sm:text-lg dark:text-white ${
          task.isTaskDone ? 'line-through text-gray-500' : 'text-gray-800'
        }`}
      >
        {task.title}
      </span>
    </div>
  
    <div
      className={`text-sm sm:text-base font-semibold dark:text-white ${
        task.isTaskDone ? 'line-through text-gray-500' : 'text-gray-800'
      }`}
    >
      {task.priority}
    </div>
  </div>
  
  )
}

export default SingleTask