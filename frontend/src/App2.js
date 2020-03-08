import React from 'react';
import Form from './Form';
import Navigation from './Navigation';
import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';

// import './App.css';

function App() {
  // fetch('/ping');
  return (
    <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
      <div className="App">
        <Container maxWidth="xl">
        <header className="App-header">
          <Navigation/>
        </header>
        </Container>
      </div>
    </Box>
  );
}

export default App;
