import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import Button from '@material-ui/core/Button';

const AllPosts = ({posts}) => {
  // const getData = async () => {
  //   const response = await fetch('/allposts', {
  //     method: 'GET'
  //   });

  //   const data = await response.json();
  //   console.log(data);
  // }

  // getData();

  // console.log('inside allposts component: ', posts);
  console.log('all posts', posts);

  // for each item in posts, create a card
  const listOfCards = posts.map((post) => {
    return <BlogCard key={post._id} date={post.date} title={post.title} body={post.body} />
  }); 

  console.log('posts: ', posts);
  return(
    <div>
      {listOfCards}
    </div>
  );
}

export default AllPosts