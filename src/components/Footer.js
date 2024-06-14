import React from 'react';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.min.css';


const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${(props) => props.theme.colors.footercolor};
  color: #fff;
  padding: 40px 50px; /* Increase padding for better spacing */
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
`;

const FooterColumn = styled.div`
  flex: 1;
  margin: 20px;
  min-width: 200px; /* Ensure columns do not shrink too small */
`;

const FooterTitle = styled.h3`
  margin-bottom: 10px;
  font-weight: bold;
`;

const FooterItem = styled.div`
  margin: 5px 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterColumn>
        <FooterTitle>Dream-Insight</FooterTitle>
        <FooterItem>Empowering you to decode your dreams with advanced AI technology. Explore our tools and insights to better understand your subconscious mind. Your journey to self-discovery starts here.</FooterItem>
        <FooterItem>
          <SocialLinks>
            <SocialIcon href="#"><i className="fab fa-twitter"></i></SocialIcon>
            <SocialIcon href="#"><i className="fab fa-facebook-f"></i></SocialIcon>
            <SocialIcon href="#"><i className="fab fa-instagram"></i></SocialIcon>
            <SocialIcon href="#"><i className="fab fa-linkedin-in"></i></SocialIcon>
          </SocialLinks>
        </FooterItem>
      </FooterColumn>
      <FooterColumn>
        <FooterTitle>Company</FooterTitle>
        <FooterItem>About us</FooterItem>
        <FooterItem>Contact us</FooterItem>
        <FooterItem>Careers</FooterItem>
        <FooterItem>Press</FooterItem>
        <FooterItem>Blog</FooterItem>
      </FooterColumn>
      <FooterColumn>
        <FooterTitle>Product</FooterTitle>
        <FooterItem>Features</FooterItem>
        <FooterItem>Pricing</FooterItem>
        <FooterItem>News</FooterItem>
        <FooterItem>Help desk</FooterItem>
        <FooterItem>Support</FooterItem>
      </FooterColumn>
      <FooterColumn>
        <FooterTitle>Services</FooterTitle>
        <FooterItem>Digital Marketing</FooterItem>
        <FooterItem>Content Writing</FooterItem>
        <FooterItem>SEO for Business</FooterItem>
        <FooterItem>UI & UX</FooterItem>
      </FooterColumn>
      <FooterColumn>
        <FooterTitle>Legal</FooterTitle>
        <FooterItem>Privacy Policy</FooterItem>
        <FooterItem>Terms & Conditions</FooterItem>
      </FooterColumn>
    </FooterContainer>
  );
};

const SocialLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px; /* Adjust width as needed */
  margin-top: 20px;
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 20px;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export default Footer;
