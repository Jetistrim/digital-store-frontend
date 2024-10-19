import { Link } from "react-router-dom";

const HighlightCard = ({ img, title }) => {
    return (
        <Link className="flex flex-col items-center justify-between">
            <div to="/produtos" className="w-full h-[92px] md:h-[104px] bg-white rounded-full flex justify-center items-center shadow-[0px_3.54px_22.12px_0px_rgba(0,0,0,0.05)] mb-2">
                <img
                    src={img}
                    className="w-[57px] md:w-16 object-cover transition-all duration-300 ease-in-out hover:filter hover:invert-[25%] hover:sepia-[62%] hover:saturate-[2337%] hover:hue-rotate-[305deg] hover:brightness-[91%] hover:contrast-[106%]"
                    alt={title}
                />
            </div>
            <p className={`c-text-extra-small bold text-dark-gray-2 ${window.innerWidth < 768 ? "mobile" : ""}`}>{title}</p>
        </Link>
    );
};

export default function Destaques2() {
    return (
        <div className="flex flex-col w-full md:w-fit md:items-center">
            <h3 className={`text-dark-gray-2 bold mb-5 ml-5 md:ml-0 ${window.innerWidth >= 768 ? "c-text-large" : "c-text-small"}`}>
                Coleções em destaque
            </h3>
            <div className="!grid grid-flow-col auto-cols-[minmax(92px,1fr)] md:grid-cols-5 gap-[19px] md:gap-12 overflow-x-auto md:overflow-visible md:w-[712px] md:h-[138px]">
                <HighlightCard img="Highlight-2-shirt.svg" title="Camisetas" />
                <HighlightCard img="Highlight-2-pants.svg" title="Calças" />
                <HighlightCard img="Highlight-2-pants.svg" title="Bonés" />
                <HighlightCard img="Highlight-2-headphones.svg" title="Headphones" />
                <HighlightCard img="Highlight-2-shoe.svg" title="Tênis" />
            </div>
        </div>
    );
}