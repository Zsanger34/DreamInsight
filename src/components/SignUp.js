import React from 'react';
import styled from 'styled-components';

const SignUpContainer = styled.div`
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

const SignUp = ({ setCurrentPage }) => {
  return (
    <SignUpContainer>
      <h1>Sign up</h1>
      <p>To get started, you need to sign up here.</p>
      <FormField type="text" placeholder="First & Last Name" />
      <FormField type="email" placeholder="Email" />
      <FormField type="password" placeholder="Password" />
      <FormField type="password" placeholder="Confirm Password" />
      <SubmitButton>Create an account</SubmitButton>
      <Blurb>
        <p>
          Already have an account? <span onClick={() => setCurrentPage('login')} style={{ color: '#007bff', cursor: 'pointer' }}>Sign in now</span>
        </p>
      </Blurb>
    </SignUpContainer>
  );
};

export default SignUp;
