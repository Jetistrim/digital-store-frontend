import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
        <img src="src/assets/images/404dog.png" alt="" />
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404 :/</h1>
      <p className="text-xl text-gray-600 mb-8">Algo de errado não está certo! A página que você está procurando não foi encontrada.</p>
      <Link
        to="/"
        className="px-4 py-2 bg-primary-1 text-white rounded-lg hover:bg-tertiary transition duration-300"
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
};

export default NotFound;