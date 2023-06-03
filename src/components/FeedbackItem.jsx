import { useContext, useState } from 'react';
import Card from './shared/Card';
import { FaTimes, FaRegHeart, FaHeart, FaEdit } from 'react-icons/fa';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackItem = ({ item }) => {
  const [toggleLike, setToggleLike] = useState(false);

  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
      <div className="like-btn">
        {toggleLike ? (
          <FaHeart onClick={() => setToggleLike(!toggleLike)} color="purple" />
        ) : (
          <FaRegHeart
            onClick={() => setToggleLike(!toggleLike)}
            color="purple"
          />
        )}
      </div>
    </Card>
  );
};

export default FeedbackItem;
