import { Link } from "react-router-dom";
import styled from "styled-components";

const HighlightCardContainer = styled.div`
    a{
        transition-duration: 300ms;

        &:hover div > img{
            filter: invert(23%) sepia(84%) saturate(2200%) hue-rotate(309deg) brightness(87%) contrast(100%);
            transform: scale(1.1);
        }

        &:hover > p{
            filter: invert(23%) sepia(84%) saturate(2200%) hue-rotate(309deg) brightness(87%) contrast(100%);
        }
    }
`

const HighlightCard = ({ img, title }) => {
    return (
        <HighlightCardContainer>
            <Link className="flex flex-col items-center justify-between">
                <div to="/produtos" className="w-full h-[104px] bg-white rounded-full flex justify-center items-center shadow-[0px_3.54px_22.12px_0px_rgba(0,0,0,0.05)] mb-2">
                    <img
                        src={img}
                        className="w-[57px] md:w-16 object-cover transition-all duration-300 ease-in-out"
                        alt={title}
                    />
                </div>
                <p className={`c-text-extra-small bold text-dark-gray-2 ${window.innerWidth < 768 ? "mobile" : ""}`}>{title}</p>
            </Link>
        </HighlightCardContainer>
    );
};

export default function Destaques2() {
    return (
        <div className="flex flex-col md:items-center">
            <h3 className={`text-dark-gray-2 bold mb-[20px] ml-[20px] md:ml-0 ${window.innerWidth >= 768 ? "c-text-large" : "c-text-small"}`}>
                Coleções em destaque
            </h3>
            <div className="!grid grid-cols-[repeat(5,104px)] grid-rows-[repeat(1,138px)] gap-[19px] md:gap-12 overflow-x-scroll md:overflow-x-hidden w-dvw md:w-fit">
                <HighlightCard img="Highlight-2-shirt.svg" title="Camisetas" />
                <HighlightCard img="Highlight-2-pants.svg" title="Calças" />
                <HighlightCard img="Highlight-2-pants.svg" title="Bonés" />
                <HighlightCard img="Highlight-2-headphones.svg" title="Headphones" />
                <HighlightCard img="Highlight-2-shoe.svg" title="Tênis" />
            </div>
        </div>
    );
}