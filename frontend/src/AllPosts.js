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

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch('/allposts', {
        method: 'GET'
      });

      console.log(response);
      const data = await response.json();
      console.log('data', data);
      setPosts(data);
    }

    getPosts();
  }, []);

  const listOfCards = posts.map((entry) => {    
    // change epoch into readable date
    var readableDate = new Date(entry.date);
    var readableDateString = String(readableDate);

    return <BlogCard key={entry._id} date={readableDateString} title={entry.title} body={entry.body} />
  }); 

  return(
    <Container>
      {listOfCards}
    </Container>
  );
}

export default AllPosts;