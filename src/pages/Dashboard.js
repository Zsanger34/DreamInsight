import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import TopNav from '../components/TopNav';
import MainContent from '../components/MainContent';

const Dashboard = () => {
  
    return (
        <DashboardContainer>
            <Sidebar />
            <Content>
                <TopNav />
                <MainContent />
            </Content>
        </DashboardContainer>
    );
};

const DashboardContainer = styled.div`
    display: flex;
    height: 100vh;
`;

const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 250px; /* Adjust based on Sidebar width */
`;

export default Dashboard;
