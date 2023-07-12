import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { styled } from "styled-components";
import Header from "../includes/Header";
import { Link } from "react-router-dom";
import AddtoCart from "./AddtoCart";
import { reducer } from "../../context/reducer";

function MoreProducts() {
    const [data, setData] = useState([]);
    const [cartData, setCartdata] = useState([]);
    const [gotocart, setGotoCart] = useState(false);
    const [id, Setid] = useState("");
    const [state, dispatch] = useReducer(reducer);

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = () => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((response) => {
                setData(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const HandleAddtoCart = (item) => {
        setCartdata([...cartData, item]);
        dispatch({
            type: "CART_DATA",
            cartdata: cartData,
        });
    };
    console.log(cartData, "l");
    return (
        <>
            {/* <AddtoCart
                cartData={cartData}
                setCartdata={setCartdata}
                setGotoCart={setGotoCart}
                gotocart={gotocart}
            /> */}
            <Header />
            <MainCOnatiner>
                <Shop
                    to=""
                    onClick={() => {
                        setGotoCart(true);
                    }}
                >
                    Go to Cart
                    <Icon>
                        <img
                            src={require("../../assets/shop.svg").default}
                            alt="Icon"
                        />
                    </Icon>
                </Shop>
                <Wrapper>
                    {data.map((item, index) => (
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

                            <AddtoCarts
                                onClick={() => {
                                    Setid(item.id);
                                    HandleAddtoCart(item);
                                }}
                            >
                                Add to cart
                            </AddtoCarts>
                        </All>
                    ))}
                </Wrapper>
            </MainCOnatiner>
        </>
    );
}

export default MoreProducts;
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
const AddtoCarts = styled.div`
    padding: 15px 20px;
    border: none;
    background: #fde8dd;
    border-radius: 10px;
    color: #f4600c;
    font-size: 12px;
    margin-top: 50px;
    width: 200px;
    margin: 20px auto;
    text-align: center;
`;
const Shop = styled(Link)`
    width: 100px;
    display: flex;
    align-items: center;
    padding: 15px 20px;
    border: none;
    background: linear-gradient(to right, #f4b30c 1%, #f4600c 99%);
    border-radius: 10px;
    color: #fff;
    font-size: 12px;
    margin: 0 auto;
`;
const Icon = styled.div`
    width: 15px;
    margin-left: 5px;
    img {
        display: block;
        width: 100%;
    }
`;
