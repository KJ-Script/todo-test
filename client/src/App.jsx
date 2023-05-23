import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import NavBar from "./components/NavBar";
import { useState } from "react";
import TutorialPage from "./pages/TutorialPage";
import AddTaskPage from "./pages/AddTaskPage";

function App() {
  const [tab, setTab] = useState(1);
  return (
    <div className="font-outfit bg-slate-800">
      <Router>
        <div className="flex w-full">
          <NavBar setTab={setTab} tab={tab}/>
          <Routes>
            <Route exact path="/" element={<TodoPage />} />
            <Route exact path="/add" element={<AddTaskPage />} />
            <Route exact path="/tutorial" element={<TutorialPage />} />

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
