import React from 'react';
import styled from 'styled-components';
import './Backdrop.css';

const BackdropStyle = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
  top: 0;
  left: 0;

  @media(min-width: 768px) {
    display: block;  
  }
`;

const Backdrop = props => (
  <div className="backdrop" onClick={props.clickHandler}></div>
);

export default Backdrop;