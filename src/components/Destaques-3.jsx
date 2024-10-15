import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Highlights3WrapperContainer = styled.div`
*{
    margin: 0;
    padding: 0;
}

    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 80px;
    margin-bottom: 40px;
    overflow-x: hidden;
    width: calc(100% - 10.66%);

    @media (min-width: 768px) {
        width: calc(100% - 13.88%);
        margin-bottom: 120px;
    }

    & .colecoes{
        display: flex;
        justify-content: space-between;
        align-items: center;

        & a{
            height: 24px;
            display: flex;
            justify-content: space-between;
            text-decoration: none;
            gap: 8px;

            @media (min-width: 768px) {
                height: 34px;
            }

            & .writed{
                text-align: center;
            }

            & .pi-arrow-right{
                display: flex;
                align-items: center;

                &::before{
                    font-size: 17.75px;
                    height: 22px;

                    @media (min-width: 768px) {
                        display: flex;
                        align-self: start;
                    }
                }
            }
        }
    }

    & .cards {
        display: grid;
        gap: 40px 9px;
        grid-template-columns: repeat(auto-fit, 163px);
        grid-template-rows: repeat(auto-fit, 264px);
        grid-auto-rows: 264px;
        
        @media (min-width: 768px) {
            column-gap: 0;
            grid-template-columns: repeat(auto-fit, 292px);
            grid-template-rows: repeat(auto-fit, 439px);
            grid-auto-rows: 439px;
            justify-content: space-between;
        }

        & .card{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: start;

            & .img-disc{
                display: flex;
                position: relative;
                height: 179px;
                width: 100%;
                text-decoration: none;

                @media (min-width: 768px) {
                    height: 371px;
                }

                & .discount{
                    display: flex;
                    align-items: center;
                    position: absolute;
                    justify-content: space-evenly;
                    width: 88px;
                    height: 32px;
                    border-radius: 29px;
                    padding: 4px 11px;
                    background-color: #E7FF86;
                    left: 13px;
                    top: 14px;

                    @media (min-width: 768px) {
                        top: 20px;
                        left: 20px;
                    }
                }

                & img{
                    width: 90%;
                }
            }

            & .texts{
                display: flex;
                flex-direction: column;
                align-items: left;

                & .prod-type{
                    width: fit-content;
                    text-decoration: none;
                }

                & .prod-name{
                    width: 149px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    text-decoration: none;

                    @media (min-width: 768px) {
                        width: unset;
                    }
                }

                & .prices{
                    display: flex;
                    width: fit-content;
                    gap: 8px;
                    text-decoration: none;

                    & .origin-price{
                        text-decoration: line-through;
                    }
                }
            }
        }
    }
`;

const Card = () => {

    const [data, setData] = useState();

    useEffect(() => {
        const fecthData = async () => {

            const response = await axios.get("http://localhost:3000/sapatos");
            setData(response.data);

        }

        fecthData();
    }, []);

    return (
        data ? (
            <div className="card">
                <Link to="/produtos" className="img-disc bg-white">
                    {data[0].sapato_discount > 0 && <div className="discount text-dark-gray-2">
                        <p className="percentage c-text-tinny bold">{data[0].sapato_discount}%</p>
                        <p className="c-text-tinny bold">OFF</p>
                    </div>}

                    <img src={data[0].sapato_image} />
                </Link>

                <div className="texts">
                    <Link to="/produtos" className="prod-type c-text-tinny bold text-light-gray">{data[0].sapato_type}</Link>
                    <Link to="/produtos" className={`prod-name text-dark-gray-2 ${window.innerWidth >= 768 ? 'c-text-large' : 'c-text-extra-small'} `}>{data[0].sapato_name}</Link>
                    <Link to="/produtos" className="prices">
                        <p className={`origin-price text-light-gray ${window.innerWidth >= 768 ? 'c-text-large' : 'c-text-extra-small'} `}>${data[0].sapato_value}</p>
                        <p className={`now-price text-dark-gray ${window.innerWidth >= 768 ? 'c-text-large' : 'c-text-extra-small'} bold`}>${(data[0].sapato_value * data[0].sapato_discount) / 100}</p>
                    </Link>
                </div>
            </div>
        ) : (
            <p>Loading...</p>
        )
    )
}

const Destaques3 = () => {

    return (
        <Highlights3WrapperContainer>
            <div className="colecoes">
                <h3 className={`text-dark-gray-2 bold ${window.innerWidth >= 768 ? "c-text-large" : "c-text-small"}`}>Produtos em alta</h3>
                <Link to="/produtos" className={`text-primary-1 ${window.innerWidth >= 768 ? "c-text-medium" : "c-text-extra-small"}`}>
                    <p className="writed">Ver todos</p>
                    <p className="pi-arrow-right"></p>
                </Link>
            </div>
            <div className="cards">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </Highlights3WrapperContainer>
    );
}

export default Destaques3;