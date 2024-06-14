import React, { useState } from 'react';
import styled from 'styled-components';
import SignUp from '../components/SignUp';
import Login from '../components/Login';
import ResetPassword from '../components/ResetPassword';
import ContactUs from '../components/ContactUs'; // If needed for navigation
import Header from '../components/Header';
import Footer from '../components/Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f9f9f9;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  margin-top: 20px; /* Add margin top for better spacing */
  margin-bottom: 20px; /* Add margin bottom to avoid overlap with footer */
`;

const FormWrapper = styled.div`
  max-width: 600px; /* Increase max-width for form container */
  width: 100%;
  margin: 0 auto;
  padding: 40px; /* Increase padding for better spacing */
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SignupLogin = () => {
  const [currentPage, setCurrentPage] = useState('signUp');

  const renderPage = () => {
    switch (currentPage) {
      case 'signUp':
        return <SignUp setCurrentPage={setCurrentPage} />;
      case 'login':
        return <Login setCurrentPage={setCurrentPage} />;
      case 'resetPassword':
        return <ResetPassword setCurrentPage={setCurrentPage} />;
      case 'contactUs':
        return <ContactUs />;
      default:
        return <SignUp setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <Container>
      <Header />
      <MainContent>
        <FormWrapper>
          {renderPage()}
        </FormWrapper>
      </MainContent>
      <Footer />
    </Container>
  );
};

export default SignupLogin;
