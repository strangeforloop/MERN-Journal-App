import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import styled from 'styled-components';

const Container = styled.section`
  margin: 1rem 1rem;

  @media(min-width: 768px) {
    margin: 1rem 2rem;  
  }
  
  @media(min-width: 768px) {
    margin: 1rem 3rem;  
  }

  @media(min-width: 1224px) {
    margin: 1rem 8rem;  
  }
`;

const Card = styled.div`
  border: 1px solid #d0d0d0;
  font-family: monospace;
  margin-bottom: 1.2rem;
  padding: 0.5rem;
`;

const Date = styled.div`
  color: #a29a98;
`;

const EntryTitle = styled.h2`
`;

const EntryBody = styled.p`
`;

const RandomPost = () => {
  const [entry, setEntry] = useState('');

  useEffect(() => {
    const getRandomPost = async () => {
      console.log('rendering random post');

      const response = await fetch('/entry', {
        method: 'GET'
      });

      console.log('response is: ', response);
      const data = await response.json();
      console.log(data);
      setEntry(data);
    }

    getRandomPost();
  }, []);

  // handle initial case when body is "" and there is no body to parse
  var bodyText;
  if (entry.body === undefined) {
    bodyText = null;
  } else {
    bodyText = entry.body.split('\n').map(p => (<p>{p}</p>));
  }

  return (
    <Container>
      <Card>
        <Date>{entry.date}</Date>
        <EntryTitle>{entry.title}</EntryTitle>
        <EntryBody>{bodyText}</EntryBody>
      </Card>  
    </Container>
  );
}

export default RandomPost;