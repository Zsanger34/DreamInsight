import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  width: calc(100% - 250px);
  height: 60px;
  background-color: #fff;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 5px 10px;
  margin-right: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const SearchButton = styled.button`
  padding: 5px 10px;
  border: none;
  background-color: #007bff;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <div>Overview</div>
      <NavbarRight>
        <SearchInput type="text" placeholder="Search for something" />
        <SearchButton>Search</SearchButton>
        <span style={{ marginLeft: '20px' }}>User Icon</span>
      </NavbarRight>
    </NavbarContainer>
  );
};

export default Navbar;
