import ContentPart from "../content-part/ContentPart";

const Content = ({ course }) => {
  return (
    <>
      {course.parts.map((p) => (
        <ContentPart partName={p.name} exercises={p.exercises} key={p.id} />
      ))}
    </>
  );
};

export default Content;
