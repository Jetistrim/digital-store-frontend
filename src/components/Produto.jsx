import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import styled from "styled-components";
import 'boxicons';
import { useState } from 'react';

const ProdutoContainer = styled.div`

`


const Produto = () => {

    const ButtonGroupColor = () => {
        const [activeButton, setActiveButton] = useState(null);
      
        const handleClick = (buttonId) => {
          setActiveButton(buttonId);
        };
      
        const getButtonStyle = (buttonId) => {
          return {
            border: buttonId === activeButton ? '2px solid #C92071' : '2px solid transparent'
          };
        };
      
        return (
          <div className="">
            <button className="w-[31px] h-[31px] mr-2.5 bg-[#6FEEFF] rounded-full" style={getButtonStyle(1)} onClick={() => handleClick(1)}></button>
            <button className="w-[31px] h-[31px] mr-2.5 bg-[#FF6969] rounded-full" style={getButtonStyle(2)} onClick={() => handleClick(2)}></button>
            <button className="w-[31px] h-[31px] mr-2.5 bg-[#5E5E5E] rounded-full" style={getButtonStyle(3)} onClick={() => handleClick(3)}></button>
            <button className="w-[31px] h-[31px] bg-[#6D70B7] rounded-full" style={getButtonStyle(4)} onClick={() => handleClick(4)}></button>
          </div>
        );
      };

      const ButtonGroupNumber = () => {
        const [activeButton, setActiveButton] = useState(null);
      
        const handleClick = (buttonId) => {
          setActiveButton(buttonId);
        };
      
        const getButtonStyle = (buttonId) => {
          return {
            background: buttonId === activeButton ? '#C92071' : '',
            color: buttonId === activeButton ? '#FFFFFF' : ''
          };
        };
      
        return (
          <div className="">
            <button className="w-[48px] h-[48px] text-base border rounded border-light-gray-2 mr-2.5 text-[#474747] font-bold" style={getButtonStyle(1)} onClick={() => handleClick(1)}>39</button>
            <button className="w-[48px] h-[48px] text-base border rounded border-light-gray-2 mr-2.5 text-[#474747] font-bold" style={getButtonStyle(2)} onClick={() => handleClick(2)}>40</button>
            <button className="w-[48px] h-[48px] text-base border rounded border-light-gray-2 mr-2.5 text-[#474747] font-bold" style={getButtonStyle(3)} onClick={() => handleClick(3)}>41</button>
            <button className="w-[48px] h-[48px] text-base border rounded border-light-gray-2 text-[#474747] font-bold" style={getButtonStyle(4)} onClick={() => handleClick(4)}>42</button>
          </div>
        );
      };

    return ( 
        <ProdutoContainer className="flex-wrap min-w-[375px] items-center px-4 lg:px-8 justify-center  bg-[#F9F8FE]">
            <div className="lg:flex gap-10">
                <div>
                    <section className="inline-block md:inline-flex h-[42px] md:h-[22px] text-xs lg:text-sm leading-[18px] md:leading-[22px] text-[#474747] my-4 text-left tracking-[0.5px] justify-start md:px-6 md:gap-2">
                       <a className="font-bold tracking-[0.75px] leading-[20px]" href="">Home</a> / <a href="">Produtos</a> / <a href="">Tênis</a> / <a href="">Nike</a> / <h3>Tênis Nike Revolution 6 Next Nature Masculino </h3>
                    </section>
                    <section>
                        <div className="lg:w-[700.73px] lg:h-[571px] flex itens-center justify-center rounded mb-[10px]">
                            <img className=" lg:w-full lg:h-full bg-[#E2E3FF]" src="https://s3-alpha-sig.figma.com/img/d52b/cba8/6d839d9bc81eba71990cf69a20c77364?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HvQrjBEUVEHyoIGgjb7g4bWAa9r2hJ~VCMsF~xlHstEWjqdy5ffwLCrmv4denIR8yVJ9V2hDXMPJCXJsc0QU7l3WITMKkomuz4U6qYGnYyzV6HPAf5AyZ868DwQk9ZqkQ5E9Gf9dr3S~K~dyWVii~DPmvJr4o1tZF0XOVbiKXV0y4lO1q4pPp2Zb-WgiRQ6gJDT99DkX-CHGAoYfZD3C4dvHGNN2exFXBkFwvVy6x6w~aooWQe2uWYyoWae7Tafz1NTlY2T8POMO0KXAEkMfw1liuCbsYyEPQvPWBNA74hgoWY9bCtvBhtn0iFD3JOcI4gqzCqBfkic8I1PoNYJtDA__" alt="tênis" />
                        </div>
                        <div>
                            <ul  className="inline-flex space-x-[7px] md:space-x-4 md:px-[40px] lg:px-0 lg:space-x-[28px] lg:mb-4 lg:mt-2.5">
                                <li><img className="cursor-pointer min-w-[60.17px] md:w-[117.81px] h-[57.51px] md:h-[96px] bg-[#E2E3FF] rounded" src="https://s3-alpha-sig.figma.com/img/d52b/cba8/6d839d9bc81eba71990cf69a20c77364?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HvQrjBEUVEHyoIGgjb7g4bWAa9r2hJ~VCMsF~xlHstEWjqdy5ffwLCrmv4denIR8yVJ9V2hDXMPJCXJsc0QU7l3WITMKkomuz4U6qYGnYyzV6HPAf5AyZ868DwQk9ZqkQ5E9Gf9dr3S~K~dyWVii~DPmvJr4o1tZF0XOVbiKXV0y4lO1q4pPp2Zb-WgiRQ6gJDT99DkX-CHGAoYfZD3C4dvHGNN2exFXBkFwvVy6x6w~aooWQe2uWYyoWae7Tafz1NTlY2T8POMO0KXAEkMfw1liuCbsYyEPQvPWBNA74hgoWY9bCtvBhtn0iFD3JOcI4gqzCqBfkic8I1PoNYJtDA__" alt="" /></li>
                                <li><img className="cursor-pointer min-w-[60.17px] md:w-[117.81px] h-[57.51px] md:h-[96px]  bg-[#FFE8BC] rounded" src="https://s3-alpha-sig.figma.com/img/d52b/cba8/6d839d9bc81eba71990cf69a20c77364?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HvQrjBEUVEHyoIGgjb7g4bWAa9r2hJ~VCMsF~xlHstEWjqdy5ffwLCrmv4denIR8yVJ9V2hDXMPJCXJsc0QU7l3WITMKkomuz4U6qYGnYyzV6HPAf5AyZ868DwQk9ZqkQ5E9Gf9dr3S~K~dyWVii~DPmvJr4o1tZF0XOVbiKXV0y4lO1q4pPp2Zb-WgiRQ6gJDT99DkX-CHGAoYfZD3C4dvHGNN2exFXBkFwvVy6x6w~aooWQe2uWYyoWae7Tafz1NTlY2T8POMO0KXAEkMfw1liuCbsYyEPQvPWBNA74hgoWY9bCtvBhtn0iFD3JOcI4gqzCqBfkic8I1PoNYJtDA__" alt="" /></li>
                                <li><img className="cursor-pointer min-w-[60.17px] md:w-[117.81px] h-[57.51px] md:h-[96px]  bg-[#FFC0BC] rounded" src="https://s3-alpha-sig.figma.com/img/d52b/cba8/6d839d9bc81eba71990cf69a20c77364?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HvQrjBEUVEHyoIGgjb7g4bWAa9r2hJ~VCMsF~xlHstEWjqdy5ffwLCrmv4denIR8yVJ9V2hDXMPJCXJsc0QU7l3WITMKkomuz4U6qYGnYyzV6HPAf5AyZ868DwQk9ZqkQ5E9Gf9dr3S~K~dyWVii~DPmvJr4o1tZF0XOVbiKXV0y4lO1q4pPp2Zb-WgiRQ6gJDT99DkX-CHGAoYfZD3C4dvHGNN2exFXBkFwvVy6x6w~aooWQe2uWYyoWae7Tafz1NTlY2T8POMO0KXAEkMfw1liuCbsYyEPQvPWBNA74hgoWY9bCtvBhtn0iFD3JOcI4gqzCqBfkic8I1PoNYJtDA__" alt="" /></li>
                                <li><img className="cursor-pointer min-w-[60.17px] md:w-[117.81px] h-[57.51px] md:h-[96px]  bg-[#DEC699] rounded" src="https://s3-alpha-sig.figma.com/img/d52b/cba8/6d839d9bc81eba71990cf69a20c77364?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HvQrjBEUVEHyoIGgjb7g4bWAa9r2hJ~VCMsF~xlHstEWjqdy5ffwLCrmv4denIR8yVJ9V2hDXMPJCXJsc0QU7l3WITMKkomuz4U6qYGnYyzV6HPAf5AyZ868DwQk9ZqkQ5E9Gf9dr3S~K~dyWVii~DPmvJr4o1tZF0XOVbiKXV0y4lO1q4pPp2Zb-WgiRQ6gJDT99DkX-CHGAoYfZD3C4dvHGNN2exFXBkFwvVy6x6w~aooWQe2uWYyoWae7Tafz1NTlY2T8POMO0KXAEkMfw1liuCbsYyEPQvPWBNA74hgoWY9bCtvBhtn0iFD3JOcI4gqzCqBfkic8I1PoNYJtDA__" alt="" /></li>
                                <li><img className="cursor-pointer min-w-[60.17px] md:w-[117.81px] h-[57.51px] md:h-[96px]  bg-[#E8DFCF] rounded" src="https://s3-alpha-sig.figma.com/img/d52b/cba8/6d839d9bc81eba71990cf69a20c77364?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HvQrjBEUVEHyoIGgjb7g4bWAa9r2hJ~VCMsF~xlHstEWjqdy5ffwLCrmv4denIR8yVJ9V2hDXMPJCXJsc0QU7l3WITMKkomuz4U6qYGnYyzV6HPAf5AyZ868DwQk9ZqkQ5E9Gf9dr3S~K~dyWVii~DPmvJr4o1tZF0XOVbiKXV0y4lO1q4pPp2Zb-WgiRQ6gJDT99DkX-CHGAoYfZD3C4dvHGNN2exFXBkFwvVy6x6w~aooWQe2uWYyoWae7Tafz1NTlY2T8POMO0KXAEkMfw1liuCbsYyEPQvPWBNA74hgoWY9bCtvBhtn0iFD3JOcI4gqzCqBfkic8I1PoNYJtDA__" alt="" /></li>
                            </ul>
                        </div>
                    </section>
                </div>
                <div className="lg:h-[571px] lg:py-5">
                <section>
                    <h2 className="text-2xl lg:text-[32px] mb:text-center font-bold mt-[20px] lg:mt-[30px] lg:leading-[36px] text-[#1F1F1F] tracking-[1px] lg:gap-4 md:px-6 "> Tênis Nike Revolution 6 Next Nature Masculino </h2>
                    <div>
                        <h4 className="h-[21px] text-xs mt-[10px] md:px-6 text-[#666666] font-medium tracking-[0.5px]"> Casual | Nike | REF:38416711 </h4>
                    </div>
                </section>
                <section className="inline-flex md:flex h-[23px] mt-[10px] font-medium space-x-2 py-1 md:px-6 " >
                       <button className="h-[14px]">
                       <box-icon size="cssSize" type="solid" name="star" color='#f6aa1c'></box-icon>
                       <box-icon size="cssSize" type="solid" name="star" color='#f6aa1c'></box-icon>
                       <box-icon size="cssSize" type="solid" name="star" color='#f6aa1c'></box-icon>
                       <box-icon size="cssSize" type="solid" name="star" color='#f6aa1c'></box-icon>
                       <box-icon size="cssSize" name='star' color='#f6aa1c' ></box-icon>
                       </button>
                        <button className=" w-[63px] h-[23px] bg-amber-500 text-[#FFFFFF] rounded"> <span className="font-black tracking-[0.25px]">4.7</span> <box-icon size="xs" type="solid" name="star" color="#FFFFFF"></box-icon> </button>
                        <button className=" w-[111px] h-[16px] text-[#8F8F8F]	text-sm	font-medium mt-1 tracking-[0.25px]">(90 avaliações)</button>
                </section>
                <section className="inline-block mt-4 md:mt-6 md:px-6">
                    <div className="h-[38px] inline-flex items-stretch">
                        <h3 className="w-[26px] h-[28px] text-base text-[#474747] font-normal tracking-[0.75px]">R$ </h3><h2  className="relative w-[89px] h-[36px] text-4xl text-[#474747] font-bold bottom-3 tracking-[1px]">219,00</h2>
                        <h3 className="ml-5 w-[26px] h-[28px] text-base text-[#CCCCCC] line-through tracking-[0.75px]">219,00</h3>
                    </div>
                    <div>
                    </div>
                </section>
                <section className="md:px-6">
                    <h4 className="h-[22px] text-sm text-[#8F8F8F] font-bold mt-3 tracking-[0.75px]">Descrição do produto</h4>
                    <div>
                        <p className=" h-[110px] lg:h-auto mt-1.5 text-sm text-[#474747] font-medium tracking-[0.25px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                </section>
                <section className="md:px-6">
                    <h4 className="w-[68px] h-[22px] text-sm text-[#8F8F8F] font-bold mt-3 md:mt-0 lg:mt-3 tracking-[0.75px]">Tamanho</h4>
                    <div>
                        <ol className="flex mt-2.5 tracking-[0.75px]">
                            <ButtonGroupNumber></ButtonGroupNumber>
                        </ol>
                    </div>
                </section>
                <section className="md:px-6">
                    <h4 className="w-[68px] h-[22px] text-sm text-[#8F8F8F] font-bold mt-4 tracking-[0.75px]">Cores</h4>
                    <div className="mt-2.5">
                        <ButtonGroupColor></ButtonGroupColor>
                    </div>
                </section>
                <section>
                    <button className="font-bold w-[335px] lg:w-[220px] h-[48px] text-center bg-amber-500 hover:bg-[#CF8900] rounded-lg text-[#F5F5F5] tracking-[0.75px] mt-5 lg:mt-3 mb-3 md:ml-[46px]">COMPRAR</button>
                </section>
                </div>
            </div>
        </ProdutoContainer>
     );
}
 
export default Produto;