import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import EditTask from "./pages/editTask";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/:id" element={<EditTask />}></Route>
      </Routes>
    </div>
  );
}

export default App;
