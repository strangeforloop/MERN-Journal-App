import React from 'react';
import styled from 'styled-components';
import './SideDrawer.css';

// display: ${ ({ open }) => open ? 'flex' : 'none' };

const DrawerStyle = styled.div`
  display: ${props => props.open ? 'flex' : 'none'};
  height: 100%;
  width: 70%;
  background: #ffc0cb;
  background: grey;
  z-index: 200;
  position: fixed;
  top: 0;
  left: 0;
  max-widtH: 400px;
  flex-direction: column;
  
`;

const NavPositionTracker = styled.div`
  height: 68px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CloseButton = styled.button`
  background: none;
  border: 0;
  padding: 0;
  width: fit-content;
  display: inline-flex;
  flex-grow: 0;
  margin-left: 1rem;

  &: hover {
    cursor: pointer;
  }
`;

const Links = styled.ul`
  list-style: none;
  list-style-type: none;
  padding: 0;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Li = styled.li`
  margin: 0;
  margin-bottom: 2.3rem;
  padding: 0.5rem 0;
`;

const Icon = styled.i`
  font-size: 1.1rem;
`;

const NavAnchor = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  margin-top: 1rem;
  
  &:hover {
    text-decoration: underline;
  }
`;
const SideDrawer = props => {
  return (
    <DrawerStyle open={props.show}>
      <NavPositionTracker>
        <CloseButton onClick={props.click}><i className="fas fa-times fa-2x"></i></CloseButton>
      </NavPositionTracker>
      <Links>
        <Li><NavAnchor href="/">Home</NavAnchor></Li>
        <Li><NavAnchor href="/allposts">All Posts</NavAnchor></Li>
        <Li><NavAnchor href="/randompost">Random Post</NavAnchor></Li>
      </Links>
    </DrawerStyle>
  );
};

export default SideDrawer;