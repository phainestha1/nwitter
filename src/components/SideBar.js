import React, {useState, useEffect} from 'react'
import { dbService } from "fbase";
import { collection, 
        query,
        onSnapshot } from "firebase/firestore";
import SideBarOptions from "components/SideBarOptions";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {VscReferences, VscMention, VscBrowser} from "react-icons/vsc";
import {AiOutlineFolder, AiFillFire} from "react-icons/ai";
import {BsHouseDoorFill} from "react-icons/bs";
import {IoMdAdd} from "react-icons/io";
import {FaHeart} from "react-icons/fa";
import {BsHash} from "react-icons/bs";
import {RiChat1Line} from "react-icons/ri";


function SideBar({ userObj }) {
    const [channels, setChannels] = useState([]);
    useEffect(() => {
        const queryData = query(collection(dbService, "rooms"));
        onSnapshot(queryData, snapshot => {
            const channelsArr = snapshot.docs.map(doc => ({
                id: doc.id,
                name: doc.name,
                ...doc.data()
            }));
            setChannels(channelsArr);
        });
    },[])

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
                    <h3>{userObj.displayName === null ? "John Doe" : userObj.displayName}</h3>
                    </UserInfoRight>
                </UserInfo>
            </Header>

            <SideBarOptions Icon={VscReferences} title="Thread"/>
            <SideBarOptions Icon={AiOutlineFolder} title="File / Storage" />
            <SideBarOptions Icon={VscMention} title="Mention" />
            <SideBarOptions Icon={VscBrowser} title="Browse" />
            <SideBarOptions Icon={AiFillFire} title="Thx 4 Coming ????" />
            <SideBarOptions Icon={FaHeart} title="My Best for Your Dreams ????" />
            <hr />
            <SideBarOptions Icon={BsHouseDoorFill} title="My Channels" />
            <Link className="link" to="/">
                <SideBarOptions Icon={RiChat1Line} title="????????? ????????? ???" />
            </Link>
            <Link className="link" to="/challenge">
                <SideBarOptions Icon={RiChat1Line} title="Challenge" />
            </Link>
            <hr />
            <SideBarOptions Icon={IoMdAdd} addChannelOption title="Add Tags" />
            
            <ChannelContainer>
                <div className="channelBox">
                    {channels?.map(doc => (
                        <SideBarOptions 
                            key={doc.id} 
                                id={doc.id} 
                                Icon={BsHash} 
                                title={doc.name} />
                        ))}
                </div>
            </ChannelContainer>
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

    .link {
    color:honeydew;
  }
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
const ChannelContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 30vh;

    .channelBox {
        position: flex;
        width: 100%;
        overflow: scroll;
        overflow-x: hidden;
        }
    .channelBox::-webkit-scrollbar {
        width: 8px;
        }
    .channelBox::-webkit-scrollbar-track {
        background: transparent; 
        }
    .channelBox::-webkit-scrollbar-thumb {
        background: gray;
        }
    .channelBox::-webkit-scrollbar-thumb:hover {
        background: #555; 
        }
`;
