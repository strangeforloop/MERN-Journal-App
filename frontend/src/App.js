import React, { useState, useEffect } from 'react';
import Form from './Form';
import AllPosts from './AllPosts';
import RandomPost from './RandomPost';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';
import DrawerToggleButton from './components/SideDrawer/DrawerToggleButton';
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDrop from './components/Backdrop/Backdrop';
import './App.css';
import debounce from 'lodash/debounce';

const Container = styled.section`
  height: 100%;
  width: 100%;
  margin: 0 1rem;

  @media(min-width: 768px) {
    margin: 0 3rem;  
  }

  @media(min-width: 1224px) {
    margin: 0 8rem;  
  }
`;

const Page = styled.div`
  z-index: 100;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
`;

const Main = styled.main`
  margin-top: 64px;
  flex: 1;
`;

const Logo = styled.a`
  font-size: 1.476875rem;
  color: #6068f1;
  margin-left: 1rem;
  text-decoration: none;

  @media (min-width: 768px) {
    flex: ;
    margin: 0;
  }
`;

const Placeholder = styled.div`
  flex: 1;
`;

const NavLinks = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }  
`;

// add listener to window resize event - debounce or throttle (lodash)
// when triggered, update variable

const App = () => {
  const [ data, setData ] = useState([]);
  // const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);
  const [ isSideMenuOpen, setIsSideMenuOpen ] = useState(false);

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

  const buttonClickHandler = () => {
    // console.log('clicked button');
    // console.log('isSideMenuOpen: ', isSideMenuOpen);
    setIsSideMenuOpen(!isSideMenuOpen);
  }

  return(
    <Router>
    <SideDrawer show={isSideMenuOpen} click={buttonClickHandler}/>
    {/* <BackDrop /> */}
      <Page>
        <NavBar>
          <Container>
          <Navigation>
            <DrawerToggleButton click={buttonClickHandler}/>
            <Logo href="/">Anon Journal</Logo>
            <Placeholder />
            <NavLinks>
              <Link className="navLink" to="/">home</Link>
              <Link className="navLink" to="/allposts">all entries</Link>
              <Link className="navLink" to="/randompost">random entry</Link>
            </NavLinks>
          </Navigation>
          </Container>
        </NavBar>
        <Main>
          <Switch>
            <Route path="/allposts">
              <AllPosts posts={data}/>
            </Route>
            <Route path="/randompost">
              <RandomPost />
            </Route>
            <Route path="/" component={Form} />
          </Switch>  
        </Main>  
      </Page>
    </Router>
  );
}

export default App;