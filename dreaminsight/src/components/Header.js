import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    return (
        <Nav>
            <Logo>DreamInsight.io</Logo>
            <NavMenu>
                <NavItem to="/">Home</NavItem>
                <NavItem to="/features">Features</NavItem>
                <NavItem to="/about">About</NavItem>
                <NavItem to="/contact">Contact</NavItem>
            </NavMenu>
            <LoginButton>Sign Up / Login</LoginButton>
        </Nav>
    );
};

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #fff;
    border-bottom: 1px solid #eaeaea;
`;

const Logo = styled.div`
    font-size: 24px;
    font-weight: bold;
`;

const NavMenu = styled.div`
    display: flex;
`;

const NavItem = styled(Link)`
    margin-left: 20px;
    text-decoration: none;
    color: #000;
`;

const LoginButton = styled.button`
    background-color: #88C7D6;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
`;

export default Header;
