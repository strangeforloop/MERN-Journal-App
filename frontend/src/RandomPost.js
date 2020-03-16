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
  // var bodyText;
  // if (entry.body === undefined) {
  //   bodyText = null;
  // } else {
  //   bodyText = entry.body.split('\n').map(p => (<p>{p}</p>));
  // }
  var readableDate = new Date(entry.date);
  var readableDateString = String(readableDate);

  return (
    <Container>
      <BlogCard key={entry._id} date={readableDateString} title={entry.title} body={entry.body} />
    </Container>
  );
}

export default RandomPost;