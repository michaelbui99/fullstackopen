import React, { useState, useEffect } from "react";

const Total = ({ course }) => {
  const [exerciseSum, setExerciseSum] = useState(0);
  useEffect(() => {
    const [part1, part2, part3] = course.parts;
    let sum = course.parts.reduce((s, part) => {
      console.log(s, part);
      return (s += part.exercises);
    }, 0);
    setExerciseSum(sum);
  }, [course.parts]);

  return (
    <>
      <p style={{ fontWeight: "bold" }}>Total of {exerciseSum} exercises</p>
    </>
  );
};

export default Total;
