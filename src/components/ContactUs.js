import React from 'react';
import styled from 'styled-components';

const ContactUsContainer = styled.div`
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

const TextArea = styled.textarea`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: none;
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

const ContactUs = () => {
  return (
    <ContactUsContainer>
      <h1>Contact us</h1>
      <FormContainer>
        <FormField type="text" placeholder="First & Last Name" />
        <FormField type="email" placeholder="Email" />
        <FormField type="text" placeholder="Subject" />
        <TextArea rows="5" placeholder="Type your message"></TextArea>
        <SubmitButton>Send</SubmitButton>
      </FormContainer>
    </ContactUsContainer>
  );
};

export default ContactUs;
