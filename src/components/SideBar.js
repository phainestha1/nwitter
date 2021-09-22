import React from 'react'
import {Link} from "react-router-dom";
import styled from "styled-components";
import SideBarOptions from "components/SideBarOptions";
import {VscReferences} from "react-icons/vsc";
import {TiWeatherCloudy} from "react-icons/ti";
import {RiTodoLine} from "react-icons/ri";
import {FiThumbsUp} from "react-icons/fi";
import {MdExpandMore} from "react-icons/md";
import {IoMdAdd} from "react-icons/io";


function SideBar({ userObj }) {

    return (
        <Container>
        <SideMenu>
            <Header>
                <UserInfo>
                    <UserInfoLeft>
                    <img src={userObj.photoURL === null
                                ? "https://nomadcoders.co/m.svg" 
                                : userObj.photoURL
                            } 
                         alt="profileImage" />
                    </UserInfoLeft>
                    <UserInfoRight>
                    <h4>Nweet Your Day</h4>
                    <h3>{userObj.displayName}</h3>
                    </UserInfoRight>
                </UserInfo>
            </Header>

            <Link className="link profile" to="/reference">
                <SideBarOptions 
                    Icon={VscReferences} 
                    title="Thank You List"/>
            </Link>

            <Link className="link profile" to="/weather">
            <SideBarOptions 
                Icon={TiWeatherCloudy} 
                title="Weather" />
            </Link>

            <Link className="link profile" to="/todo">
            <SideBarOptions 
                Icon={RiTodoLine} 
                title="To-do" />
            </Link>

            <Link className="link profile" to="/feeling">
            <SideBarOptions 
                Icon={FiThumbsUp} 
                title="Feeling Good Today" />
            </Link>
            
            <hr />

            <SideBarOptions Icon={MdExpandMore} title="My Tags" />

            <hr />

            <SideBarOptions Icon={IoMdAdd} addTagOptions title="Add Tag" />

        </SideMenu>

    </Container>
    )
}

export default SideBar;

const Container = styled.div`
    @font-face {
    font-family: 'IBMPlexSansKR-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    }
    display: flex;
    flex-direction: column;
    flex: 0.3;
    max-width: 260px;
    min-width: 260px;
    color: honeydew;
    font-family: 'IBMPlexSansKR-Regular';
    background-color: #3f0f40;
    border-top: 1px solid #49274b;
`;

const SideMenu = styled.div`
    >hr {
        margin-top: 7px;
        margin-bottom: 7px;
        border: 1px solid #49274b;
    }
  
    .link {
        color:honeydew;
        text-decoration: none;
    }
`;

const Header = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;
`;

const UserInfo = styled.div`
    display: flex;
    flex: 1;
`;
const UserInfoLeft = styled.div`
    display: flex;
    margin-left: 10px;

    >img {
        width: 55px;
        height: 55px;
        border-radius: 999px;
        border: none;
        background-color: white;
    }
`;
const UserInfoRight = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    padding-top: 3px;
`;
