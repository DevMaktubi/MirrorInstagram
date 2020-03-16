import React from 'react';
import { MdHome } from 'react-icons/md';
import { FaCompass, FaHeart } from 'react-icons/fa';

import { MainHeader } from './styles';
import logo from '../../assets/images/instalogo.svg.png';
import eu from '../../assets/images/eu.jpeg';

export default function Header() {
  return (
    <MainHeader>
      <img src={logo} alt="" />
      <input type="text" placeholder="Pesquisar" />
      <div className="actions">
        <MdHome size={37} />
        <FaCompass size={35} />
        <FaHeart size={35} />
        <img src={eu} alt="" />
      </div>
    </MainHeader>
  );
}
