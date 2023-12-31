import TaskCard from "@/components/Task/TaskCard";

async function listTasks() {
  try {
    const res = await fetch("next-js-practice-agustin.vercel.app/api/task" /*, {
      cache: "no-store",
    }*/);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
    const data = [];
    return data;
  }
}

//Para que se actualice dinamicamente con los cambios en produccion.
export const dynamic = 'force-dynamic'

const Home = async () => {
  const list = await listTasks();
  return (
    <div className="container lg:w-1/4 md:w-1/2 ">
      {list.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
};

export default Home;
