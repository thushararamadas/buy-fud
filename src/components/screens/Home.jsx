import React from "react";
import { styled } from "styled-components";
import Header from "../includes/Header";
import Products from "./Products";

function Home() {
    return (
        <>
            <Header />
            <MainContainer>
                <div className="wrapper">
                    <TopContainer>
                        <UniqButton>Unique Curry Powders</UniqButton>
                        <Heading>
                            <Main>
                                Wake Up Your{" "}
                                <Smile>
                                    <img
                                        src={
                                            require("../../assets/emo.svg")
                                                .default
                                        }
                                        alt="Emoji"
                                    />
                                </Smile>
                            </Main>
                            Taste Buds With Us
                        </Heading>
                        <BagoneDiv>
                            <Bg>
                                <img
                                    src={require("../../assets/bag1-bg.png")}
                                    alt="Image"
                                />
                            </Bg>
                            <Star>
                                <img
                                    src={require("../../assets/star.png")}
                                    alt="Image"
                                />
                            </Star>
                            <Bagone>
                                <img
                                    src={require("../../assets/bag1.png")}
                                    alt="Image"
                                />
                            </Bagone>
                        </BagoneDiv>
                        <BagtwoDiv>
                            <BgTwo>
                                <img
                                    src={require("../../assets/bagbg.png")}
                                    alt="Image"
                                />
                            </BgTwo>
                            <StarTwo>
                                <img
                                    src={require("../../assets/star2.png")}
                                    alt="Image"
                                />
                            </StarTwo>
                            <BagTwo>
                                <img
                                    src={require("../../assets/bag2.png")}
                                    alt="Image"
                                />
                            </BagTwo>
                        </BagtwoDiv>
                    </TopContainer>
                </div>
                <Round>
                    <img
                        src={require("../../assets/round (2).png")}
                        alt="Image"
                    />
                </Round>
                <Postion>
                    <img
                        src={require("../../assets/halfround.png")}
                        alt="Image"
                    />
                </Postion>
                <SecondHeading>
                    <span>Products</span> Within Your Province
                </SecondHeading>
                <SelectInput>
                    <option value="select province">select province</option>
                </SelectInput>
                <Box>
                    <img src={require("../../assets/blur1.png")} alt="Image" />
                </Box>
                <BoxTwo>
                    <img src={require("../../assets/blur2.png")} alt="Image" />
                </BoxTwo>
            </MainContainer>
            <Products />
        </>
    );
}

export default Home;
const MainContainer = styled.div`
    /* position: relative; */
    height: 100vh;
`;
const TopContainer = styled.div`
    margin-top: 60px;
`;
const UniqButton = styled.div`
    color: #f4600c;
    padding: 3px;
    border-radius: 20px;
    background-color: #fde8dd;
    width: 180px;
    margin: 0 auto;
    text-align: center;
    font-size: 12px;
    margin-bottom: 20px;
`;
const Heading = styled.div`
    font-size: 55px;
    color: #332018;
    text-align: center;
`;
const Smile = styled.div`
    width: 60px;
    margin-left: 10px;
    box-shadow: 24px 200px 47px -158px rgba(0, 0, 0, 0.75);
    img {
        display: block;
        width: 100%;
    }
`;
const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const BagoneDiv = styled.div`
    position: absolute;
    top: 450px;
    left: 215px;
    z-index: 1;
`;
const BagtwoDiv = styled.div`
    position: absolute;
    top: 400px;
    right: 550px;
    z-index: -1;
`;
const Bg = styled.div`
    width: 210px;
    z-index: 0;
    img {
        display: block;
        width: 100%;
    }
`;
const Bagone = styled.div`
    width: 170px;
    position: absolute;
    bottom: 50px;
    left: 25px;
    img {
        display: block;
        width: 100%;
    }
`;
const Star = styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    left: 18px;
    width: 200px;
    img {
        display: block;
        width: 100%;
    }
`;
const BgTwo = styled.div`
    width: 175px;
    /* z-index: 0; */
    position: absolute;
    left: 60px;
    top: -10px;

    img {
        display: block;
        width: 100%;
    }
`;
const BagTwo = styled.div`
    width: 230px;
    position: absolute;
    top: -100px;
    left: 46px;
    img {
        display: block;
        width: 100%;
    }
`;
const StarTwo = styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    left: 18px;
    width: 200px;
    img {
        display: block;
        width: 100%;
    }
`;
const Round = styled.div`
    width: 1520px;
    position: absolute;
    z-index: -5;
    top: 500px;
    img {
        display: block;
        width: 100%;
    }
`;
const Postion = styled.div`
    width: 1560px;
    position: absolute;
    top: 460px;
    filter: invert(53%) sepia(4%) saturate(20%) hue-rotate(339deg)
        brightness(94%) contrast(86%);
    img {
        width: 100%;
        display: block;
    }
`;
const SecondHeading = styled.p`
    position: absolute;
    left: 35%;
    top: 100%;
    font-size: 40px;
    width: 30%;
    text-align: center;
    span {
        color: #f4600c;
    }
`;
const SelectInput = styled.select`
    padding: 20px 10px;
    width: 400px;
    border: 3px solid #fde8dd;
    border-radius: 10px;
    font-size: 10px;
    color: #808080;
    position: absolute;
    left: 37%;
    top: 120%;
`;
const Box = styled.div`
    position: absolute;
    top: 151%;
    left: 0%;
    /* z-index: 1; */
    width: 170px;
    img {
        display: block;
        width: 100%;
    }
`;
const BoxTwo = styled.div`
    position: absolute;
    top: 131%;
    left: 75%;
    /* z-index: 1; */
    width: 160px;
    img {
        display: block;
        width: 100%;
    }
`;
