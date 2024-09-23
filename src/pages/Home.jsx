// import OfertaEspecial from "../components/OfertaEspecial";
import Banners from "../components/Banner"
import Destaques1 from "../components/Destaques-1";
import Destaques2 from "../components/Destaques-2";
import Destaques3 from "../components/Destaques-3";
import OfertaEspecial from "../components/OfertaEspecial";

const Home = () => {
    return (
        <>
            <Banners />
            <Destaques1 />
            <Destaques2 />
            <Destaques3 />
            <OfertaEspecial />
        </>
    );
}

export default Home;