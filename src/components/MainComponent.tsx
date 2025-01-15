import { useSelector } from "react-redux";
import CreateTask from "./CreateTask";
import SingleTask from "./SingleTask";
import { RootState } from "../redux/store";

const MainComponent: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const sortedTasks = () => {
    const uncompletedTasks = tasks.filter((task) => !task.isTaskDone);
    const completedTasks = tasks.filter((task) => task.isTaskDone);

    const sortedUncompletedTasks = uncompletedTasks.sort((a, b) => {
      const priorityOrder = ["High", "Medium", "Low"];
      return priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority);
    });

    return [...sortedUncompletedTasks, ...completedTasks];
  };

  return (
    <main className="bg-gray-100 p-4 sm:p-6 dark:bg-gray-800 dark:text-white">
      <CreateTask />
      <div className="flex flex-col gap-4 mt-4">
        {sortedTasks().map((t) => (
          <SingleTask key={t.id} task={t} />
        ))}
      </div>
    </main>
  );
};

export default MainComponent;
