import React from 'react';
import styled from 'styled-components';

const TopNav = () => {
    return (
        <TopNavContainer>
            <SearchInput type="text" placeholder="Search for something" />
            <Icons>
                <Icon className="fas fa-cog" />
                <Icon className="fas fa-user-circle" />
            </Icons>
        </TopNavContainer>
    );
};

const TopNavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #fff;
    border-bottom: 1px solid #eaeaea;
    margin-left: 250px; /* Adjust based on Sidebar width */
`;

const SearchInput = styled.input`
    flex: 1;
    margin-right: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Icons = styled.div`
    display: flex;
    align-items: center;
`;

const Icon = styled.i`
    font-size: 24px;
    margin-left: 20px;
    cursor: pointer;
`;

export default TopNav;
