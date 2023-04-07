import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function EditTask() {
  const { id } = useParams();
  const url = `https://basic-memo-43u0kejpt-assabiri4sr.vercel.app/api/v1/tasks/${id}`;
  const [email, setEamil] = useState();
  const [password, setPassword] = useState();
  const [edited, setEdited] = useState(false);

  const fetchData = async () => {
    try {
      const data = await axios(url);
      setEamil(data.data.task.title);
      setPassword(data.data.task.description);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(url, {
        title: email,
        description: password,
      });
      setEdited(true);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container">
      <form className="m-5 " onSubmit={handleSubmit}>
        <div className="form-group mt-5">
          <input
            type="text"
            className="form-control m-2"
            id="exampleInputEmail1"
            placeholder="title"
            value={email}
            onChange={(e) => setEamil(e.target.value)}
          />
        </div>
        <div className="form-group">
          <textarea
            type="text"
            className="form-control pb-5 m-2"
            id="exampleInputPassword1"
            placeholder="description"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn btn-primary m-2">
            Submit
          </button>
          {edited && <p class="text-success">edit has been successed</p>}
        </div>
      </form>
      <Link to={"/"} class="btn btn-secondary row justify-content-md-center">
        Go to the home page
      </Link>
    </div>
  );
}
