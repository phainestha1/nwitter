import React from "react";
import AuthForm from "components/AuthForm";
import styled from "styled-components";

const Footer = styled.div`
    font-family: 'ChosunGs';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.0/ChosunGs.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    color: white;
    position: fixed;
    padding: 10px 10px 0px 10px;
    bottom: 0;
    width: 100%;
    text-align: center;
    font-size: 17px;
`;

const Auth = () => {
    return (
    <div>
        <AuthForm />
        <Footer>
            <footer> &copy; 유한회사 노마드컴퍼니 <br /> 2021년 3분기 天下第一 트위터 모방 경연대회  </footer>
        </Footer>
    </div>
    )
};

export default Auth;