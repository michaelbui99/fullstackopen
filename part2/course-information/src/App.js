import Total from "./components/total/Total.jsx";
import Course from "./components/course/Course.jsx";
// Current part: 1b
function App() {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        id: 1,
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        id: 2,
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        id: 3,
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div className="App">
      <Course course={course} />
    </div>
  );
}

export default App;
