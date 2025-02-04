import { Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
// import Menu from "./Menu";
import { Link } from "react-router-dom";
import Student from "./Student";
import Hello from "./Hello";
import { NavLink } from "react-router-dom";
const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="about">about</Link>
          <NavLink
            style={({ isActive }) => {
              return isActive ? { color: "red" } : {};
            }}
            to="/student/1"
          >
            student
          </NavLink>
        </li>
        <li>
          <Link to="student/1">student</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="hello" element={<Hello></Hello>}></Route>
        </Route>
        <Route path="/student/:id" element={<Student></Student>}></Route>
      </Routes>
    </div>
  );
};

export default App;
