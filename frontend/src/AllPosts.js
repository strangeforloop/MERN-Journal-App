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


  console.log('all posts', posts);

  // for each item in posts, create a card
  const listOfCards = posts.map((post) => {
    return <BlogCard key={post._id} date={post.date} title={post.title} body={post.body} />
  }); 

  console.log('posts: ', posts);
  return(
    <Container>
      {listOfCards}
    </Container>
  );
}

export default AllPosts;