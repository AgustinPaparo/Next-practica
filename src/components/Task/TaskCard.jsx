
const TaskCard = ({task}) => {
  return (
    <a
          href={`/home/${task.id}`}
          className=" my-5 block max-w-sm p-6 bg-slate-500 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {task.title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {task.description}
          </p>
          <p className="font-normal text-red-600 dark:text-gray-400">
            {new Date(task.createAt).toLocaleDateString()}
          </p>
        </a>
  )
}

export default TaskCard