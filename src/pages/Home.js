import { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";
import { Link } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const data = await axios(
        "https://basic-memo-43u0kejpt-assabiri4sr.vercel.app/api/v1/tasks"
      );
      setData(data.data.task);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  });
  return (
    <div className="pt-3 m-2">
      <Post />
      {data
        ?.map((data) => {
          const deleteTask = async (e) => {
            e.preventDefault();
            try {
              await axios.delete(
                `https://basic-memo-43u0kejpt-assabiri4sr.vercel.app/api/v1/tasks/${data._id}`
              );
            } catch (error) {
              console.log(error.response);
            }
          };
          return (
            <div key={data._id} className="card m-2">
              <div className="card-body">
                <h3>{data.title}</h3>
                <h4>{data.description}</h4>
                <Link
                  to={`/${data._id}`}
                  type="submit"
                  className="btn btn-primary m-2"
                >
                  Edit
                </Link>
                <button
                  type="submit"
                  className="btn btn-primary m-2"
                  onClick={deleteTask}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })
        .reverse()}
    </div>
  );
}
