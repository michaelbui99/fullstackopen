import Header from "../header/Header";
import Content from "../content/Content";
import Total from "../total/Total";
const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default Course;
