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

const RandomPost = () => {
  const [entry, setEntry] = useState('');

  useEffect(() => {
    const getRandomPost = async () => {
      const response = await fetch('/entry', {
        method: 'GET'
      });

      const data = await response.json();
      console.log(data);
      setEntry(data);
    }

    getRandomPost();
  }, []);

  var readableDate = new Date(entry.date);
  var readableDateString = String(readableDate);

  return (
    <Container>
      <BlogCard key={entry._id} date={readableDateString} title={entry.title} body={entry.body} />
    </Container>
  );
}

export default RandomPost;