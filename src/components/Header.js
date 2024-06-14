import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: ${(props) => props.theme.colors.danger};
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.success};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;

const NavItem = styled(Link)`
  margin: 0 20px;
  text-decoration: none;
  color: ${(props) => props.theme.colors.success};
  font-size: 22px;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const LoginButton = styled(Link)`
  padding: 5px 10px;
  border: none;
  background-color: ${(props) => props.theme.colors.success};
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

const Header = () => {
  return (
    <Nav>
      <Logo to="/">Dream-Insight</Logo>
      <NavMenu>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/dashboard">Features</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/contactus">Contact</NavItem>
      </NavMenu>
      <LoginButton to="/Signup-Login">Sign Up / Login</LoginButton>
    </Nav>
  );
};

export default Header;
