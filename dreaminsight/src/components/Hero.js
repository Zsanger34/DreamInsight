import React from 'react';
import styled from 'styled-components';

const Hero = () => {
    return (
        <HeroContainer>
            <HeroContent>
                <Title>Welcome to DreamInsight</Title>
                <Subtitle>
                    Discover the deeper meanings of your dreams with DreamInsight. Our AI technology provides personalized insights and trends. Sign up now to start your journey!
                </Subtitle>
                <CTAButton>Sign Up / Login</CTAButton>
            </HeroContent>
            <HeroImage src="path-to-your-image.jpg" alt="Dream Image" />
        </HeroContainer>
    );
};

const HeroContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 50px;
    background-color: #f9f9f9;
`;

const HeroContent = styled.div`
    max-width: 50%;
`;

const Title = styled.h1`
    font-size: 48px;
`;

const Subtitle = styled.p`
    margin: 20px 0;
`;

const CTAButton = styled.button`
    background-color: #88C7D6;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
`;

const HeroImage = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
`;

export default Hero;
