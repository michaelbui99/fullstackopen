import StatisticLine from "../statistic-line/StatisticLine";

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
          <table>
            <StatisticLine text="Good" value={goodCount} />
            <StatisticLine text="Neutral" value={neutralCount} />
            <StatisticLine text="Bad" value={badCount} />
            <StatisticLine text="Total" value={getTotalCount()} />
            <StatisticLine
              text="Average"
              value={isNaN(getAverageScore()) ? 0 : getAverageScore()}
            />
          </table>
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default Statistics;
