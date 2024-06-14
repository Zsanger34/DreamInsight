import React from 'react';
import styled from 'styled-components';

const ResetPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: #f9f9f9;
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 400px;
  display: flex;
  flex-direction: column;
`;

const FormField = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  border: none;
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.success};
  }
`;

const Blurb = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
`;

const ResetPassword = ({ setCurrentPage }) => {
  return (
    <ResetPasswordContainer>
      <h1>Reset Password</h1>
      <p>Enter your email to get reset link.</p>
      <FormContainer>
        <FormField type="email" placeholder="Email" />
        <SubmitButton>Send Reset Link</SubmitButton>
      </FormContainer>
      <Blurb>
        <p>
          Remembered the password? <span onClick={() => setCurrentPage('login')} style={{ color: '#007bff', cursor: 'pointer' }}>Sign in now</span>
        </p>
      </Blurb>
    </ResetPasswordContainer>
  );
};

export default ResetPassword;
