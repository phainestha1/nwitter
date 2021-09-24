import React from 'react';
import { dbService } from "fbase";
import { collection, addDoc } from "firebase/firestore";
import styled from "styled-components";
import {BsHash} from "react-icons/bs";

function SideBarOptions({ Icon, title, addChannelOption, id}) {

    const addChannel = () => {
        const channelName = prompt("Please name your new channel.");

        if(channelName) {
            addDoc(collection(dbService, 'rooms'), {
                name: channelName

            })
        }
    }  
    const selectChannel = () => {

    }

    return (
        <SidebarOptionContainer
            onClick = {addChannelOption ? addChannel : selectChannel}
        >
             {Icon && <Icon fontSize="25" style={ {padding : 10} }/> }
             {Icon ? <h3>{title}</h3>
                   :
                    <SidebarOptionChannel>
                        <BsHash /> {title}
                    </SidebarOptionChannel>
                
                    
            }
        </SidebarOptionContainer>
    )
}

export default SideBarOptions;

const SidebarOptionContainer = styled.div`
    display: flex;
    
    font-size: 13px;
    font-weight: normal;
    align-items: center;
    padding-left: 10px;
    cursor: pointer;
    transition: 0.2s;

    :hover {
        opacity: 0.8;
        background-color: #340e36;
    }
`;
const SidebarOptionChannel = styled.div`
    
`;