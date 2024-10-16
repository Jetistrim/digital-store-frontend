











import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HighlightCard = ({ className = "", discount, img, title }) => {
    return (
        <div className={`bg-[#D8E3F2] rounded-lg p-5 md:p-9 relative ${className}`}>
            <div className="flex flex-col text-left max-w-[194px] gap-2.5 md:gap-0">
                <div className="bg-[#E7FF86] w-[90px] h-8 rounded-full flex px-3 justify-between items-center z-10">
                    <p className="c-text-extra-small bold text-dark-gray-2">{discount}</p>
                    <p className="c-text-extra-small bold text-dark-gray-2">OFF</p>
                </div>
                <h3 className="c-title-extra-small bold text-dark-gray h-[72px] z-10 md:mt-2.5 md:mb-5">
                    {title}
                </h3>
                <Link to="/produtos">
                    <button className="w-36 h-12 z-10 bg-primary-1 text-white rounded-lg c-text-small bold">
                        Comprar
                    </button>
                </Link>
            </div>
            <div className="absolute flex justify-end h-full w-[190px] md:w-[242px] right-0 top-0 z-0">
                <img src={img} className="h-full object-cover object-center" alt={title} />
            </div>
        </div>
    );
};

export default function Destaques1() {
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3000/sapatos');
            setData(response.data);
        };
        fetchData();
    }, []);

    if (!data || data.length === 0) {
        return <p className="text-black">Loading...</p>;
    }

    return (
        <div className="flex flex-col my-10 md:my-[38px_0_100px] gap-2.5 h-fit w-full p-[100px] md:w-[86.12%]">
            <h3 className={`text-dark-gray-2 self-start ${window.innerWidth >= 768 ? "c-text-large" : "c-text-small"} bold`}>
                Coleções em Destaque
            </h3>
            <div className="grid grid-rows-[repeat(auto-fit,212px)] md:grid-rows-[repeat(auto-fit,251px)] grid-cols-[repeat(auto-fit, 320px)] md:grid-cols-3 gap-2.5 md:gap-3">
                <HighlightCard
                    img="Highlight-shirt.svg"
                    title="New drop Supreme"
                    discount={(data[0].sapato_discount / 100).toLocaleString("pt-BR", { style: 'percent' })}
                />
                <HighlightCard
                    img="Highlight-shoe.svg"
                    title="Adidas Colection"
                    discount={(data[0].sapato_discount / 100).toLocaleString("pt-BR", { style: 'percent' })}
                />
                <HighlightCard
                    img="Highlight-headphone.svg"
                    title="New Beats Bass"
                    discount={(data[0].sapato_discount / 100).toLocaleString("pt-BR", { style: 'percent' })}
                />
            </div>
        </div>
    );
}