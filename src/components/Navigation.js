import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import { VscHome } from "react-icons/vsc"
import { CgProfile } from "react-icons/cg"

const Container = styled.div`
  position: fixed;
  height: 100%;
  width: 250px;
  z-index: 1;
  top: 0;
  left: 0;
  border: 1px solid black;
  overflow-x: hidden;
  padding-top: 20px;
  padding-left: 15px;

`;


const Navigation = ({ userObj }) => (
    <Container>
    <nav>
        <Link to="/">
          <VscHome size={30}/> Home
        </Link>
        <br/>
        <Link to="/profile">
          <CgProfile size={28}/ > {userObj.displayName}의 Profile
        </Link>
    </nav>
    </Container>
)

export default Navigation;
