import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

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

const BlogCard = ({date, title, body}) => {
  const classes = useStyles();

  return(
    <Card>
      <Date>{date}</Date>
      <EntryTitle>{title}</EntryTitle>
      <EntryBody>{body.split('\n').map(p => (<p>{p}</p>))}</EntryBody>
    </Card>
  );
}

export default BlogCard;