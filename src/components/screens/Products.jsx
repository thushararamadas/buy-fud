import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

function Products() {
    const Product = [
        {
            id: 1,
            image: require("../../assets/product1.png"),
            name: "Beef Fry Mix",
        },
        {
            id: 2,
            image: require("../../assets/p3.png"),
            name: "chiken ghee roast",
        },
        {
            id: 3,
            image: require("../../assets/p4.png"),
            name: "chiken ghee roast",
        },
        {
            id: 4,
            image: require("../../assets/p1.png"),
            name: "kerala chicken roast",
        },
    ];
    return (
        <>
            <MainCOnatiner>
                <Wrapper>
                    {Product.map((item) => (
                        <All>
                            <MainDiv>
                                <ImageDiv>
                                    <img src={item.image} alt="Image" />
                                </ImageDiv>
                                <New>New</New>
                            </MainDiv>
                            <TitleDiv>
                                <Left>
                                    <Title>{item.name}</Title>
                                    <Price>150 g</Price>
                                </Left>
                                <Right>
                                    <img
                                        src={require("../../assets/product-single.png")}
                                        alt="Image"
                                    />
                                </Right>
                            </TitleDiv>
                        </All>
                    ))}
                    <More to="/more">
                        More Products
                        {/* <Icon>
                            <img
                                src={require("../../assets/shop.svg").default}
                                alt="Icon"
                            />
                        </Icon> */}
                    </More>
                </Wrapper>
                <SecondHeading>
                    <span>Cook</span> With Favorite Recipe
                </SecondHeading>
                <Top>
                    <UniqButton>Yummy Duck Roast</UniqButton>
                    <Next>
                        Next Receipe{" "}
                        <Icon>
                            <img
                                src={require("../../assets/arrow.svg").default}
                                alt="Icon"
                            />
                        </Icon>
                    </Next>
                </Top>
                <Bottom>
                    <LeftC>
                        <First>
                            <Heading>
                                Step 01----<span>Step 02---- Step 03--</span>
                            </Heading>
                            <p>
                                Prepared with Currease’s Duck roast instant
                                curry mix, the tender and juicy meat with its
                                crispy skin glazed with honey can be the perfect
                                holiday main dish for occasions such as
                                Thanksgiving, Christmas, or New Year’s eve.
                            </p>
                            <p>
                                Honey can be the perfect holiday main dish for
                                occasions such as Thanksgiving, Christmas, or
                                New Year’s eve.
                            </p>
                        </First>
                    </LeftC>
                    <RightC>
                        <Second>
                            <img
                                src={require("../../assets/img1.png")}
                                alt="Image"
                            />
                        </Second>
                        <Second>
                            <img
                                src={require("../../assets/img2.png")}
                                alt="Image"
                            />
                        </Second>
                    </RightC>
                </Bottom>
                <Logo>
                    <img
                        src={require("../../assets/verticl-logo.svg").default}
                        alt="Logo"
                    />
                </Logo>
            </MainCOnatiner>
        </>
    );
}

export default Products;
const MainCOnatiner = styled.div`
    padding: 100px;
`;
const Wrapper = styled.div`
    width: 85%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;
const MainDiv = styled.div`
    background-color: #ddfdf0;
    width: 200px;
    padding: 30px;
    position: relative;
    border-radius: 20px;
    height: 200px;
    margin: 10px auto;
`;
const ImageDiv = styled.div`
    width: 200px;
    img {
        display: block;
        width: 100%;
    }
`;
const New = styled.div`
    padding: 6px 15px;
    color: #f4600c;
    background-color: #fff;
    border-radius: 15px;
    width: 30px;
    font-size: 10px;
    position: absolute;
    top: 10px;
    right: 10px;
`;
const TitleDiv = styled.div`
    display: flex;
    align-items: center;
    width: 250px;
    justify-content: space-between;
    margin: 0 auto;
`;
const Left = styled.div``;
const Right = styled.div`
    width: 50px;
    img {
        display: block;
        width: 100%;
    }
`;
const Title = styled.p`
    font-size: 12px;
    margin-bottom: 10px;
`;
const Price = styled.p`
    padding: 6px 15px;
    color: #f4600c;
    background-color: #fde8dd;
    border-radius: 15px;
    width: 40px;
    font-size: 10px;
`;
const All = styled.div`
    width: 50%;
`;
const More = styled(Link)`
    display: flex;
    align-items: center;
    padding: 15px 20px;
    border: none;
    background: linear-gradient(to right, #f4b30c 1%, #f4600c 99%);
    border-radius: 10px;
    color: #fff;
    font-size: 12px;
    margin-top: 50px;
`;
const Icon = styled.div`
    width: 7px;
    margin-left: 5px;
    img {
        display: block;
        width: 100%;
    }
`;
const SecondHeading = styled.p`
    margin-top: 70px;
    font-size: 40px;
    text-align: center;
    span {
        color: #f4600c;
    }
`;
const UniqButton = styled.div`
    color: #f4600c;
    font-size: 14px;
    margin-right: 10px;
`;
const Next = styled.div`
    display: flex;
    align-items: center;
    padding: 6px 15px;
    color: #f4600c;
    background-color: #fde8dd;
    border-radius: 15px;
    width: 100px;
    font-size: 10px;
    text-align: center;
    margin-right: 5px;
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    margin-top: 60px;
    padding: 0 100px;
`;
const Bottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px;
`;
const First = styled.div`
    margin-top: 10px;
    background-color: #f4600c;
    width: 90%;
    height: 250px;
    border-radius: 15px;
    padding: 20px;
    p {
        font-size: 12px;
        color: #fff;
        line-height: 2;
    }
`;
const Second = styled.div`
    width: 210px;
    margin-right: 20px;
    img {
        display: block;
        width: 100%;
    }
`;
const LeftC = styled.div``;
const Heading = styled.p`
    color: #fff;
    span {
        color: #808080;
    }
`;
const RightC = styled.div`
    display: flex;
    width: 50%;
`;
const Logo = styled.div`
    width: 200px;
    margin: 20px auto;
    img {
        display: block;
        width: 1005;
    }
`;
