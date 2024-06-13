import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #f8f9fa;
  padding: 20px;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const SidebarItem = styled(Link)`
  margin: 10px 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`;

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Logo to="/">DreamInsight.io</Logo>
      <SidebarItem to="/dashboard">Dashboard</SidebarItem>
      <SidebarItem to="/journal">Journal</SidebarItem>
      <SidebarItem to="/sleep-trends">Sleep Trends</SidebarItem>
      <SidebarItem to="/integrations">Integrations</SidebarItem>
      <SidebarItem to="/analysis">Analysis</SidebarItem>
      <SidebarItem to="/settings">Settings</SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;
