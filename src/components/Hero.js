import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Dream from '../images/Dream.jpg';

const Hero = () => {
    return (
        <HeroContainer>
            <HeroContent>
                <Title>Welcome to DreamInsight</Title>
                <Subtitle>
                    Discover the deeper meanings of your dreams with DreamInsight. Our AI technology provides personalized insights and trends. Sign up now to start your journey!
                </Subtitle>
                <CTAButton to="/login">Sign Up / Login</CTAButton>
            </HeroContent>
            <HeroImage src={Dream} alt="Dream Image" />
        </HeroContainer>
    );
};

const HeroContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 50px;
    background-color: ${(props) => props.theme.colors.danger};
`;

const HeroContent = styled.div`
    max-width: 50%;
`;

const Title = styled.h1`
    font-size: 48px;
    color: ${(props) => props.theme.colors.primary};
`;

const Subtitle = styled.p`
    margin: 20px 0;
    color: ${(props) => props.theme.colors.primary};
`;

const CTAButton = styled(Link)`
    padding: 10px 20px;
    background-color: ${(props) => props.theme.colors.primary};
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        background-color: ${(props) => props.theme.colors.success};
    }
`;

const HeroImage = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
`;

export default Hero;
