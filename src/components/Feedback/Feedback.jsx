export default function Feedback({
  feedback: { good, neutral, bad },
  totalFeedback,
  positive,
}) {
  return (
    <>
      <div>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {totalFeedback}</li>
          <li>Positive:{positive}%</li>
        </ul>
      </div>
    </>
  );
}
