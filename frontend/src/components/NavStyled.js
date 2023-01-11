import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  height: 55px;
  background-color: #333;

  ul {
    display: flex;
    justify-content: left;
    align-items: center;
    height: 100%;
    width: 1000px;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
    /* border: solid 1px red; */
  }

  li {
    float: left;
  }

  li a {
    margin: 0 10px 0 10px;
    display: block;
    color: white;
    text-align: center;
    padding: 10px 10px;
    text-decoration: none;
    font-family: "Inter";
    font-size: 18px;
    height: 100%;
  }

  li a:hover:not(.active) {
    background-color: #111;
  }

  .active {
    background-color: #04aa6d;
  }
`;
