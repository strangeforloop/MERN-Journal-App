import React from 'react';
import styled from 'styled-components';

const ToggleButton = styled.button`
  display: ${({ isMobile }) => isMobile ? 'flex' : 'none'}};;
  flex-direction: column;
  justify-content: space-around;
  height: 24px;
  width: 30px;
  background: transparent;
  box-sizing: border-box;
  padding: 0;
  border: none;
  cursor: pointer;
 
  &:hover {
    outline: none;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const ToggleButtonLine = styled.div`
  height: 2.8px;
  width: 30px;
  border-radius: 3px;
  background-color: #6068f1;
`;

const DrawerToggleButton = (props) => (
  // <button className="toggle-button" onClick={props.onClick}>
  <ToggleButton onClick={ props.click } isMobile={true} >
    <ToggleButtonLine></ToggleButtonLine>
    <ToggleButtonLine></ToggleButtonLine>
    <ToggleButtonLine></ToggleButtonLine>
  </ToggleButton>
);

export default DrawerToggleButton;