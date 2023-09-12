import TaskCard from "@/components/Task/TaskCard";

async function listTasks() {
  try {
    const res = await fetch("nextproject-1st253mw9-agustinpaparo.vercel.app/api/task", {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
    const data = [];
    return data;
  }
}

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
