import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
const PaginationUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 5px;
`;

const PaginationLi = styled.li`
  padding: 5px;
  font-size: 24px;
  border-radius: 5px;
  color: black;

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
      color: isActive ? "#3A83BB" : "black",
    };
  }

  return (
    <PaginationUl>
      <PaginationLi>
        <NavLink to="/" style={activeStyle}>
          게시판
        </NavLink>
      </PaginationLi>
    </PaginationUl>
  );
}

export default Header;
