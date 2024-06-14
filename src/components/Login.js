import React from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormField = styled.input`
  margin-bottom: 20px; /* Increase margin bottom for better spacing */
  padding: 15px; /* Increase padding for better spacing */
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%; /* Full width of the form wrapper */
`;

const SubmitButton = styled.button`
  padding: 15px; /* Increase padding for better spacing */
  border: none;
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  width: 100%; /* Full width of the form wrapper */

  &:hover {
    background-color: ${(props) => props.theme.colors.success};
  }
`;

const Blurb = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
`;

const Login = ({ setCurrentPage }) => {
  return (
    <LoginContainer>
      <h1>Login</h1>
      <p>To get started, you need to sign in here.</p>
      <FormField type="email" placeholder="Email" />
      <FormField type="password" placeholder="Password" />
      <SubmitButton>Sign in</SubmitButton>
      <Blurb>
        <p>
          Forgot password? <span onClick={() => setCurrentPage('resetPassword')} style={{ color: '#007bff', cursor: 'pointer' }}>Reset it here</span>
        </p>
        <p>
          Don’t have an account? <span onClick={() => setCurrentPage('signUp')} style={{ color: '#007bff', cursor: 'pointer' }}>Create an account</span>
        </p>
      </Blurb>
    </LoginContainer>
  );
};

export default Login;
