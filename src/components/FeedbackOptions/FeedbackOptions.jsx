import { BtnContainer } from './FeedbackOptions.styled';
export function FeedbackOptions({ positive, negative, neutral }) {
  return (
    <>
      <BtnContainer>
        <button onClick={positive}>Good</button>
        <button onClick={neutral}>Neutral</button>
        <button onClick={negative}>Bad</button>
      </BtnContainer>
    </>
  );
}
