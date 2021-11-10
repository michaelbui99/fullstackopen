import React, { useState, useEffect } from "react";

const Total = ({ course }) => {
  const [exerciseSum, setExerciseSum] = useState(0);
  useEffect(() => {
    const [part1, part2, part3] = course.parts;
    let sum = part1.exercises + part2.exercises + part3.exercises;
    setExerciseSum(sum);
  }, []);

  return (
    <>
      <p>Number of exercises {exerciseSum}</p>
    </>
  );
};

export default Total;
