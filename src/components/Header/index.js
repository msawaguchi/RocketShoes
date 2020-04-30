import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import { Container, Cart } from './styles';
import {MdShoppingBasket} from 'react-icons/md';
import {useSelector} from 'react-redux';

export default function Header() {
    const cartSize = useSelector(state => state.cart.length);
    return (
    <Container >
        <Link  to="/">
         <img src={logo} alt="RocketShoes" />
        </Link>

        <Cart to="/cart">
            <div>
                <strong>Meu carrinho</strong>
                <span>{cartSize} itens</span>
            </div>
         <MdShoppingBasket  size={36} color="#FFF"/>
        </Cart>
    </Container>
  );
}

