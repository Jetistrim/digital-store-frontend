import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Skeleton } from "./ui/skeleton";

const Card = () => {
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:3000/sapatos");
            setData(response.data);
        };
        fetchData();
    }, []);

    if (!data) {
        return (
            <>
                <Skeleton />
            </>
        );
    }

    return (
        <div className="flex flex-col justify-between">
            <Link to="/produtos" className="bg-white relative h-[179px] md:h-[371px] w-full mb-4">
                {data[0].sapato_discount > 0 && (
                    <div className="absolute flex items-center justify-evenly w-[88px] h-8 rounded-full px-[11px] bg-[#E7FF86] left-[13px] top-[14px] md:top-5 md:left-5">
                        <p className="c-text-tinny bold text-dark-gray-2">{data[0].sapato_discount}%</p>
                        <p className="c-text-tinny bold text-dark-gray-2">OFF</p>
                    </div>
                )}
                <img src={data[0].sapato_image} alt={data[0].sapato_name} className="absolute top-[20px] right-[10px] " />
            </Link>

            <div className="flex flex-col items-start">
                <Link to="/produtos" className="c-text-tinny bold text-light-gray">
                    {data[0].sapato_type}
                </Link>
                <Link to="/produtos"
                    className={`text-dark-gray-2 truncate w-[149px] md:w-auto ${window.innerWidth >= 768 ? "c-text-large" : "c-text-extra-small"}`}>
                    {data[0].sapato_name}
                </Link>
                <Link to="/produtos" className="flex gap-2">
                    <p className={`text-light-gray line-through ${window.innerWidth >= 768 ? "c-text-large" : "c-text-extra-small"}`}>
                        ${data[0].sapato_value}
                    </p>
                    <p className={`text-dark-gray bold ${window.innerWidth >= 768 ? "c-text-large" : "c-text-extra-small"}`}>
                        ${(data[0].sapato_value * (100 - data[0].sapato_discount)) / 100}
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default function Destaques3() {
    return (
        <div className="flex flex-col gap-5 mt-20 mb-10 md:mb-30">
            <div className="flex justify-between items-center">
                <h3
                    className={`text-dark-gray-2 bold ${window.innerWidth >= 768 ? "c-text-large" : "c-text-small"}`}
                >
                    Produtos em alta
                </h3>
                <Link
                    to="/produtos"
                    className={`text-primary-1 flex items-center gap-2 ${window.innerWidth >= 768 ? "c-text-medium" : "c-text-extra-small"
                        }`}
                >
                    <span>Ver todos</span>
                    <span className="pi-arrow-right text-[17.75px] md:self-start"></span>
                </Link>
            </div>
            <div className="!grid gap-x-[9px] gap-y-[40px] grid-cols-[repeat(2,163px)] grid-rows-[repeat(4,264px)] md:grid-cols-[repeat(4,292px)] md:grid-rows-[repeat(auto-fit,439px)] md:auto-rows-[439px] md:justify-between md:gap-x-[24px] ">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}