





















import { MenuIcon, SearchIcon, ShoppingCartIcon } from "lucide-react"; // Exemplos de ícones
import { useCallback, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { default as Button } from "./buttons/Buttons"

const Sidebar = ({ openSidebar }) => {

  const navLinkStyles = useCallback(({ isActive }) => {
    return `c-text-small relative transition-all duration-500 after:rounded-[2px] after:content-[''] after:duration-500 after:transition-all after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] ${isActive
      ? "text-primary-1 after:w-full after:bg-primary-1 bold"
      : "text-dark-gray-2 after:w-0 after:bg-transparent hover:text-primary-1 hover:after:bg-primary-1"
      }`;
  }, [])

  return (
    <div className={`fixed top-[66.5px] left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out dur ${openSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
      <h3 className="c-text-small bold ">Páginas</h3>
      <nav className="p-4">
        <ul>
          <li className="mb-[10px] w-fit ">
            <NavLink to="/" className={navLinkStyles}>Home</NavLink>
          </li>
          <li className="mb-[10px] w-fit">
            <NavLink to="/produtos" className={navLinkStyles}>Products</NavLink>
          </li>
          <li className="mb-[10px] w-fit">
            <NavLink to="/categorias" className={navLinkStyles}>Categories</NavLink>
          </li>
          <li className="w-fit">
            <NavLink to="/meus-pedidos" className={navLinkStyles}>About Us</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const Header = () => {

  const [openSidebar, setOpenSidebar] = useState(false);
  const handleSidebar = () => {
    setOpenSidebar((option) => !option);
  }

  return (
    <>
      <header className="w-full h-[66.5px] bg-white flex items-center justify-between p-[20px] fixed top-0 z-50">
        <div className="menu-sidebar">
          <label htmlFor="menu-sidebar">
            <MenuIcon className="w-[24px] h-[24px] text-dark-gray " />
          </label>
          <input id="menu-sidebar" type="checkbox" onChange={handleSidebar} className="hidden" checked={openSidebar} >
          </input>
        </div>

        <div className="flex justify-center items-center gap-[4.36px] absolute left-[50%] translate-x-[-50%]">
          <img src="digital.svg" alt="Logo" className="h-[18px]" />
          <h1 className="text-primary-1 font-sans font-semibold text-[19.85px] leading-[24.03px] tracking-[-1%] ">Digital Store</h1>
        </div>

        <div className="flex">
          <button className="p-2">
            <SearchIcon className="text-light-gray-2 " />
          </button>
          <div className="relative">
            <button className="p-2 relative">
              <ShoppingCartIcon className="text-primary-1 " />
              <span className="font-sans w-[17px] absolute top-0 right-0 bg-red-500 [&&]:!bg-primary-1 text-white text-xs rounded-full flex items-center justify-center">
                2
              </span>
            </button>

            <div className="flex flex-col p-[30px] gap-[20px] absolute top-full right-5 shadow-lg shadow-black">
              <h3 className="c-text-small bold text-dark-gray-2 ">Meu Carrinho</h3>
              <div className="w-full h-[2px] bg-light-gray-2 border-0 "></div>

              <div className="flex gap-[20px] w-[255px] justify-between ">
                <div className="DIV-DA-IMAGEM flex justify-center bg-[#E2E3FF] min-w-[71.18px] h-[58px] rounded-[2.67px] ">
                  <img className="h-full" src="Batata.png" alt="BATATA" />
                </div>

                <div className="flex flex-col gap-[5px] w-fit ">
                  <p className="text-dark-gray font-bold font-sans text-[14px] leading-[20px] tracking-[0.75px] ">Lorem ipsum dolor sit amet consectetur batata</p>
                  <div className="flex w-full">
                    <p className="flex justify-center text-dark-gray-2 c-text-small bold w-[88px] ">R$100,00</p>
                    <p className="flex justify-center w-[80px] text-light-gray-2 font-normal font-sans text-[12px] leading-[28px] tracking-[0.75px] line-through ">R$120,00</p>
                  </div>
                </div>

              </div>


              <div className="w-full h-[2px] bg-light-gray-2 border-0 "></div>

              <div className="flex flex-col w-full gap-[20px]">
                <div className="flex c-text-small bold justify-between w-full text-dark-gray ">
                  <p className="c-text-small bold">Valor Total:</p>
                  <p className="flex c-text-small bold text-error ">R$ 200,00</p>
                </div>
                <div className="flex justify-between items-center ">
                  <p className="text-dark-gray-2 underline">Esvaziar</p>
                  <Button buttonType='primary' className="w-[124.78px] rounded-[8px] c-text-extra-small bold" label="Ver Carrinho" ></Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>
      <Sidebar openSidebar={openSidebar} />
    </>
  );
}

export default Header