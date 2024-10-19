











import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { default as But } from './buttons/Buttons'
import axios from 'axios';
import { Skeleton } from './ui/skeleton';

const HighlightCard = ({ className = "", discount, img, title }) => {
    return (
        <div className={`bg-[#D8E3F2] rounded-lg h-full relative p-[20px] md:p-0 ${className}`}>
            <div className="flex flex-col text-left max-w-[194px] gap-2.5 md:gap-0 md:mt-[34px] md:ml-[30px] relative z-10">
                <div className="bg-[#E7FF86] w-[96px] h-8 rounded-full flex items-center justify-center ">
                    <p className="c-text-extra-small bold text-dark-gray-2">{`${(discount / 100).toLocaleString("pt-BR", { style: 'percent'})} OFF`}</p>
                </div>
                <h3 className="c-title-extra-small md:c-title-small bold text-dark-gray md:mt-2.5 md:mb-[20px] ">
                    {title}
                </h3>
                <Link to="/produtos" className="md:w-[158px] w-[144px]">
                    <But buttonType="secondary" className="w-full h-[48px] rounded-lg c-text-small bold">
                        Comprar
                    </But>
                </Link>
            </div>
            <div className="absolute flex justify-end h-full w-[190px] md:w-[242px] top-0 right-0 z-0">
                <img src={img} className="h-full object-cover object-center" alt={title} />
            </div>
        </div>
    );
};

export default function Destaques1() {
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const response = await (await axios.get('http://localhost:3000/sapatos'));
            setData(response.data);
        };
        fetchData();
    }, []);

    if (!data || data.length === 0) {
        return <Skeleton className="h-full w-full" />;
    }

    return (
        <div className="flex flex-col my-10 md:my-[38px_0_100px] gap-2.5 w-full p-[20px] md:p-[100px] md:w-[86.12%]">
            <h3 className={`text-dark-gray-2 self-start ${window.innerWidth >= 768 ? "c-text-large" : "c-text-small"} bold`}>
                Coleções em Destaque
            </h3>
            <div className="!grid grid-rows-[repeat(auto-fit,212px)] md:grid-rows-[repeat(auto-fit,251px)] grid-cols-[repeat(auto-fit,338px)] md:grid-cols-[repeat(auto-fit,405px)] gap-[10px] md:gap-[12px]">
                <HighlightCard
                    img="Highlight-shirt.svg"
                    title="New drop Supreme"
                    discount={data[0].sapato_discount}
                />
                <HighlightCard
                    img="Highlight-shoe.svg"
                    title="Adidas Colection"
                    discount={data[0].sapato_discount}
                />
                <HighlightCard
                    img="Highlight-headphone.svg"
                    title="New Beats Bass"
                    discount={data[0].sapato_discount}
                />
            </div>
        </div>
    );
}