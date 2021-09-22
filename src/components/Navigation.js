import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import { VscHome } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";


const Navigation = ({ userObj }) => {
  const [clockState, setClockState] = useState();

  useEffect(() => {
      setInterval(() => {
          const date = new Date();
          const hours = (JSON.stringify(date.getHours())).padStart(2, '0');
          const minutes = (JSON.stringify(date.getMinutes())).padStart(2, '0');
          const seconds = (JSON.stringify(date.getSeconds())).padStart(2, '0'); 
          const clock = `${hours}:${minutes}:${seconds}`;
          
          setClockState(clock);
          
      }, 1000);
  }, []);

    return (
    <Container>
      <HeaderLeft>
          <Link className="link profile" to="/profile">
            <CgProfile size={28} /> 
          </Link>
          <Link className="link home" to="/">
            <VscHome size={29} alt="Home"/> 
          </Link>
      </HeaderLeft>

      <HeaderCenter>
        <h5>{clockState}</h5>
      </HeaderCenter>
        
      <HeaderRight>
        <a href="https://www.nomadcoders.co">
          <img src="https://nomadcoders.co/m.svg" 
               alt="ncImage" 
               width="25px"
               height="20px"
               />
        </a>
      </HeaderRight>
    </Container>
  )
}

export default Navigation;

const Container = styled.div`
  display: flex;
  position: fixed;
  position: relative;
  width: 100%;
  background-color: #3f0f40;
`;

const HeaderLeft = styled.div`
  display: flex;
  flex: 0.3;
  margin-left: 15px;
  align-items: center;
  
  .link {
    color:honeydew;
  }
  .link:hover {
    opacity: 0.8;
  }
  
  .home {
    margin-left: 10px;
  }
`;

const HeaderCenter = styled.div`
  @font-face {
    font-family: 'LAB디지털';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/LAB디지털.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  color: honeydew;
  display: flex;
  flex: 0.4;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  font-size: 1.7rem;
  font-family: 'LAB디지털';
`;

const HeaderRight = styled.div`
  display: flex;
  flex: 0.3;
  right: 0;
  justify-content: right;
  align-items: center;
  margin-right: 20px;
  transition: 0.3s;

  :hover {
    opacity: 0.8;
  }
`;

