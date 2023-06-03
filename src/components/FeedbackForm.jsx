import React, { useState, useContext, useEffect } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackForm = () => {
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    setBtnDisabled(false);
    setText(feedbackEdit.item.text);
    setRating(feedbackEdit.item.rating);
  }, [feedbackEdit]);

  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleSumbmit = (e) => {
    e.preventDefault();

    if (text !== undefined && text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbackEdit.edit === true) {
        // update old
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        // add new
        addFeedback(newFeedback);
      }

      setText('');
      feedbackEdit.edit = false;
    }
  };

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text !== undefined && text.trim().length <= 10) {
      setMessage('Text must be atleast 10 characters !');
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(e.target.value);
  };

  return (
    <Card>
      <form onSubmit={handleSumbmit}>
        <h2>How would you rate your service with us ?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            value={text}
            type="text"
            placeholder="Write a review"
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
