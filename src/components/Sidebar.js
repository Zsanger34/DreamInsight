import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Logo>DreamInsight.io</Logo>
            <Nav>
                <NavItem to="/dashboard" activeClassName="active">Dashboard</NavItem>
                <NavItem to="/journal" activeClassName="active">Journal</NavItem>
                <NavItem to="/sleep-trends" activeClassName="active">Sleep Trends</NavItem>
                <NavItem to="/integrations" activeClassName="active">Integrations</NavItem>
                <NavItem to="/analysis" activeClassName="active">Analysis</NavItem>
                <NavItem to="/settings" activeClassName="active">Settings</NavItem>
            </Nav>
        </SidebarContainer>
    );
};

const SidebarContainer = styled.div`
    width: 250px;
    background-color: #f0f0f0;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100vh;
`;

const Logo = styled.h2`
    margin-bottom: 20px;
`;

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
`;

const NavItem = styled(NavLink)`
    margin: 10px 0;
    text-decoration: none;
    color: #000;
    font-size: 18px;

    &.active {
        font-weight: bold;
        color: #007bff;
    }
`;

export default Sidebar;
