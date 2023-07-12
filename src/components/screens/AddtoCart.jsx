import React from "react";
import { styled } from "styled-components";
import Header from "../includes/Header";

function AddtoCart({ cartData, setCartdata, setGotoCart, gotocart }) {
    console.log(cartData);
    return (
        setGotoCart && (
            <>
                <MainCOnatiner>
                    <Header />
                    {cartData === 0 ? (
                        <h1>cart is empty</h1>
                    ) : (
                        <Wrapper>
                            {cartData?.map((item, index) => (
                                <All key={item.id}>
                                    <MainDiv>
                                        <ImageDiv>
                                            <img src={item.image} alt="Image" />
                                        </ImageDiv>
                                        <New>New</New>
                                    </MainDiv>
                                    <TitleDiv>
                                        <Left>
                                            <Title>{item.category}</Title>
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
                        </Wrapper>
                    )}
                </MainCOnatiner>
            </>
        )
    );
}

export default AddtoCart;
const MainCOnatiner = styled.div`
    background-color: #fff;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
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
    padding: 40px;
    position: relative;
    border-radius: 20px;
    height: max-content;
    min-height: 200px;
    /* max-height: 200px;/ */
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
    margin-bottom: 30px;
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
