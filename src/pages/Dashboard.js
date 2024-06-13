import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  margin-left: 250px;
  padding-top: 60px;
  padding-bottom: 60px; /* To avoid overlapping with the footer */
  min-height: 100vh;
  background-color: #f1f1f1;
`;

const Content = styled.div`
  padding: 20px;
`;

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <DashboardContainer>
        <Content>
          <h1>Dashboard</h1>
          {/* Your content here */}
        </Content>
      </DashboardContainer>
      <Footer />
    </>
  );
};

export default Dashboard;
