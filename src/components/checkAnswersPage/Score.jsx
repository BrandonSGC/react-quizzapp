export const Score = ({ score }) => {
  return (
    <div className="mb-5 text-center">
      <p>Your answers</p>
      <p>
        <span className="font-medium text-green-500">
          {score?.correctAnswers}
        </span>{" "}
        / <span>{score?.totalQuestions}</span> correct
      </p>
    </div>
  );
};
