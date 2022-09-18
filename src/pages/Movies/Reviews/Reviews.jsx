import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { api } from 'service/api.service';

import { pathImageStabilization } from '../../../helper/pathImageStabilization';
import {
  List,
  Item,
  Image,
  Info,
  UserName,
  DateCreate,
  Comment,
} from './Reviews.styles';

const Reviews = () => {
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
      <List>
        {reviews.map(comment => (
          <Item key={comment.id}>
            <Image
              width="70"
              height="70"
              src={pathImageStabilization(comment.author_details.avatar_path)}
              alt={comment.author}
            />

            <Info>
              <UserName>{comment.author}</UserName>

              <DateCreate>
                {new Date(comment.updated_at).toLocaleDateString()}
              </DateCreate>
            </Info>

            <Comment>{comment.content}</Comment>
          </Item>
        ))}
      </List>
    </div>
  );
};

export default Reviews;
