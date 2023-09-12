"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NewPage = ({params}) => {
  const router = useRouter();

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  useEffect(()=>{
    if (params.id){
      fetch(`/api/task/${params.id}`)
    .then(res => res.json())
    .then(data =>{
      setTitle(data.title)
      setDescription(data.description)
    })
    }
  },[])

  const onSubmit = async (e) => {
    e.preventDefault();

    if (params.id) {
      const res = await fetch(`nextproject-1st253mw9-agustinpaparo.vercel.app/api/task/${params.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title,
          description
        }),
        headers:{
          'Content-Type':'application/json'
        },
      })
      const data = await res.json()

      console.log(data);
    } else {
      const res = await fetch("nextproject-1st253mw9-agustinpaparo.vercel.app/api/task", {
        method: "POST",
        body: JSON.stringify({
          title,
          description,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
    }

    router.push("/home");
  };

  return (
    <form
      className="lg:w-1/4 md:w-1/2 bg-opacity-90 bg-red-500 p-10 rounded-xl flex flex-col flex-nowrap justify-center"
      onSubmit={onSubmit}
    >
      <div className="mb-6">
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-bold dark:text-gray-900 text-white"
        >
          Title:
        </label>
        <input
          type="title"
          id="title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your title:"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
      </div>

      <div>
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-bold dark:text-gray-900 text-white"
        >
          Description
        </label>
        <textarea
          id="description"
          rows="3"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Leave a task..."
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
      </div>

      <button
        type="submit"
        className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default NewPage;
