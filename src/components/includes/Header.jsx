import React from "react";
import { styled } from "styled-components";

function Header() {
    return (
        <MainContainer>
            <Wrapper>
                <LeftContainer>
                    <Logo>
                        <img
                            src={require("../../assets/logo.svg").default}
                            alt="Logo"
                        />
                    </Logo>
                </LeftContainer>
                <RightConatiner>
                    <Home>Home</Home>
                    <About>About Us</About>
                    <Contact>Contact Us</Contact>
                    <Shop>
                        Shop
                        <Icon>
                            <img
                                src={require("../../assets/shop.svg").default}
                                alt="Icon"
                            />
                        </Icon>
                    </Shop>
                </RightConatiner>
            </Wrapper>
        </MainContainer>
    );
}

export default Header;
const MainContainer = styled.div`
    padding: 20px;
`;
const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 15px 29px 118px -20px rgba(244, 96, 12, 0.22);
`;
const LeftContainer = styled.div`
    width: 50%;
`;
const Logo = styled.div`
    width: 200px;
    img {
        display: block;
        width: 100%;
    }
`;
const RightConatiner = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Home = styled.p`
    font-size: 13px;
`;
const About = styled.p`
    font-size: 13px;
`;
const Contact = styled.p`
    font-size: 13px;
`;
const Shop = styled.button`
    display: flex;
    align-items: center;
    padding: 15px 20px;
    border: none;
    background: linear-gradient(to right, #f4b30c 1%, #f4600c 99%);
    border-radius: 10px;
    color: #fff;
    font-size: 12px;
`;
const Icon = styled.div`
    width: 15px;
    margin-left: 5px;
    img {
        display: block;
        width: 100%;
    }
`;
