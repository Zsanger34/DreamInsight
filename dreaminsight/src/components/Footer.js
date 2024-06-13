import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterLogo>DreamInsight.io</FooterLogo>
                <FooterDescription>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</FooterDescription>
                <FooterLinks>
                    <FooterColumn>
                        <FooterTitle>Company</FooterTitle>
                        <FooterLink href="#">About us</FooterLink>
                        <FooterLink href="#">Careers</FooterLink>
                        <FooterLink href="#">Press</FooterLink>
                        <FooterLink href="#">Blog</FooterLink>
                    </FooterColumn>
                    <FooterColumn>
                        <FooterTitle>Product</FooterTitle>
                        <FooterLink href="#">Features</FooterLink>
                        <FooterLink href="#">Pricing</FooterLink>
                        <FooterLink href="#">News</FooterLink>
                        <FooterLink href="#">Helpdesk</FooterLink>
                        <FooterLink href="#">Support</FooterLink>
                    </FooterColumn>
                    <FooterColumn>
                        <FooterTitle>Services</FooterTitle>
                        <FooterLink href="#">Digital Marketing</FooterLink>
                        <FooterLink href="#">Content Writing</FooterLink>
                        <FooterLink href="#">SEO for Business</FooterLink>
                        <FooterLink href="#">UI/UX</FooterLink>
                    </FooterColumn>
                    <FooterColumn>
                        <FooterTitle>Legal</FooterTitle>
                        <FooterLink href="#">Privacy Policy</FooterLink>
                        <FooterLink href="#">Terms & Conditions</FooterLink>
                    </FooterColumn>
                </FooterLinks>
                <FooterSocial>
                    <SocialLink href="#"><i className="fab fa-twitter"></i></SocialLink>
                    <SocialLink href="#"><i className="fab fa-facebook-f"></i></SocialLink>
                    <SocialLink href="#"><i className="fab fa-linkedin-in"></i></SocialLink>
                    <SocialLink href="#"><i className="fab fa-instagram"></i></SocialLink>
                </FooterSocial>
            </FooterContent>
        </FooterContainer>
    );
};

const FooterContainer = styled.footer`
    background-color: #2c2c2c;
    color: #fff;
    padding: 50px;
`;

const FooterContent = styled.div`
    text-align: center;
`;

const FooterLogo = styled.h2`
    font-size: 24px;
    margin-bottom: 20px;
`;

const FooterDescription = styled.p`
    margin-bottom: 20px;
`;

const FooterLinks = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`;

const FooterColumn = styled.div`
    max-width: 200px;
`;

const FooterTitle = styled.h3`
    font-size: 18px;
    margin-bottom: 10px;
`;

const FooterLink = styled.a`
    display: block;
    color: #fff;
    text-decoration: none;
    margin-bottom: 10px;
`;

const FooterSocial = styled.div`
    margin-top: 20px;
`;

const SocialLink = styled.a`
    color: #fff;
    margin-right: 10px;
    font-size: 18px;
    text-decoration: none;
`;

export default Footer;
