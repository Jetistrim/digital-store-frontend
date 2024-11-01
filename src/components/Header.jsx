





















import { MenuIcon, SearchIcon, ShoppingCartIcon } from "lucide-react"; // Exemplos de ícones
import { useCallback, useState } from "react";
import { Link, NavLink } from "react-router-dom";



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
          <button className="p-2 relative">
            <ShoppingCartIcon className="text-primary-1 " />
            <span className="font-sans w-[17px] absolute top-0 right-0 bg-red-500 [&&]:!bg-primary-1 text-white text-xs rounded-full flex items-center justify-center">
              2
            </span>
          </button>
        </div>
      </header>
      <Sidebar openSidebar={openSidebar} />
    </>
  );
}

export default Header