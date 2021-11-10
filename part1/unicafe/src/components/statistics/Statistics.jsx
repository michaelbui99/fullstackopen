const Statistics = ({ goodCount, neutralCount, badCount }) => {
  const getTotalCount = () => {
    return goodCount + neutralCount + badCount;
  };

  const getAverageScore = () => {
    const weightedCount = goodCount * 1 + neutralCount * 0 + badCount * -1;
    console.log("TotalCount", getTotalCount());
    return weightedCount / getTotalCount();
  };

  return (
    <div>
      <h1>Statistics</h1>
      {getTotalCount() > 0 ? (
        <>
          <p>Good {goodCount}</p>
          <p>Neutral {neutralCount}</p>
          <p>Bad {badCount}</p>
          <p>Total {getTotalCount()}</p>
          <p>Average {isNaN(getAverageScore()) ? 0 : getAverageScore()}</p>
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default Statistics;
