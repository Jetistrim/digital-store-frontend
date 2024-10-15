











import PropTypes from "prop-types"
import styled from "styled-components";
import { default as But } from "./buttons/Buttons";
import { useEffect, useRef, useState } from "react";

const BannersBigWraperContainer = styled.div`
    overflow: hidden;
    width: 100%;
    height: 662px;
    display: flex;
    position: relative;
    flex-direction: column;
    z-index: 0;

    @media (min-width: 768px) {
        height: 681px;
    }

    & .banners-wrapper {
        width: inherit;
        height: 616px;
        display: flex;
        flex-direction: row;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        overflow-x: hidden;
        position: absolute;

        @media (min-width: 768px) {
            height: 622px;
        }
    }

    & .banners-links{
        z-index: 2;
        display: flex;
        justify-content: space-between;
        align-self: center;
        width: 78px;
        padding: 0;
        margin: 0;
        position: absolute;
        bottom: 34px;

        @media (min-width: 768px) {

        }

        & li{
            display: flex;
            width: 12px;
            height: 12px;
            border-radius: 6px;
            transition: background-color ease 300ms;

            &:hover {
                background-color: #007bffaa;
            }
        }
    }
`

const Banner1Container = styled.div`
    display: flex;
    position: relative;
    float: left;
    flex-direction: column;
    scroll-snap-align: start;
    overflow-y: hidden;
    flex: 1 0 100%;

    & .sapato{
        width: calc(100% - 5px - 43px);
        height: fit-content;
        order: -1;
        margin: 12px 43px 0 5px;

        @media (min-width: 768px) {
            position: absolute;
            margin: 0;
            right: 91px;
            top: 10px;
            width: min(62%, 886px);
            object-fit: scale-down;
        }
    }

    & .pirilampos{
        position: absolute;
        top: 20px;
        right: 0;
        transform: translateX(50%);
        clip-path: rect(0 50% 100% 0);

        @media (min-width: 768px) {
            top: 78px;
            right: 37px;
            transform: none;
        }
    }
    
    & .propag{
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: start;
        width: calc(100vw - 40px);
        overflow-wrap: normal;
        margin: 0 20px;
        order: 1;

        @media (min-width: 768px) {
            width: 510px;
            height: 352px;
            text-align: start;
            margin: 124px 0 0 100px;
        }

        & h2 {
            font-family: "Inter";
            font-weight: 800px;
            font-size: 40px;
            line-height: 50px;
            letter-spacing: 1px;
            margin: 10px 0 20px 0;

            @media (min-width: 768px) {
                font-size: 64px;
                line-height: 66px;
                margin: 20px 0;
            }
        }

        & button{
            height: 48px;
            width: 100%;
            margin-top: 40px;

            @media (min-width: 768px) {
                width: 220px;
            }
        }
    }
`;

const Banner = (props) => {

    return (
        <Banner1Container id={props.id}>
            <div className="propag">
                <h4 className="c-text-small bold m-0 text-primary-1 md:text-warning">Melhores ofertas personalizadas</h4>
                <h2 className="text-dark-gray">Queima de stoque Nike 🔥</h2>
                <p className={`m-0 text-dark-gray-2 ${window.innerWidth <= 768 ? "c-text-extra-small" : "c-text-medium"}`}>{props.textinho}</p>
                <But buttonType="primary" label="Clique Aqui" className="c-text-small bold text-light-gray-3" />
            </div>
            <img className="sapato" src="White-Sneakers.svg" />
            {/* <img className="pirilampos" src="Ornament 11.svg" /> */}
        </Banner1Container>
    );
}

Banner.propTypes = {
    id: PropTypes.string.isRequired,
    textinho: PropTypes.string
}

const Banners = () => {
    const [activeBannerIndex, setActiveBannerIndex] = useState(0);
    const bannersWrapperRef = useRef(null);
    const intervalRef = useRef(null);

    const handleBannerClick = (index) => {
        setActiveBannerIndex(index);

        bannersWrapperRef.current.scrollTo({
            left: index * window.innerWidth,
            behavior: 'auto',
        });

        clearInterval(intervalRef.current);
        autoSlide();
    };

    const autoSlide = () => intervalRef.current = setInterval(() => {
        setActiveBannerIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 3000);

    const reloadAutoSlide = () => clearInterval(intervalRef.current);

    useEffect(() => {
        autoSlide();

        return () => {
            reloadAutoSlide();
        }
    }, []);

    useEffect(() => {
        bannersWrapperRef.current.scrollTo({
            left: activeBannerIndex * window.innerWidth,
            behavior: 'auto',
        });
    }, [activeBannerIndex]);
    
    return (
        <BannersBigWraperContainer className="bg-light-gray-3">

            <div className="banners-wrapper" ref={bannersWrapperRef}>
                <Banner id="banner1" textinho="bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                <Banner id="banner2" textinho="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                <Banner id="banner3" />
                <Banner id="banner4" />
            </div>

            <ul className="banners-links">
            {[1, 2, 3, 4].map((index) => (
                <li key={index} onClick={() => {handleBannerClick(index - 1)}} className={`bg-light-gray-2 ${index === activeBannerIndex + 1 ? 'bg-primary-1' : ''}`} />
            ))}
            </ul>

        </BannersBigWraperContainer>
    );
}

export default Banners;