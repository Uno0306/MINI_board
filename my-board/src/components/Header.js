import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  background: lightskyblue;
  height: 100px;
`;

const PaginationUl = styled.ul`
  margin: auto;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 5px 5px 5px;
`;

const PaginationLi = styled.li`
  font-size: 24px;
  border-radius: 5px;
  color: black;
  vertical-align: center;
  &:hover {
    cursor: pointer;
    color: green;
    background: orange;
  }
`;

function Header() {
  function activeStyle({ isActive }) {
    return {
      textDecoration: "none",
      fontSize: isActive ? "32px" : undefined,
      color: isActive ? "yellow" : "white",
      fontWeight: isActive ? "600" : "300",
    };
  }

  return (
    <Div>
      <PaginationUl>
        <PaginationLi>
          <NavLink to="/" style={activeStyle}>
            게시판
          </NavLink>
        </PaginationLi>
      </PaginationUl>
    </Div>
  );
}

export default Header;
