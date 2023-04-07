import axios from "axios";
import { useState } from "react";

export default function Post() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const url =
    "https://basic-memo-43u0kejpt-assabiri4sr.vercel.app/api/v1/tasks";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(url, {
        title,
        description,
      });
      setTitle("");
      setDescription("");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <form className="m-5 " onSubmit={handleSubmit}>
      <div className="form-group mt-5">
        <input
          type="text"
          className="form-control m-2"
          id="exampleInputtitle1"
          aria-describedby="titleHelp"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <textarea
          type="text"
          className="form-control pb-5 m-2"
          id="exampleInputdescription1"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-check"></div>
      <button type="submit" className="btn btn-primary ">
        Submit
      </button>
    </form>
  );
}
