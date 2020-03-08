import React, { useState, useEffect } from 'react';
import { palette, spacing } from '@material-ui/system';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AllPosts from './AllPosts';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { positions, flexbox } from '@material-ui/system';
import { TextareaAutosize, Typography } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: { 
      main: '#CCD5FF',
      main: '#6068f1',
      contrastText: '#FFFF'
    },
    secondary: {
      main: '#E7BBE3',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        position: "absolute",
        bottom: "1em",
        width: "90%",
        margin: "auto",
        padding: "12px",
        color: "#FFFFFF"
      }
    }
  }
});

const Heading = styled.h1`
  font-size: 1.4em;
  margin-bottom: 1em;
`;

const TitleInput = styled.input`
    width: 50%;
    padding: 12px 16px;
    margin: 0 0 10px;
    border-radius: 10px;
    box-shadow: none;
  `;

const BodyInput = styled.input`
    width: 50%;
    height: 100px;
    padding: 12px 16px;
    margin: 0 0 10px;
    border-radius: 10px;
  `;

const SubmitButton = styled.input`
    display: block;
    padding: 6px 10px;
    border-radius: 10px;
  `;

const Form = ({ history }) => {
  let date = new Date();
  let dateAsString = date.toDateString();

  const [title, setTitle] = useState('');
  const [bodyText, setBodyText] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setTitle(e.target.value);
  //   console.log(e);
  //   console.log(e.target);
  //   // setBodyText();
  // }

  // const tempHandleSubmit = (e) => {
  //   e.preventDefault();
  //   setTemp('anna');
  //   console.log(temp);
  //   requestToEndpoint();
  // }

  // const obj = {
  //   title: 'temp title',
  //   body: 'temp body'
  // };

  // const requestToEndpoint = () => {
  //   console.log('im being called');
  //   fetch('/post', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(obj)
  //   }).then((response) => {
  //     console.log('Success', response.json());
  //   }).catch((error) => {
  //     console.log('Error: ', error);
  //   });
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello');
    console.log({ title, bodyText });
    storePostInDatabase();
  }

  const storePostInDatabase = () => {
    console.log('im being called');

    console.log('date', date);
    var obj = {
      title: title,
      body: bodyText,
      date: date
    }

    fetch('/post', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    }).then(async (response) => {
      console.log('Success: ', await response.json());
      history.push('/allposts');
    }).catch((error) => {
      console.log('Error: ', error);
    });
  }

  return(
    // <form onSubmit={handleSubmit}>
    //   <div>
    //     <label>Title</label>
    //     <input type="text" name="title" onChange={() => {setTitle()}}/>
    //   </div>
    //   <div>
    //     <label>What's On Your Mind?</label>
    //     <input type="text" name="body" onChange={() => {setBodyText()}} />
    //   </div>
    //   <input type="submit" value="Submit" />
    // </form>

      <ThemeProvider theme={theme}>
        {/* <Heading>What's On Your Mind?</Heading> */}
        <Box borderRadius={14} height="70vh" width="100%" boxShadow={3} p={2} position="relative">
          <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column">
              <div>
                <p>{dateAsString}</p>
                <TextField
                  id="standard-full-width"
                  label="Title"
                  style={{ marginBottom: '2em' }}
                  placeholder="Today Is A Beautiful Day"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    style: { fontSize: 30 }
                  }}
                  // variant="filled"
                  // variant="h1"
                  onChange={e => setTitle(e.target.value)}
                  value={title}
                />

                <TextField
                  id="standard-full-width"
                  label="Body"
                  style={{ marginBottom: '2em'}}
                  placeholder="My morning began with a crepe and a coffee. It was lovely."
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  // height={60}
                  rowsMin={1}
                  rowsMax={6}
                  // variant="filled"
                  multiline
                  onChange={e => setBodyText(e.target.value)}
                  value={bodyText}
                />
              </div>
              <Button bottom={0} variant="contained" color="primary" type="submit">
                Share Anonymously
              </Button>
            </Box>
          </form>
        </Box>
      </ThemeProvider>
     
  );
}



// > const f = (name) => () => console.log(`hello ${name}`)
// undefined
//   > const helloAnna = f('anna')
// undefined
//   > helloAnna()
// hello anna
// undefined
//   > const peeter = f('pete')
// undefined
//   > peeter
//   [Function]
//   > peeter()
// hello pete


// Idea: Auto-generate date

export default Form;                    