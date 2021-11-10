const Statistics = ({ goodCount, neutralCount, badCount }) => {
  return (
    <div>
      <h1>Statistics</h1>
      <p>Good {goodCount}</p>
      <p>Neutral{neutralCount}</p>
      <p>Bad {badCount}</p>
    </div>
  );
};

export default Statistics;
