import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import styled from "styled-components";


const Highlights2WrapperContainer = styled.div`
    & * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: 768px) {
        align-items: center;
        width: fit-content;
    }

    & .colecoes {
        color: var(--dark-gray-2);
        width: fit-content;
        margin-bottom: 20px;
        margin-left: 20px;

        @media (min-width: 768px) {
            margin-left: 0;
        }
    }

    & .cards{
        display: grid;
        grid-template-columns: repeat(5, minmax(92px, 1fr));
        grid-template-rows: repeat(1, minmax(125px, 1fr));
        overflow-x: scroll;
        gap: 19px;

        @media (min-width: 768px) {
            gap: 48px;
            width: 712px;
            height: 138px;
            overflow: hidden;
        }

        & .card {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;

            & .image-wrapper {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 92px;
                border-radius: 50%;
                background-color: var(--white);
                box-shadow: 0px 3.54px 22.12px 0px #0000000D;

                @media (min-width: 768px) {
                    height: 104px;
                }

                & img {
                    width: 57px;
                    object-fit: cover;
                    transition: filter ease 300ms;

                    @media (min-width: 768px) {
                        width: 64px;
                    }

                    &:hover {
                        & img {
                            filter: invert(25%) sepia(62%) saturate(2337%) hue-rotate(305deg) brightness(91%) contrast(106%);
                            transition: filter ease 300ms;
                        }
                    }
                }

                &:hover {
                    & img {
                        filter: invert(25%) sepia(62%) saturate(2337%) hue-rotate(305deg) brightness(91%) contrast(106%);
                        transition: filter ease 300ms;
                    }
                }
            }

            & p {
                color: var(--dark-gray-2);
            }
        }
    }
`

const HighlightCard = (props) => {
    return (
        <div className="card">
            <Link to="/produtos" className="image-wrapper">
                <img src={`${props.img}`}/>
            </Link>
            <p className={`text-extra-small bold ${window.innerWidth < 768 ? "mobile" : ""}`}>{props.title}</p>
        </div>
    );
};

HighlightCard.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string
}

const Destaques2 = () => {

    return (
        <Highlights2WrapperContainer>
            <h3 className={`colecoes bold ${window.innerWidth >= 768 ? "text-large" : "text-small"}`}>Coleções em destaque</h3>
            <div className="cards">
                <HighlightCard img="Highlight-2-shirt.svg" title="Camisetas" />
                <HighlightCard img="Highlight-2-pants.svg" title="Calças" />
                <HighlightCard img="Highlight-2-pants.svg" title="Bonés" />
                <HighlightCard img="Highlight-2-headphones.svg" title="Headphones" />
                <HighlightCard img="Highlight-2-shoe.svg" title="Tênis" />
            </div>
        </Highlights2WrapperContainer>
    );
}

export default Destaques2;