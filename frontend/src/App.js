import React, { useState, useEffect } from 'react';
import Form from './Form';
import AllPosts from './AllPosts';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';
import DrawerToggleButton from './components/SideDrawer/DrawerToggleButton';
import './App.css';

const Container = styled.section`
  height: 100%;
  margin: 0 1rem;

  @media(min-width: 768px) {
    margin: 0 2rem;  
  }
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const NavBar = styled.div`
  width: 100%;
  position: fixed;
  height: 60px;
  background: pink;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
`;

const Navigation = styled.nav`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
`;

const Main = styled.main`
  margin-top: 64px;
  flex: 1;
`;

const Logo = styled.div`
  font-size: 1.5em;
  color: #6068f1;
  margin-left: 1rem;
`;

const Placeholder = styled.div`
  flex: 1;
`;

// add listener to window resize event - debounce or throttle (lodash)
// when triggered, update variable

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
      // <nav>
        <Router>
          <Page>
            <NavBar>
              <Container>
              <Navigation>
                <DrawerToggleButton isMobile={true /*add actual var here */} />
                <Logo>Anon Journal</Logo>
                <Placeholder />
                {/* <div>
                  <Link className="navLink" to="/">home</Link>
                  <Link className="navLink" to="/allposts">all entries</Link>
                  <Link className="navLink" to="/">random entry</Link>
                </div> */}
              </Navigation>
              </Container>
            </NavBar>
            <Main>
              <Switch>
                <Route path="/allposts">
                  <AllPosts posts={data}/>
                </Route>
                <Route path="/" component={Form} />
              </Switch>  
            </Main>  
          </Page>
        </Router>
      // </nav>
  );
}

export default App;