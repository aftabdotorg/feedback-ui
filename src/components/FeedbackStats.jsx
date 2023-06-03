import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);

  let sum = feedback.reduce((acc, curr) => {
    return (acc += curr.rating);
  }, 0); // start from 0

  let average = sum / feedback.length;
  average = average.toFixed(1); // for single decimal point

  return (
    <div className="feedback-status">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating : {isNaN(average) ? 0 : average}</h4>
      {/* ! isNaN return boolean if value if NaN  */}
    </div>
  );
};

export default FeedbackStats;
