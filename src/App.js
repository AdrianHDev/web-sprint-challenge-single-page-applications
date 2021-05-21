import React from "react";
import styled from "styled-components";

const App = () => {
  const disableRefresh = (ev) => {
    ev.preventDefault()
  }

const StyledHeader = styled.header`
  display:flex;
  justify-content:space-between;
  background: red;
  padding: 0 30px 0 30px;
  align-items: center;
  h1 {
    font-size: 3rem;
  }
  ul {
    color: white-smoke;
    font-size: 1.5rem;
  }
  ul li a { color: yellow }
  
`

  return (
      <StyledHeader>
        <h1>Lambda Eats</h1>
        <ul>
          <li><a onClick={disableRefresh} href="/">Home</a></li>
          <li><a onClick={disableRefresh} href="pizza/">Order</a></li>
          <li>Contact</li>
        </ul>
      </StyledHeader>
  );
};
export default App;
