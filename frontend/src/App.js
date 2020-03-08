import React, { useState, useEffect } from 'react';
import Form from './Form';
import AllPosts from './AllPosts';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#CCD5FF',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#E7BBE3',
    },
  },
});

const Ul = styled.ul`
  display: flex;
  list-style: none;
  padding: 1em 0;
  text-decoration: none;
  justify-content: space-between;
  align-items: center;
`;

const Li = styled.li`
  color: #E7BBE3;
`;


const App = () => {
  const [ data, setData ] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('/allposts', {
        method: 'GET'
      });

      const data = await response.json();
      
      setData(data);
    }
    
    getData();
  }, []);

  return(
    <ThemeProvider theme={theme}>
      <Box color="secondary" m={2}>
        <Router>
          <nav>
            <Ul>
              <div>
                <li>Anonymous Journal</li>
              </div>
              <div>
                <Link to="/" style={{ fontWeight: '500', textDecoration: 'none', color: 'pink' }}>home</Link>
                <Link to="/allposts" style={{ fontWeight: '500', textDecoration: 'none', color: 'pink', paddingLeft: '2em' }}>all posts</Link>
                {/* <li>Random Post</li> */}
              </div>
            </Ul>
          </nav>
          <Switch>
            <Route path="/allposts">
              <AllPosts posts={data}/>
            </Route>
            <Route path="/" component={Form} />
          </Switch>    
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;