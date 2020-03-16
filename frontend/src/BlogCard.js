import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #d0d0d0;
  font-family: monospace;
  margin-bottom: 1.2rem;
  padding: 0.5rem;
  font-size: 16px;
`;

const DateStyle = styled.div`
  color: #6c6c6c;
`;

const EntryTitle = styled.h2`
  font-size: 1.265625rem;
`;

const EntryBody = styled.p`
`;

const BlogCard = ({date, title, body}) => {

  var bodyText;
  if (body === undefined) {
    bodyText = null;
  } else {
    bodyText = body.split('\n').map(p => (<p>{p}</p>));
  }

  return(
    <Card>
      <DateStyle>{date}</DateStyle>
      <EntryTitle>{title}</EntryTitle>
      <EntryBody>{bodyText}</EntryBody>
    </Card>
  );
}

export default BlogCard;