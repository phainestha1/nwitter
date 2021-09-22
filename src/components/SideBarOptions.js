import React from 'react'
import styled from "styled-components";


function SideBarOptions({ Icon, title, addTagOptions }) {
    return (
        <Container>
             {Icon && <Icon fontSize="25" style={ {padding : 10} }/> }
             {Icon ?
                    <h3>{title}</h3>
                   :
                    <h3>Not Founded</h3>        
            }
        </Container>
    )
}

export default SideBarOptions;

const Container = styled.div`
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
