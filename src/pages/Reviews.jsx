import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { api } from 'service/api.service';

import { pathImageStabilization } from '../helper/pathImageStabilization';

function Reviews() {
  const [reviews, setReviews] = useState({});

  const { id } = useParams();

  useEffect(() => {
    api.fetchFilmReviews(id).then(({ data }) => {
      setReviews(data.results);
    });
  }, [id]);

  if (Object.keys(reviews).length === 0) {
    return <p>We don't have any reviews for this movie :(</p>;
  }

  return (
    <div style={{ display: 'flex' }}>
      <ul>
        {reviews.map(comment => (
          <li key={comment.id}>
            {comment.author_details.avatar_path && (
              <img
                width="50"
                src={pathImageStabilization(comment.author_details.avatar_path)}
                alt={comment.author}
              />
            )}
            <p>
              <b>{comment.author}</b>
            </p>
            <p>{comment.content}</p>
            <p>{new Date(comment.updated_at).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;
