import React, { useState, useEffect } from 'react';
import Form from './Form';
import AllPosts from './AllPosts';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

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

const MenuIcon = styled.div`

`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  padding: 1em 0;
  text-decoration: none;
  justify-content: space-between;
  align-items: center;
  color: #6068f1;
  font-weight: 700;
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
                <li style={{
                  fontSize: '1.4em', color: '#6068f1'}}>Anon Journal</li>
              </div>
              {/* <Box color="primary" height={38} width={38} borderRadius="50%" display="flex" justifyContent="center" alignItems="center" style={{ backgroundColor: "#6068f1" }}>
                <i style={{ fontSize: '1.25em' }} class="fas fa-bars"></i>              
              </Box> */}
              <div>
                <Link className="navLink" to="/">home</Link>
                <Link className="navLink" to="/allposts">all entries</Link>
                <Link className="navLink" to="/random">random entry</Link>
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